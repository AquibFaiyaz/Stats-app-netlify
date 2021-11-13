import { index } from "mathjs";
import React from "react";
import { v4 as uuidv4, v4 } from "uuid";

function DataSet({ dataSet }) {
  return (
    <>
      <h2 className="data-logo">Data Set</h2>
      <ul className="dataSet">
        {dataSet.map((data) => {
          return <li key={uuidv4()}>{data}</li>;
        })}
      </ul>
    </>
  );
}

export default DataSet;
