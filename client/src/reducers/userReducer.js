import { ADD_USER } from "../actions/types";

const initialState = {
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: {}
      };

    default:
      return state;
  }
}
