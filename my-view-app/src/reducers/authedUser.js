import { SET_AUTHED_USER } from "../actions/authedUser";
export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;
    default:
      return state;
  }
}
//our reducers are each handling different action types that we
//we saw dispatched inside of our handle initial data function
