import { combineReducers } from "redux";
import transactions from "./transactions";
import responsive from "./responsive";
import auth from "./auth";
import users from "./users";
import banners from "./banners";
import brandfriends from "./brandfriends";
import categories from "./categories";
import franchises from "./franchises";
import disputes from "./disputes";

export default combineReducers({
  transactions,
  responsive,
  auth,
  users,
  banners,
  brandfriends,
  categories,
  franchises,
  disputes,
});
