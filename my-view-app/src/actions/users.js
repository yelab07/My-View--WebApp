//ACTION TYPE
export const RECEIVE_USERS = "RECEIVE_USERS";
//USER ACTION CREATOR

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}
