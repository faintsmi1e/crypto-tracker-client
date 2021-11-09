import AuthService from '../services/AuthService';
import { userLoginAction , userLogoutAction } from '../store/reducers/userReducer';

export const userLogin = (email, password) => {
  return async function (dispatch) {
    console.log('login',email,password)
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem('token', response.data.acessToken);
      dispatch(userLoginAction(response.data.user));
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  };
};

export const userRegistration = (email, password) => {
  return async function (dispatch) {
    try {
      const response = await AuthService.registration(email, password);
      localStorage.setItem('token', response.data.acessToken);
      dispatch(userLoginAction(response.data.user));
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  };
};

export const userLogout = () => {
  return async function (dispatch) {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem('token');
      dispatch(userLogoutAction({}));
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  };
};
