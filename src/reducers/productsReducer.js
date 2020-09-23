import { FETCH_PRODUCTS, SEARCH_PRODUCTS, SORT_PRODUCTS } from "../constants/actionTypes";
import data from '../data.json';

const productsReducer= (state=[], action)=>{
  switch(action.type){
    case FETCH_PRODUCTS:
      return data

    case SORT_PRODUCTS:
      state.sort((a,b)=> {
        let result = a.price - b.price;
        return action.payload.order === "lowest" ? result : (-1* result) ;
      })
      return [...state];
    
    case SEARCH_PRODUCTS:
      return data.filter((product) =>{
        return product.title.includes(action.payload.temp);
      });

    default:
      return [...state];
  }
}
export default productsReducer;