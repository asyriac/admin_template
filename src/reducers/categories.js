import {
  GET_CATEGORIES,
  ADD_CATEGORY,
  EDIT_CATEGORY,
  DELETE_CATEGORY,
} from "../actions/actionTypes";

const initialState = {
  data: [],
};

export default function categories(state = initialState, action) {
  console.log("Inside payload", action.payload);
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        data: action.payload,
      };

    case ADD_CATEGORY:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case EDIT_CATEGORY:
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
    case DELETE_CATEGORY:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}
