import React from "react";

function Median({ dataSet, median, setMedian }) {
  dataSet.sort((a, b) => a - b);
  let mid = Math.floor(dataSet.length / 2);

  if (dataSet.length % 2 !== 0) {
    setMedian(dataSet[mid].toFixed(2));
  } else {
    setMedian(((dataSet[mid - 1] + dataSet[mid]) / 2).toFixed(2));
  }
  return (
    <div className="median">
      <h1>Median</h1>
      <div className="underline"></div>
      <h2>{median}</h2>
    </div>
  );
}

export default Median;
