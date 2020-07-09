import axios from "axios";
import {
  GET_TRANSACTIONS,
  ADD_TRANSACTION,
  EDIT_TRANSACTION,
  DELETE_TRANSACTION,
} from "./actionTypes";
import { APIUrls } from "../services/api";

export function getTransactions() {
  return async function (dispatch) {
    const { data } = await axios.get(APIUrls.fetchTransactions());
    dispatch({
      type: GET_TRANSACTIONS,
      payload: data,
    });
  };
}

export function addTransaction(body) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(APIUrls.createTransaction(), body);

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
    await axios.patch(APIUrls.editTransaction(id), body);
    dispatch({
      type: EDIT_TRANSACTION,
      payload: body,
    });
  };
}

export function deleteTransaction(id) {
  return async function (dispatch) {
    await axios.delete(APIUrls.deleteTransaction(id));
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id,
    });
  };
}
