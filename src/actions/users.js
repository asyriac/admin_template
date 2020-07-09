import axios from "axios";
import { GET_USERS, ADD_USER, EDIT_USER, DELETE_USER } from "./actionTypes";
import { APIUrls } from "../services/api";

export function getUsers() {
  return async function (dispatch) {
    const { data } = await axios.get(APIUrls.fetchUsers());
    dispatch({
      type: GET_USERS,
      payload: data,
    });
  };
}

export function addUser(body) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(APIUrls.createUser(), body);

      dispatch({
        type: ADD_USER,
        payload: data,
      });
    } catch (error) {
      console.log(error.response);
    }
  };
}

export function editUser(id, body) {
  return async function (dispatch) {
    await axios.patch(APIUrls.editUser(id), body);
    dispatch({
      type: EDIT_USER,
      payload: body,
    });
  };
}

export function deleteUser(id) {
  return async function (dispatch) {
    await axios.delete(APIUrls.deleteUser(id));
    dispatch({
      type: DELETE_USER,
      payload: id,
    });
  };
}
