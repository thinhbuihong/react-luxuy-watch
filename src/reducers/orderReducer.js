const { CREATE_ORDER } = require("../constants/actionTypes");

const initialState = JSON.parse(localStorage.getItem("orders")) || [];
const orderReducer = (state=initialState, action) =>{
  switch(action.type){
    case CREATE_ORDER:
      state.push(action.payload.order);
      localStorage.setItem("orders", JSON.stringify(state));
      return[...state];

    default:
      localStorage.setItem("orders", JSON.stringify(state));
      return [...state];
  }
}

export default orderReducer;
