import { serializeState } from './url-state.js';

function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => {
    document.body.removeChild(notification);
  }, 2000);
}

export function initUI(curveManager) {
  console.log('Initializing UI...');
  renderCurveList(curveManager);

  const copyShareableUrlButton = document.getElementById('copy-shareable-url');
  copyShareableUrlButton.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href);
    showNotification('Shareable URL copied!');
  });

  const copyAllCssButton = document.getElementById('copy-all-css');
  copyAllCssButton.addEventListener('click', () => {
    let allCss = '';
    for (const curve of curveManager.curves) {
      allCss += `--${curve.name.toLowerCase().replace(/\s+/g, '-')}: ${curve.toCss()};
`;
    }
    navigator.clipboard.writeText(allCss);
    showNotification('Copied all CSS to clipboard!');
  });
}

function renderCurveControls(container, curve, curveManager) {
  const controlsContainer = document.createElement('div');
  controlsContainer.className = 'curve-controls';

  const p1xInput = createInput('p1x', curve.p1.x);
  const p1yInput = createInput('p1y', curve.p1.y);
  const p2xInput = createInput('p2x', curve.p2.y);
  const p2yInput = createInput('p2y', curve.p2.y);

  const copyCssButton = document.createElement('button');
  copyCssButton.textContent = 'Copy CSS';
  copyCssButton.addEventListener('click', () => {
    navigator.clipboard.writeText(curve.toCss());
    showNotification('Copied to clipboard!');
  });

  controlsContainer.appendChild(p1xInput);
  controlsContainer.appendChild(p1yInput);
  controlsContainer.appendChild(p2xInput);
  controlsContainer.appendChild(p2yInput);
  controlsContainer.appendChild(copyCssButton);

  container.appendChild(controlsContainer);

  p1xInput.addEventListener('input', (e) => {
    curve.p1.x = parseFloat(e.target.value);
    updateCurve(curve, curveManager);
  });
  p1yInput.addEventListener('input', (e) => {
    curve.p1.y = parseFloat(e.target.value);
    updateCurve(curve, curveManager);
  });
  p2xInput.addEventListener('input', (e) => {
    curve.p2.x = parseFloat(e.target.value);
    updateCurve(curve, curveManager);
  });
  p2yInput.addEventListener('input', (e) => {
    curve.p2.y = parseFloat(e.target.value);
    updateCurve(curve, curveManager);
  });
}

function createInput(name, value) {
  const input = document.createElement('input');
  input.type = 'number';
  input.step = 0.01;
  input.name = name;
  input.value = value;
  return input;
}

function updateCurve(curve, curveManager) {
  renderCurveList(curveManager);
  window.location.hash = serializeState(curveManager);
  // Also update the main curve editor view if this curve is active there
}

function renderCurveList(curveManager) {
  const container = document.querySelector('.curves-list-container');
  if (!container) return;

  const ul = document.createElement('ul');
  ul.className = 'curves-list';

  for (const curve of curveManager.curves) {
    const li = document.createElement('li');
    li.className = 'curve-item';
    li.dataset.curveId = curve.id;
    li.innerHTML = `
      <div class="curve-name">${curve.name}</div>
      <div class="curve-css">${curve.toCss()}</div>
    `;
    li.addEventListener('click', () => {
      const currentActive = document.querySelector('.curve-item.active');
      if (currentActive) {
        currentActive.classList.remove('active');
      }
      li.classList.add('active');
      renderCurveControls(li, curve, curveManager);
    });
    ul.appendChild(li);
  }

  container.innerHTML = '';
  container.appendChild(ul);
}