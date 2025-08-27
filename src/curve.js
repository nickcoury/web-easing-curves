import BezierEasing from 'bezier-easing';

let nextId = 0;

export class Curve {
  constructor(name, p1x, p1y, p2x, p2y) {
    this.id = nextId++;
    this.name = name;
    this.p1 = { x: p1x, y: p1y };
    this.p2 = { x: p2x, y: p2y };
  }

  toCss() {
    return `cubic-bezier(${this.p1.x.toFixed(2)}, ${this.p1.y.toFixed(2)}, ${this.p2.x.toFixed(2)}, ${this.p2.y.toFixed(2)})`;
  }

  toLinearCss(steps = 10) {
    const easing = BezierEasing(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
    let values = [];
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      values.push(easing(t).toFixed(4));
    }
    return `linear(${values.join(', ')})`;
  }

  toArray(steps = 10) {
    const easing = BezierEasing(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
    let values = [];
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      values.push(easing(t).toFixed(4));
    }
    return values;
  }

  toJson() {
    return JSON.stringify({
      name: this.name,
      points: [this.p1.x, this.p1.y, this.p2.x, this.p2.y]
    });
  }
}
