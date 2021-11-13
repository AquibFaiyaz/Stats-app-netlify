import React from "react";

function Mean({ dataSet, mean, setMean }) {
  let total = dataSet.reduce((acc, curr) => acc + curr, 0);
  setMean((total / dataSet.length).toFixed(2));
  return (
    <div className="mean">
      <h1>Mean</h1>
      <div className="underline"></div>
      <h2>{mean}</h2>
    </div>
  );
}

export default Mean;
