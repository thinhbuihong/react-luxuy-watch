const { CREATE_ORDER } = require("../constants/actionTypes");

const orderReducer = (state=[], action) =>{
  switch(action.type){
    case CREATE_ORDER:
      state.push(action.payload.order);
      return[...state];

    default:
      return [...state];
  }
}

export default orderReducer;
