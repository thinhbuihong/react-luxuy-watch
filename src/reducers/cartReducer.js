const { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } = require("../constants/actionTypes");

const cartReducer = (state=[], action)=>{
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
      return [...state];
    
    // remove from cart 
    case REMOVE_FROM_CART:
      const productRemove = action.payload.product;
      return state.slice().filter(item=> item.product._id !== productRemove._id);
    
    //clear cart
    case CLEAR_CART:
      return [];
    
    default:
      return [...state];
  }
}
export default cartReducer;