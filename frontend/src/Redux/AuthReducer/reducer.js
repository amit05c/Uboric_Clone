import { getLocalData, saveLocalData } from "../../utils/localStorage";
import * as types from "./actionTypes";

const initialState = {
  isAuth: getLocalData("token") ? true : false,
  token: getLocalData("token") || null,
  user: JSON.parse(localStorage.getItem("user")) || "",
  isLoading: false,
  isError: false,
  errorMessage:""
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  // console.log(payload)
  switch (type) {
    case types.REGISTER_REQUEST:
      return { ...state, isLoading: true };
    case types.REGISTER_SUCCESS:
      return { ...state, isLoading: false };
    case types.REGISTER_FAILURE:
      return { ...state, isLoading: false, isError: true, errorMessage:payload };

    case types.LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case types.LOGIN_SUCCESS:
      saveLocalData("token", payload.token);
      localStorage.setItem("user",JSON.stringify(payload.user))
      return { ...state, isLoading: false, isAuth: true, token: payload.token, user:payload.user };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        token: "",
        errorMessage:payload
      }

      case types.LOGOUT:
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        return {
          ...state,
          isAuth:false
        }
    default:
      return state;
  }
};
export { reducer };