import BezierEasing from 'bezier-easing';

export class CurveEditor {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.init();
  }

  init() {
    this.setupCanvas();
    this.addEventListeners();
    this.p0 = { x: 0, y: 0 };
    this.p1 = { x: 0.25, y: 0.1 };
    this.p2 = { x: 0.75, y: 0.9 };
    this.p3 = { x: 1, y: 1 };
    this.dragging = null;
    this.hovering = null;
    this.t = 0;
    this.animationSpeed = 0.01;
    this.dotRadius = 5;
    this.playing = false;
    this.loop = true;
    this.curveValuesEl = document.getElementById('curve-values');
    this.updateCurveValues();
    this.draw();
    this.startAnimation();
    console.log('CurveEditor initialized');
  }

  setAnimationSpeed(speed) {
    this.animationSpeed = speed;
  }

  play() {
    this.playing = true;
  }

  pause() {
    this.playing = false;
  }

  startAnimation() {
    this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    if (this.playing) {
      this.t += this.animationSpeed;
      if (this.t > 1) {
        if (this.loop) {
          this.t = 0;
        } else {
          this.t = 1;
          this.pause();
        }
      }
    }
    this.draw();
    this.drawDot();
    this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
  }

  drawDot() {
    const easing = BezierEasing(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
    const y = easing(this.t);
    const p = this.toCanvasCoords({ x: this.t, y });
    const { ctx } = this;
    ctx.fillStyle = 'purple';
    ctx.beginPath();
    ctx.arc(p.x, p.y, this.dotRadius, 0, 2 * Math.PI);
    ctx.fill();
  }

  setupCanvas() {
    const dpr = window.devicePixelRatio || 1;
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.ctx.scale(dpr, dpr);
    this.width = rect.width;
    this.height = rect.height;
  }

  addEventListeners() {
    this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
    this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this));
    this.canvas.addEventListener('mouseup', this.onMouseUp.bind(this));
    this.canvas.addEventListener('touchstart', this.onMouseDown.bind(this));
    this.canvas.addEventListener('touchmove', this.onMouseMove.bind(this));
    this.canvas.addEventListener('touchend', this.onMouseUp.bind(this));
    window.addEventListener('resize', this.setupCanvas.bind(this));
  }

  toCanvasCoords(p) {
    return { x: p.x * this.width, y: (1 - p.y) * this.height };
  }

  fromCanvasCoords(p) {
    return { x: p.x / this.width, y: 1 - p.y / this.height };
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawGrid();
    this.drawCurve();
    this.drawHandles();
  }

  drawCurve() {
    const { ctx } = this;
    const p0 = this.toCanvasCoords(this.p0);
    const p1 = this.toCanvasCoords(this.p1);
    const p2 = this.toCanvasCoords(this.p2);
    const p3 = this.toCanvasCoords(this.p3);

    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  drawHandles() {
    const { ctx } = this;
    const p1 = this.toCanvasCoords(this.p1);
    const p2 = this.toCanvasCoords(this.p2);
    const handleRadius = 5;

    ctx.fillStyle = this.hovering === 'p1' || this.dragging === 'p1' ? 'green' : 'blue';
    ctx.beginPath();
    ctx.arc(p1.x, p1.y, handleRadius, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = this.hovering === 'p2' || this.dragging === 'p2' ? 'green' : 'blue';
    ctx.beginPath();
    ctx.arc(p2.x, p2.y, handleRadius, 0, 2 * Math.PI);
    ctx.fill();
  }

  drawGrid() {
    const { ctx, width, height } = this;
    const gridSize = 10;
    const gridWidth = width / gridSize;
    const gridHeight = height / gridSize;

    ctx.beginPath();
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 0.5;

    for (let i = 1; i < gridSize; i++) {
      const x = i * gridWidth;
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }

    for (let i = 1; i < gridSize; i++) {
      const y = i * gridHeight;
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }

    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;
    ctx.moveTo(0, 0);
    ctx.lineTo(width, 0);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, height);
    ctx.stroke();
  }

  onMouseDown(e) {
    const { x, y } = this.getMousePos(e);
    const p1 = this.toCanvasCoords(this.p1);
    const p2 = this.toCanvasCoords(this.p2);
    const handleRadius = 5;

    if (this.isPointInCircle(x, y, p1.x, p1.y, handleRadius)) {
      this.dragging = 'p1';
    } else if (this.isPointInCircle(x, y, p2.x, p2.y, handleRadius)) {
      this.dragging = 'p2';
    } else {
      this.playing = !this.playing;
    }
  }

  onMouseMove(e) {
    const { x, y } = this.getMousePos(e);
    if (this.dragging) {
      const normalized = this.fromCanvasCoords({ x, y });
      this[this.dragging] = normalized;
      this.updateCurveValues();
      this.draw();
    } else {
      const p1 = this.toCanvasCoords(this.p1);
      const p2 = this.toCanvasCoords(this.p2);
      const handleRadius = 5;
      if (this.isPointInCircle(x, y, p1.x, p1.y, handleRadius)) {
        this.hovering = 'p1';
        this.draw();
      } else if (this.isPointInCircle(x, y, p2.x, p2.y, handleRadius)) {
        this.hovering = 'p2';
        this.draw();
      } else if (this.hovering) {
        this.hovering = null;
        this.draw();
      }
    }
  }

  updateCurveValues() {
    const { p1, p2 } = this;
    this.curveValuesEl.textContent = `cubic-bezier(${p1.x.toFixed(2)}, ${p1.y.toFixed(2)}, ${p2.x.toFixed(2)}, ${p2.y.toFixed(2)})`;
  }

  onMouseUp(e) {
    this.dragging = null;
  }

  getMousePos(e) {
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  isPointInCircle(x, y, cx, cy, radius) {
    const dx = x - cx;
    const dy = y - cy;
    return dx * dx + dy * dy <= radius * radius;
  }
}

export function initCurveEditor() {
  const canvas = document.getElementById('curve-editor');
  if (canvas) {
    new CurveEditor(canvas);
  } else {
    console.error('Canvas element not found');
  }
}
