import React from "react";

function ProgramBox(props) {
  // console.log(props.data)
  let noImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png";
  return props.data ? (
    <div className=" mb-4 d-flex card">
      <div className="">
       
          <div className="bg-light">
            <img
              src={
                props.data.links
                  ? props.data.links.mission_patch
                    ? props.data.links.mission_patch
                    : noImage
                  : noImage
              }
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="py-2">
            <div>
              <h3><strong className='text-blue'>
                {props.data.mission_name} #{props.data.flight_number}
              </strong>
              </h3>
              <br />
              <strong>Mission Ids : </strong><br/>
              <ul className='text-blue'>
                {props.data.mission_id.map((ids, i) => (
                  <li key={i}>{ids}</li>
                ))}
              </ul>
            </div>
            <div className="d-flex">
              <div>
                <strong>Launch Year :</strong> <span className='text-blue'> {props.data.launch_year}</span>
              </div>
            </div>

            <div className="d-flex">
              <div>
                <strong>
                  Successful
                  <br /> Launch
                </strong>
              </div>
              <div className="text-left ml-4 w-100">
               <span className='text-blue'> {props.data.launch_success ? "true" : "false"}</span>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <strong>
                  Successful
                  <br /> Landing
                </strong>
              </div>

              <div className="text-left ml-4 w-100 text-blue">
                {props.data.launch_success
                  ? props.data.rocket.first_stage.cores[0].land_success
                  ? "true"
                  : "false"
                  : "false"}
              </div>
            </div>
          </div>
        </div>
      </div>
  
  ) : (
    <div className="col-md-12">
      <div className="alert alert-danger">No record found.</div>
    </div>
  );
}

export default ProgramBox;
