import { createStore } from "redux";
import testReducer from "../features/sandbox/testReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./rootReducers";

export function configureStore() {
  return createStore(rootReducer, devToolsEnhancer());
}
