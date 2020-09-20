import { FETCH_PRODUCTS } from "../constants/actionTypes";
import data from '../data.json';

const productsReducer= (state=[], action)=>{
  switch(action.type){
    case FETCH_PRODUCTS:
      return data
    
    default:
      return [...state];
  }
}
export default productsReducer;