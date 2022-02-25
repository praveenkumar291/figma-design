import { combineReducers } from "redux";
import messages from "./messages";
import navbar from "./navbar";

const chat = combineReducers({
  messages,
  navbar,
});
export default chat;
