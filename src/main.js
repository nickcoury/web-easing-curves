import { initCurveEditor } from './curve-editor.js';
import { initUI } from './ui.js';
import { CurveManager } from './curve-manager.js';
import { deserializeState } from './url-state.js';

async function init() {
  console.log('Initializing...');
  const curveManager = new CurveManager();

  if (window.location.hash) {
    deserializeState(window.location.hash.substring(1), curveManager);
  } else {
    await curveManager.loadPresets();
  }

  initCurveEditor();
  initUI(curveManager);
}

init();
