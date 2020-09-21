import {combineReducers, createStore} from "redux";
import productsReducer from './reducers/productsReducer';
import cartReducer from './reducers/cartReducer';
import orderReducer from "./reducers/orderReducer";

const store = createStore(
  combineReducers({
    products: productsReducer,
    cart:cartReducer,
    order: orderReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store;
