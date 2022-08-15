import { RECEIVE_TWEETS } from "../actions/tweets";

export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        //when we recive tweets we want to make sure we merge all those tweets on this object over here

        ...state,
        ...action.tweets,
      };
    //when none of the cases match we want to make sure that we just return the state  that was passee in
    default:
      return state;
  }
}
