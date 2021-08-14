import { combineReducers } from "redux";
import modalReducers from "../App/Common/modal/modalReducers";
import authReducer from "../features/Auth/authReducer";
import eventReducer from "../features/events/eventReducers";
import testReducer from "../features/sandbox/testReducer";

const rootReducer = combineReducers({
  test: testReducer,
  events: eventReducer,
  modals: modalReducers,
  auth: authReducer,
});

export default rootReducer;
