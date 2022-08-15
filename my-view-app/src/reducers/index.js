//This is our root reducer
//which will combine the results of calling
//--the tweets reducer, users reducer, and authedUser reducer into a single state object.
//Remember, we need to do this because the createStore()
//..function only accepts a single reducer.
//import combined reducers from redux
import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import tweets from "./tweets";
//invoke combined reducer and passing all the reducers
//combineReducers({
//     authedUser: authedUser,
//     tweets: tweets,
//     users: users,
//   });

//using ES6's property shorthand,
export default combineReducers({
  authedUser,
  users,
  tweets,
  // loadingBar: loadingBarReducer,
});
