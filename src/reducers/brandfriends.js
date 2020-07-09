import {
  GET_BRANDFRIENDS,
  ADD_BRANDFRIEND,
  EDIT_BRANDFRIEND,
  DELETE_BRANDFRIEND,
} from "../actions/actionTypes";

const initialState = {
  data: [],
};

export default function brandfriends(state = initialState, action) {
  console.log("Inside payload", action.payload);
  switch (action.type) {
    case GET_BRANDFRIENDS:
      return {
        ...state,
        data: action.payload,
      };

    case ADD_BRANDFRIEND:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case EDIT_BRANDFRIEND:
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
    case DELETE_BRANDFRIEND:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}
