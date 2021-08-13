import { sampleData } from "../../App/api/sampleData";
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from "./eventConstants";
const initialState = {
  events: sampleData,
};

export default function eventReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, payload],
      };
      break;
    case UPDATE_EVENT:
      return {
        ...state,
        events: [
          ...state.events.filter((evt) => evt.id !== payload.id),
          payload,
        ],
      };
      break;
    case DELETE_EVENT:
      return {
        ...state,
        events: [...state.events.filter((evt) => evt.id !== payload)],
      };
      break;
    default:
      return state;
      break;
  }
}
