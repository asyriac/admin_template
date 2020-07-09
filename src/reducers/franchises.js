import {
  GET_FRANCHISES,
  ADD_FRANCHISE,
  EDIT_FRANCHISE,
  DELETE_FRANCHISE,
} from "../actions/actionTypes";

const initialState = {
  data: [],
};

export default function franchises(state = initialState, action) {
  console.log("Inside payload", action.payload);
  switch (action.type) {
    case GET_FRANCHISES:
      return {
        ...state,
        data: action.payload,
      };

    case ADD_FRANCHISE:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case EDIT_FRANCHISE:
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...action.payload,
              id: item.id,
            };
          }
          return item;
        }),
      };
    case DELETE_FRANCHISE:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}
