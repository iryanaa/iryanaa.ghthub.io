/*
Bubbling Fish Physics Simulation

- Based on buoyance and drag equations
- Parameters are set manually with trial-and-error method just
  to get convencing visual effect
*/
var g = 1, // Gravity
  pi = Math.PI,
  rho = 0.0001, // "Water" density
  D = 30, // Drag coefficient
  k = 0.0001; // Random movement factor
  damp = 16; // dt damping factor

function Bubble(s0) {
  this.x = s0.x;
  this.y = s0.y;
  this.r = s0.r;
  this.v_x = s0.v_x;
  this.v_y = s0.v_y;
  this.v_r = s0.v_r;
  this._eval(s0, 1);
}

Bubble.prototype._eval = function(s0, dt) {
  if (!s0) s0 = this;
  // In my test setup (Chrome), dt is close to 16 between frames
  // All physics parameters are acquired assuming dt == 1
  // Diffrent browsers has diffrent dt. It has to be accounted for
  // to get consistent bubbling speed cross browsers
  dt /= damp; 
  this.x += s0.v_x * dt;
  this.y += s0.v_y * dt;
  this.a_x = this._evalDrag(s0.r, s0.v_x) + this._randA();
  this.a_y = this._evalBuoyance(s0.r) + this._evalDrag(s0.r, s0.v_y) + this._randA();
  this.v_x += s0.a_x * dt;
  this.v_y += s0.a_y * dt;
  this.r += s0.v_r * dt;
};

Bubble.prototype.update = function(dt) {
  this._eval(this, dt);
};

Bubble.prototype._evalDrag = function(r, v) {
  var d = v > 0 ? -1 : 1;
  var A = pi * r * r;
  return d * 0.5 * rho * v * v * A * D;
};

Bubble.prototype._evalBuoyance = function(r) {
  var V = 4 * pi * r * r * r / 3;
  return -1 * rho * V * g;
};

Bubble.prototype._randA = function() {
  return k * Math.random();
};

function BubbleView(el, s0) {
  this.s0 = s0;
  this.el = el;
  this._bubble = new Bubble(s0);
  this._bubbling = false;
  this._t = -1;
  this.draw();
}

BubbleView.prototype.draw = function() {
  var s = "scale(" + this._bubble.r + ")";
  var tX = "translateX(" + this._bubble.x + "em)";
  var tY = "translateY(" + this._bubble.y + "em)";
  var trans = s + " " + tX + " " + tY;
  this.el.style.transform = trans;
};

BubbleView.prototype.reset = function() {
  this._bubble = new Bubble(this.s0);
};

BubbleView.prototype.start = function() {
  this._bubbling = true;
  requestAnimationFrame(this._tick.bind(this));
};

BubbleView.prototype.stop = function() {
  this._bubbling = false;
};

BubbleView.prototype._tick = function(t) {
  if (this._t < 0) {
    this._t = t - 1;
  }
  var dt = t - this._t;
  this._t = t;

  this._bubble.update(dt);
  this.draw();

  if (this._bubble.y < -0.5) {
    this.reset();
  }

  if (this._bubbling) {
    requestAnimationFrame(this._tick.bind(this));
  }
};

var vx_0 = 0.003;

var els = document.querySelectorAll('.bubble');

for (var i = 0; i < els.length; i++) {
  var el = els[i];
  var b = new BubbleView(el, {
    x: 0,
    y: 0,
    r: Math.random(),
    a_x: 0,
    a_y: 0,
    v_x: 0.0003,
    v_y: 0,
    v_r: 0.03
  });

  setTimeout(b.start.bind(b), Math.random() * 10);
}
