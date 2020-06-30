import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

let store;
export function configureStore() {
  store = createStore(reducers, applyMiddleware(thunk));
  return store;
}
