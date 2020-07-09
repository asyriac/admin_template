import axios from "axios";
import {
  GET_BRANDFRIENDS,
  ADD_BRANDFRIEND,
  EDIT_BRANDFRIEND,
  DELETE_BRANDFRIEND,
} from "./actionTypes";
import { APIUrls } from "../services/api";

export function getBrandFriends() {
  return async function (dispatch) {
    const { data } = await axios.get(APIUrls.fetchBrandFriends());
    dispatch({
      type: GET_BRANDFRIENDS,
      payload: data,
    });
  };
}

export function addBrandFriend(body) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(APIUrls.createBrandFriend(), body);

      dispatch({
        type: ADD_BRANDFRIEND,
        payload: data,
      });
    } catch (error) {
      console.log(error.response);
    }
  };
}

export function editBrandFriend(id, body) {
  return async function (dispatch) {
    await axios.patch(APIUrls.editBrandFriend(id), body);
    dispatch({
      type: EDIT_BRANDFRIEND,
      payload: body,
    });
  };
}

export function deleteBrandFriend(id) {
  return async function (dispatch) {
    await axios.delete(APIUrls.deleteBrandFriend(id));
    dispatch({
      type: DELETE_BRANDFRIEND,
      payload: id,
    });
  };
}
