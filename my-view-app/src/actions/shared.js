import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveTweets } from "./tweets";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, tweets }) => {
      //after this to handle our dispatch we need set up our reducers
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      //when we dispatch you want tp set the AUTHED_ID as a property on the Redux store
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
//now we have all our action creators setup and we are dispatching them ,the next thing we need to do is actually set up the reducers to modify our state based on these actions .
