import { combineReducers } from 'redux'

import planetsReducer from "./planets";
import starshipsReducer from "./starships";

export default combineReducers({
  planets: planetsReducer,
  starships: starshipsReducer,
});
