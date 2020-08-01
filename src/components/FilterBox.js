import React from "react";
import { NavLink,Link } from "react-router-dom";

function FilterBox(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="h4 float-left">Filters</h3>

        <div className="year float-right">
          <NavLink  className="btnCustom" to="/" >
            All
          </NavLink>
        </div>
        <div className="clearfix"></div>
        <div className="heading">
          <h4 className="">Launch Year</h4>
          <div className="borderBottom"></div>
        </div>
        <div>
          <br />
        </div>
         <div className="yearList text-center">
          <div className="year">
            <NavLink  to="/launch_year/2006" className="btnCustom ">
              2006
            </NavLink>
          </div>
          <div className="year">
            <NavLink to="/launch_year/2007" className="btnCustom">
              2007
            </NavLink>
          </div>
          <div className="year">
            <NavLink to="/launch_year/2008" className="btnCustom">
              2008
            </NavLink>
          </div>
          <div className="year">
            <NavLink to="/launch_year/2009" className="btnCustom">
              2009
            </NavLink>
          </div>
          <div className="year">
            <NavLink to="/launch_year/2010" className="btnCustom">
              2010
            </NavLink>
          </div>
          <div className="year">
            <NavLink to="/launch_year/2011" className="btnCustom">
              2011
            </NavLink>
          </div>
          <div className="year">
            <NavLink to="/launch_year/2012" className="btnCustom">
              2012
            </NavLink>
          </div>
          <div className="year">
            <NavLink to="/launch_year/2013" className="btnCustom">
              2013
            </NavLink>
          </div>
          <div className="year">
            <NavLink to="/launch_year/2014" className="btnCustom">
              2014
            </NavLink>
          </div>
          <div className="year">
            <NavLink to="/launch_year/2015" className="btnCustom">
              2015
            </NavLink>
          </div>
          <div className="year">
            <NavLink to="/launch_year/2016" className="btnCustom">
              2016
            </NavLink>
          </div>
          <div className="year">
            <NavLink to="/launch_year/2017" className="btnCustom">
              2017
            </NavLink>
          </div>
          <div className="year">
            <NavLink to="/launch_year/2018" className="btnCustom">
              2018
            </NavLink>
          </div>
          <div className="year">
            <NavLink to="/launch_year/2019" className="btnCustom">
              2019
            </NavLink>
          </div>
          <div className="year">
            <NavLink to="/launch_year/2020" className="btnCustom">
              2020
            </NavLink>
          </div>
        </div> 
        
         
        <br />
        <div className="heading">
          <h4 className="">Successful Launch </h4>
          <div className="borderBottom"></div>
        </div>
        <div>
          <br />
        </div>
        <div className="launchStatus text-center">
          <div className="">
            <NavLink to="/launch_success/true" className="btnCustom">
              True
            </NavLink>
          </div>
          <div className="">
            <NavLink to="/launch_success/false" className="btnCustom">
              Fasle
            </NavLink>
          </div>
        </div>
        <br />
        <div className="heading">
          <h4 className="">Successful Landing</h4>
          <div className="borderBottom"></div>
        </div>
        <div>
          <br />
        </div>
        <div className="landingStatus text-center">
          <div className="">
            <NavLink to="/landing_success/true" className="btnCustom">
              True
            </NavLink>
          </div>
          <div className="">
            <NavLink to="/landing_success/false" className="btnCustom">
              False
            </NavLink>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default FilterBox;
