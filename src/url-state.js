export function serializeState(curveManager) {
  const data = {
    curves: curveManager.curves.map(curve => ({
      name: curve.name,
      points: [curve.p1.x, curve.p1.y, curve.p2.x, curve.p2.y]
    }))
  };
  const json = JSON.stringify(data);
  return json;
}

export function deserializeState(stateString, curveManager) {
  const json = stateString;
  const data = JSON.parse(json);
  curveManager.curves = [];
  for (const curveData of data.curves) {
    curveManager.addCurve(curveData.name, ...curveData.points);
  }
}
