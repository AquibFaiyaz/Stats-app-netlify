import React from "react";

function StandardDev({ dataSet, standardDev, setStandardDev, mean }) {
  let sqSum = dataSet.reduce((acc, curr) => {
    let sub = Math.pow(curr - mean, 2);
    acc = acc + sub;
    return acc;
  }, 0);

  setStandardDev(Math.sqrt(sqSum / dataSet.length).toFixed(2));

  return (
    <div className="standardDev">
      <h1>Standard Deviation</h1>
      <div className="underline"></div>
      <h2>{standardDev}</h2>
    </div>
  );
}

export default StandardDev;
