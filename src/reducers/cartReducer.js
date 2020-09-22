const { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } = require("../constants/actionTypes");

const initialState = JSON.parse(localStorage.getItem("cart")) || [];
const cartReducer = (state= initialState, action)=>{
  switch(action.type){
    // add to cart 
    case ADD_TO_CART:
      const {product} = action.payload;
      let i = state.findIndex(x=>{
        return product._id === x.product._id;
      });
      if(i!== -1){
        state[i].quantity +=1;
      }else{
        state.push({
          product, quantity: 1
        })
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    
    // remove from cart 
    case REMOVE_FROM_CART:
      const productRemove = action.payload.product;
      localStorage.setItem("cart", JSON.stringify(state));
      return state.slice().filter(item=> item.product._id !== productRemove._id);
    
    //clear cart
    case CLEAR_CART:
      localStorage.setItem("cart", JSON.stringify(state));
      return [];
    
    default:
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
  }
}
export default cartReducer;