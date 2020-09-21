import { CREATE_ORDER } from "../constants/actionTypes"

export const createOrder = (order) =>{
  return {
    type: CREATE_ORDER,
    payload:{
      order,
    }
  }
}