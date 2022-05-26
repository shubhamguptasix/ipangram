const initialState = {
  patientDetail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_INFO":
      state.patientDetail[action.payload[0]] = action.payload[1];

      return { patientDetail: state.patientDetail };
      break;
    default:
      return state;
  }
}

export default rootReducer;
