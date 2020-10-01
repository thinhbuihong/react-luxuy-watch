import { CREATE_ORDER, FETCH_ORDERS } from "../constants/actionTypes"
import callApi from "../utils/apiCaller"

export const createOrder = (order) => async(dispatch)=>{
  const res = await callApi('orders','POST', order)();
  console.log(res)
  dispatch({
    type:CREATE_ORDER,
    order: res.data
  })
}

export const fetchOrders = () => async(dispatch)=>{
  const res = await callApi('orders')();
  dispatch({
    type: FETCH_ORDERS,
    orders:res.data
  })
}