// import * as actionType from "../actions/actionType";

const initialState = {
  launch_status:'',
  landing_status:'',
  year:'',
  data:[]
};

const programReducer = (state = initialState, { type, payload }) => {
  // console.log(payload);
  switch (type) {
    case 'YEAR':
      return {
        ...state,
        year: payload,
      };
    case 'LAUNCH':
      return {
        ...state,
        launch_status: payload,
      };

    case 'LANDING':
      return {
        ...state,
        landing_status: payload,
      };
    case 'DATA':
        return {
            ...state,
            data:state.data.push(payload)
        };
    default:
      return state;
  }
};

export default programReducer;
