import { Curve } from './curve.js';

export class CurveManager {
  constructor() {
    this.curves = [];
    this.presets = {};
  }

  async loadPresets() {
    try {
      const response = await fetch('../curves/presets.json');
      this.presets = await response.json();
      for (const name in this.presets) {
        const values = this.presets[name];
        this.addCurve(name, ...values);
      }
    } catch (error) {
      console.error('Failed to load presets:', error);
    }
  }

  addCurve(name, p1x, p1y, p2x, p2y) {
    const newCurve = new Curve(name, p1x, p1y, p2x, p2y);
    this.curves.push(newCurve);
    return newCurve;
  }

  removeCurve(id) {
    this.curves = this.curves.filter(curve => curve.id !== id);
  }

  getCurveById(id) {
    return this.curves.find(curve => curve.id === id);
  }
}
