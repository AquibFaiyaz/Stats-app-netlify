import { React, useState, useEffect } from "react";
import AddValue from "./components/AddValue";
import "./styles/app.scss";
import ErrorModal from "./Modals/ErrorModal";
import Mean from "./components/Mean";
import Median from "./components/Median";
import Mode from "./components/Mode";
import StandardDev from "./components/StandardDev";
import DataSet from "./components/DataSet";
import { db } from "./db/firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  //States
  const [dataI, setDataI] = useState([]);
  const [index, setIndex] = useState(1);
  const [dataSet, setDataSet] = useState([]);
  const [mean, setMean] = useState(null);
  const [median, setMedian] = useState(null);
  const [mode, setMode] = useState([]);
  const [standardDev, setStandardDev] = useState(null);
  const [value, setValue] = useState([]);
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(true);

  const dataSetRef = collection(db, "statsData");
  //data fetching
  useEffect(() => {
    const getDataSets = async () => {
      const resp = await getDocs(dataSetRef);

      const testData = resp.docs.map((doc) => {
        return doc.data();
      });
      //console.log(testData);
      const finData = testData.map((item) => item.data);
      setDataI(finData);
      setDataSet(finData[0]);
      setLoading(false);
    };

    getDataSets();
  }, []);

  //Handlers
  const handleChange = () => {
    setIndex((index + 1) % dataI.length);
    setDataSet(dataI[index]);
  };

  //JSX
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="metrics">
          <Mean dataSet={dataSet} mean={mean} setMean={setMean} />
          <Median dataSet={dataSet} median={median} setMedian={setMedian} />
          {/* <Mode dataSet={dataSet} mode={mode} setMode={setMode} /> */}
          <StandardDev
            dataSet={dataSet}
            standardDev={standardDev}
            setStandardDev={setStandardDev}
            mean={mean}
          />
        </div>
        <DataSet dataSet={dataSet} />
        <div className="change">
          <button onClick={handleChange} className="change-btn">
            Change Data
          </button>

          {/* <AddValue
            value={value}
            setValue={setValue}
            dataSet={dataSet}
            setDataSet={setDataSet}
            error={error}
            setError={setError}
            setMsg={setMsg}
            msg={msg}
          /> */}
        </div>
        <ErrorModal error={error} setError={setError} msg={msg} />
      </div>
    );
  }
}

export default App;
