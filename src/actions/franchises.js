import axios from "axios";
import {
  GET_FRANCHISES,
  ADD_FRANCHISE,
  EDIT_FRANCHISE,
  DELETE_FRANCHISE,
} from "./actionTypes";
import { APIUrls } from "../services/api";

export function getFranchises() {
  return async function (dispatch) {
    const { data } = await axios.get(APIUrls.fetchFranchises());
    dispatch({
      type: GET_FRANCHISES,
      payload: data,
    });
  };
}

export function addFranchise(body) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(APIUrls.createFranchise(), body);

      dispatch({
        type: ADD_FRANCHISE,
        payload: data,
      });
    } catch (error) {
      console.log(error.response);
    }
  };
}

export function editFranchise(id, body) {
  return async function (dispatch) {
    await axios.patch(APIUrls.editFranchise(id), body);
    dispatch({
      type: EDIT_FRANCHISE,
      payload: body,
    });
  };
}

export function deleteFranchise(id) {
  return async function (dispatch) {
    await axios.delete(APIUrls.deleteFranchise(id));
    dispatch({
      type: DELETE_FRANCHISE,
      payload: id,
    });
  };
}
