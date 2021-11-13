function Mode({ dataSet, mode, setMode }) {
  const modes = {};
  let max = 0,
    count = 0;

  for (let i = 0; i < dataSet.length; i++) {
    const item = dataSet[i];

    if (modes[item]) {
      modes[item]++;
    } else {
      modes[item] = 1;
    }

    if (count < modes[item]) {
      max = item;
      count = modes[item];
    }
  }

  setMode(max);

  return (
    <div className="mode">
      <h1>Mode</h1>
      <div className="underline"></div>
      <h2>{mode}</h2>
    </div>
  );
}

export default Mode;
