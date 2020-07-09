import {
  GET_BANNERS,
  ADD_BANNER,
  EDIT_BANNER,
  DELETE_BANNER,
} from "../actions/actionTypes";

const initialState = {
  data: [],
};

export default function banners(state = initialState, action) {
  console.log("Inside payload", action.payload);
  switch (action.type) {
    case GET_BANNERS:
      return {
        ...state,
        data: action.payload,
      };

    case ADD_BANNER:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case EDIT_BANNER:
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
    case DELETE_BANNER:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}
