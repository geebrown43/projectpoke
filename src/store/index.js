import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./reducers/root";

let middleWare = [thunk, logger];

configureStore = () => {
  return createStore(reducer, applyMiddleware(...middleWare));
};

export default configureStore;
