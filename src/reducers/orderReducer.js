const { CREATE_ORDER, FETCH_ORDERS } = require("../constants/actionTypes");

const orderReducer = (state=[], action) =>{
  switch(action.type){
    case CREATE_ORDER:
      return[...state];

    case FETCH_ORDERS:
      return action.orders

    default:
      return [...state];
  }
}

export default orderReducer;
