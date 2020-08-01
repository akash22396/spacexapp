import React from "react";
import "./App.css";
import FilterBox from "./components/FilterBox";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
function App() {
  return (
    <div className="container-fluid mainBody">
      <div className="row py-3">
        <div className="col-md-12">
          <h1 className="h2 ml-4">SpaceX Launch Programs</h1>
        </div>
        <Switch>
          <>
            <div className="container-1">
              <div className="col-one">
                <FilterBox />
              </div>

              <div className="col-two">
                <Route exact path="/" component={Home} />
                {/* <Route exact path="/index" component={Home} /> */}
                {/* <Route path="/">
                  <Redirect to="/" />
                </Route> */}
                <Route exact path="/launch_year/:year" component={Programs} />
                <Route
                  exact
                  path="/landing_success/:landing"
                  component={Programs}
                />
                <Route
                  exact
                  path="/launch_success/:launch"
                  component={Programs}
                />
                {/* <Route exact path='*' component={Home} /> */}
              </div>
            </div>
            <div className="d-flex">
              <div className="w-100 py-2">
                <p className="text-center ">
                  <strong>Developed By : </strong> Akash Kumar Singh
                </p>
              </div>
            </div>
          </>
        </Switch>
      </div>
    </div>
  );
}

export default App;
