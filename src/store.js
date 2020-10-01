import {applyMiddleware, combineReducers, createStore} from "redux";
import productsReducer from './reducers/productsReducer';
import cartReducer from './reducers/cartReducer';
import orderReducer from "./reducers/orderReducer";
import thunk from "redux-thunk";


const compose = (f, g)=>(...agr)=>f(g(...agr));
const store = createStore(
  combineReducers({
    products: productsReducer,
    cart:cartReducer,
    orders: orderReducer,
  }),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
export default store;
