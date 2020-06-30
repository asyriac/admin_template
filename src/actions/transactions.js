import axios from "axios";
import {
  GET_TRANSACTIONS,
  ADD_TRANSACTION,
  EDIT_TRANSACTION,
  DELETE_TRANSACTION,
} from "./actionTypes";

export function getTransactions() {
  return async function (dispatch) {
    const { data } = await axios.get("http://localhost:4000/posts");
    dispatch({
      type: GET_TRANSACTIONS,
      payload: data,
    });
  };
}

export function addTransaction(body) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post("http://localhost:4000/posts/", body);

      dispatch({
        type: ADD_TRANSACTION,
        payload: data,
      });
    } catch (error) {
      console.log(error.response);
    }
  };
}

export function editTransaction(id, body) {
  return async function (dispatch) {
    await axios.patch(`http://localhost:4000/posts/${id}`, body);
    dispatch({
      type: EDIT_TRANSACTION,
      payload: body,
    });
  };
}

export function deleteTransaction(id) {
  return async function (dispatch) {
    await axios.delete(`http://localhost:4000/posts/${id}`);
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id,
    });
  };
}
