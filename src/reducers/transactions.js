import {
  GET_TRANSACTIONS,
  ADD_TRANSACTION,
  EDIT_TRANSACTION,
  DELETE_TRANSACTION,
} from "../actions/actionTypes";

const initialState = {
  data: [],
};

export default function products(state = initialState, action) {
  console.log("Inside payload", action.payload);
  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        data: action.payload,
      };

    case ADD_TRANSACTION:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case EDIT_TRANSACTION:
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
    case DELETE_TRANSACTION:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}
