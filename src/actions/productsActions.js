import { FETCH_PRODUCTS, SEARCH_PRODUCTS, SORT_PRODUCTS } from "../constants/actionTypes"

export const fetchProducts = ()=>{
  return {
    type: FETCH_PRODUCTS,
  }
}

export const sortProducts=(order)=>{
  return {
    type: SORT_PRODUCTS,
    payload:{
      order
    }
  }
}

export const searchProducts = (temp) =>{
  return {
    type:SEARCH_PRODUCTS,
    payload:{
      temp
    }
  }
}