import { SET_USER } from "../constants/ActionTypes";
export const setUserAction = (parameter) => {
  return {
    type: SET_USER,
    payload: parameter,
  };
};
