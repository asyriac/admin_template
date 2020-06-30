import { combineReducers } from "redux";
import transactions from "./transactions";
import responsive from "./responsive";

export default combineReducers({
  transactions,
  responsive,
});
