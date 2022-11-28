import { Middleware } from "redux";
import { RootState } from "./store";

/**
 * Logs all actions and states after they are dispatched.
 */
export const loggerMiddleware: Middleware<
  {}, // Most middleware do not modify the dispatch return value
  RootState
> = (store) => (nextDispatch) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = nextDispatch(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

export const tryMiddleware: Middleware<
  {}, // Most middleware do not modify the dispatch return value
  RootState
> = (store) => (nextDispatch) => (action) => {
  console.log("dispatching Try");
  let result = nextDispatch(action);
  console.log("next state", store.getState());
  console.groupEnd();
  console.log("dispatching Try end");
  return result;
};
