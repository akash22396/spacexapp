import React, { useState, useEffect } from "react";
import ProgramBox from "../components/ProgramBox";
import axios from "axios";
function Home(props) {
  // console.log(props)
  const [value, setValue] = useState([]);
  const getData = () => {
    axios
      .get("https://api.spacexdata.com/v3/launches?limit=100")
      .then((res) => {
        // console.log(res.data)
        setValue(res.data);
      })
      .catch((err) => {
        console.log({ msg: "error" });
      });
  };
  useEffect(() => {
    getData();
  }, []);
  let alert = "";
  setTimeout(() => {
    alert = (
      <div className="w-100">
        <div className="alert alert-danger">No record found.</div>
      </div>
    );
  }, 1000);
  return (
    <>
      <div className="container-2">
        {value.length > 0
          ? value.map((data, i) => <ProgramBox data={data} key={i} />)
          : alert}
      </div>
    </>
  );
}

export default Home;
