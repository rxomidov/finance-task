import {
  USER_LIST_START,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_PARAMS,
} from "../constants/constants";

export const getUserListStartAct = (data) => {
  return {
      type: USER_LIST_START,
      payload: data,
  };
};

export const getUserListSuccess = (data) => {
  return {
      type: USER_LIST_SUCCESS,
      payload: data,
  };
};

export const getUserListFail = (data) => {
  return {
      type: USER_LIST_FAIL,
      payload: data,
  };
};

export const setUserListFilterParams = (data) => {
  return {
      type: USER_LIST_PARAMS,
      payload: data,
  };
};