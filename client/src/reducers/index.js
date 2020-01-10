import { combineReducers } from "redux";


 import userReducer from "./userReducer";
// import chatReducer from './chatReducer'
// import currentuserReducer from "./currentuserReducer";
// import inboxReducer from "./inboxReducer";

export default combineReducers({
  

   user: userReducer
});
