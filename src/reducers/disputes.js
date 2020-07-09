import {
  GET_DISPUTES,
  ADD_DISPUTE,
  EDIT_DISPUTE,
  DELETE_DISPUTE,
} from "../actions/actionTypes";

const initialState = {
  data: [],
};

export default function disputes(state = initialState, action) {
  console.log("Inside payload", action.payload);
  switch (action.type) {
    case GET_DISPUTES:
      return {
        ...state,
        data: action.payload,
      };

    case ADD_DISPUTE:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case EDIT_DISPUTE:
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
    case DELETE_DISPUTE:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}
