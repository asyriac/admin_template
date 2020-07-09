import {
  GET_USERS,
  ADD_USER,
  EDIT_USER,
  DELETE_USER,
} from "../actions/actionTypes";

const initialState = {
  data: [],
};

export default function users(state = initialState, action) {
  console.log("Inside payload", action.payload);
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        data: action.payload,
      };

    case ADD_USER:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case EDIT_USER:
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
    case DELETE_USER:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}
