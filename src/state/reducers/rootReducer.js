import { combineReducers } from "redux";
import mediaReducer from "./mediaReducer";

export default combineReducers({
  mediaData: mediaReducer,
});
