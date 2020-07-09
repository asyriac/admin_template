import axios from "axios";
import {
  GET_DISPUTES,
  ADD_DISPUTE,
  EDIT_DISPUTE,
  DELETE_DISPUTE,
} from "./actionTypes";
import { APIUrls } from "../services/api";

export function getDisputes() {
  return async function (dispatch) {
    const { data } = await axios.get(APIUrls.fetchDisputes());
    dispatch({
      type: GET_DISPUTES,
      payload: data,
    });
  };
}

export function addDispute(body) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(APIUrls.createDispute(), body);

      dispatch({
        type: ADD_DISPUTE,
        payload: data,
      });
    } catch (error) {
      console.log(error.response);
    }
  };
}

export function editDispute(id, body) {
  return async function (dispatch) {
    await axios.patch(APIUrls.editDispute(id), body);
    dispatch({
      type: EDIT_DISPUTE,
      payload: body,
    });
  };
}

export function deleteDispute(id) {
  return async function (dispatch) {
    await axios.delete(APIUrls.deleteDispute(id));
    dispatch({
      type: DELETE_DISPUTE,
      payload: id,
    });
  };
}
