import axios from "axios";
import {
  GET_CATEGORIES,
  ADD_CATEGORY,
  EDIT_CATEGORY,
  DELETE_CATEGORY,
} from "./actionTypes";
import { APIUrls } from "../services/api";

export function getCategories() {
  return async function (dispatch) {
    const { data } = await axios.get(APIUrls.fetchCategories());
    dispatch({
      type: GET_CATEGORIES,
      payload: data,
    });
  };
}

export function addCategory(body) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(APIUrls.createCategory(), body);

      dispatch({
        type: ADD_CATEGORY,
        payload: data,
      });
    } catch (error) {
      console.log(error.response);
    }
  };
}

export function editCategory(id, body) {
  return async function (dispatch) {
    await axios.patch(APIUrls.editCategory(id), body);
    dispatch({
      type: EDIT_CATEGORY,
      payload: body,
    });
  };
}

export function deleteCategory(id) {
  return async function (dispatch) {
    await axios.delete(APIUrls.deleteCategory(id));
    dispatch({
      type: DELETE_CATEGORY,
      payload: id,
    });
  };
}
