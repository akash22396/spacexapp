import React, { useState, useEffect } from "react";
import ProgramBox from "../components/ProgramBox";
import Axios from "axios";
import { connect } from "react-redux";

function Programs(props) {
  let api = "";
  let ids = props.match.params;
  // console.log(props)
  api = ids.launch
    ? `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${ids.launch}`
    : ids.landing
    ? `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=${ids.landing}`
    : ids.year
    ? `https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${ids.year}`
    : "";


  const [values, setValues] = useState([]);
  const getData = () => {
    // console.log(api)
    Axios.get(api)
      .then((res) => {
        // console.log(res.data)
        setValues(res.data);
      })
      .catch((err) => {
        console.log({ msg: "error" });
      });
  };
  useEffect(() => {
    getData();
  }, [props]);

  let alert = ''
  setTimeout(() => {
    alert = (
        <div className="w-100">
          <div className="alert alert-danger">No record found.</div>
        </div>
      );
  }, 1000);
   
  return (
    <div className="container-2">
      {values.length > 0
        ? values.map((data, i) => <ProgramBox data={data} key={i} />)
        : alert}
    </div>
  );
}

const mapGetState = (state) => {
  return {
    launch_status: state.programReducer.launch_status,
    landing_status: state.programReducer.landing_status,
    year: state.programReducer.year,
  };
};
const mapDispatchState = (dispatch) => {
  return {
    //   login: (data) => dispatch({ type: actionType.LOGIN_ST, payload: data }),
    //   userData: (data) => dispatch(userLoginAction(data)),
  };
};
export default connect(mapGetState, mapDispatchState)(Programs);
