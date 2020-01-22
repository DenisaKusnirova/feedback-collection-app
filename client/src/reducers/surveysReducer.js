import { FETCH_SURVEYS, FETCH_USER } from "../actions/types";

export default function surveysReducer(state = [], action) {
  console.log('Action:', action);
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload;
    default:
      return state;
  }
}