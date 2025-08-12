interface EasingFunction {
  (t: number): number;
}

const easeInOutQuad: EasingFunction = (t) => 
  t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

class EasingCurveVisualizer {
  private container: HTMLElement;
  
  constructor(containerId: string) {
    const container = document.getElementById(containerId);
    if (!container) {
      throw new Error(`Container with id "${containerId}" not found`);
    }
    this.container = container;
    this.init();
  }
  
  private init(): void {
    this.container.innerHTML = '<p>Easing curve visualization will appear here</p>';
  }
  
  public visualize(easingFn: EasingFunction, name: string): void {
    const canvas = document.createElement('canvas');
    canvas.width = this.container.clientWidth - 40;
    canvas.height = 400;
    canvas.style.display = 'block';
    canvas.style.margin = '20px auto';
    
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Could not get 2D context');
      return;
    }
    
    // Clear previous content
    this.container.innerHTML = `<h2>${name} Easing Curve</h2>`;
    this.container.appendChild(canvas);
    
    // Draw grid
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 1;
    
    // Vertical grid lines
    for (let i = 0; i <= 10; i++) {
      const x = (i / 10) * canvas.width;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    
    // Horizontal grid lines
    for (let i = 0; i <= 10; i++) {
      const y = (i / 10) * canvas.height;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    
    // Draw axes
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    
    // X axis
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.stroke();
    
    // Y axis
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, canvas.height);
    ctx.stroke();
    
    // Draw easing curve
    ctx.strokeStyle = '#3498db';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    const steps = 100;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const x = t * canvas.width;
      const y = canvas.height - easingFn(t) * canvas.height;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    
    ctx.stroke();
  }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  const visualizer = new EasingCurveVisualizer('visualization');
  
  // Visualize a sample easing curve
  visualizer.visualize(easeInOutQuad, 'Ease In Out Quad');
});

export {};
