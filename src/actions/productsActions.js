import { FETCH_PRODUCTS, FILTER_PRODUCTS, SORT_PRODUCTS } from "../constants/actionTypes"
import callApi from "../utils/apiCaller"

export const fetchProducts = ()=> async (dispatch)=>{
  const res = await callApi('products')();
  dispatch({
    type:FETCH_PRODUCTS,
    products:res.data
  })
}
  

export const sortProducts=(order)=>{
  return {
    type: SORT_PRODUCTS,
    payload:{
      order
    }
  }
}

export const filterProducts = (temp) => async (dispatch)=>{
  const res= await callApi('products')();
  dispatch({
    type: FILTER_PRODUCTS,
    products: res.data.filter((product) =>{
      return product.title.includes(temp);
    })
  })
}