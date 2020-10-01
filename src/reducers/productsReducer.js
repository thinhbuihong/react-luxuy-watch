import { FETCH_PRODUCTS, FILTER_PRODUCTS, SORT_PRODUCTS } from "../constants/actionTypes";


const productsReducer= (state=[], action)=>{
  switch(action.type){
    case FETCH_PRODUCTS:
      return action.products

    case SORT_PRODUCTS:
      state.sort((a,b)=> {
        let result = a.price - b.price;
        return action.payload.order === "lowest" ? result : (-1* result) ;
      })
      return [...state];
    
    case FILTER_PRODUCTS:
      return action.products;

    default:
      return [...state];
  }
}
export default productsReducer;