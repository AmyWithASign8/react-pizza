import { combineReducers } from "redux";

import filters from "./filters";
import pizzas from "./pizzas";
import cart from "./cart";
import user from "./user";

const rootReducer = combineReducers({
  filters,
  pizzas,
  cart,
  user,
});

export default rootReducer;
