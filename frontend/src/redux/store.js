import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducers,
  productDetailsReducers,
} from "./product/prooductReducers";
import { cartReducer } from "./cart/cartReducers";

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducers,
  cart: cartReducer,
});
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const initialStat = {
  cart: {
    cartItems: cartItemsFromStorage,
  },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialStat,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
