import React, { useEffect } from "react";

function AddValue({
  value,
  setValue,
  dataSet,
  setDataSet,
  setError,
  error,
  setMid,
  msg,
  setMsg,
}) {
  //Handlers
  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //let result = Array.from(value[0].split(","), Number);
    if (value.length === 0 || isNaN(Number(value))) {
      setError(true);
      setMsg("Please enter a numeric value.");
      setValue("");
    } else {
      setDataSet([...dataSet, Number(value)]);

      setValue([]);
      setError(false);
    }

    //console.log(dataSet);
  };

  return (
    <form onSubmit={handleSubmit} className="value-form">
      <input
        type="text"
        value={value}
        onChange={(e) => {
          handleValueChange(e);
        }}
      />
      <button className="value-btn">Add Values</button>
    </form>
  );
}

export default AddValue;
