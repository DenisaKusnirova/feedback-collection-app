import { FETCH_USER } from "../actions/types";

export default function authReducer(state = {}, action) {
  console.log('Action:', action);
  switch (action.type) {
    case FETCH_USER:
      return
    default:
      return state;
  }
}
