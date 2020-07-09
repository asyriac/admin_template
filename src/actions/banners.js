import axios from "axios";
import {
  GET_BANNERS,
  ADD_BANNER,
  EDIT_BANNER,
  DELETE_BANNER,
} from "./actionTypes";
import { APIUrls } from "../services/api";

export function getBanners() {
  return async function (dispatch) {
    const { data } = await axios.get(APIUrls.fetchBanners());
    dispatch({
      type: GET_BANNERS,
      payload: data,
    });
  };
}

export function addBanner(body) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(APIUrls.createBanner(), body);

      dispatch({
        type: ADD_BANNER,
        payload: data,
      });
    } catch (error) {
      console.log(error.response);
    }
  };
}

export function editBanner(id, body) {
  return async function (dispatch) {
    await axios.patch(APIUrls.editBanner(id), body);
    dispatch({
      type: EDIT_BANNER,
      payload: body,
    });
  };
}

export function deleteBanner(id) {
  return async function (dispatch) {
    await axios.delete(APIUrls.deleteBanner(id));
    dispatch({
      type: DELETE_BANNER,
      payload: id,
    });
  };
}
