const { ADD_TO_CART } = require("../constants/actionTypes");

const cartReducer = (state=[], action)=>{
  switch(action.type){
    case ADD_TO_CART:
      console.log(state);
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
    
    default:
      return [...state];
  }
}
export default cartReducer;