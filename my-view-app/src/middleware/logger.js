//The logger shows us anytime that a new action is dispatched .
//after that we want to know the new state after the action is dispatched

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("The action: ", action);
  const returnValue = next(action);
  console.log("The new state: ", store.getState());
  console.groupEnd();
  return returnValue;
};

export default logger;
