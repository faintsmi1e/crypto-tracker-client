import AuthService from '../services/AuthService';
import TransactionService from '../services/TransactionService';
import {
  userAddTransactionAction,
  userCheckAuth,
  userLoadingAction,
  userLoginAction,
  userLogoutAction,
} from '../store/reducers/userReducer';

export const userLogin = (email, password) => {
  return async function (dispatch) {
    
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem('token', response.data.accessToken);
      console.log(response.data)
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
      localStorage.setItem('token', response.data.accessToken);
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

export const checkAuth = () => {
  return async function (dispatch) {
    try {
      dispatch(userLoadingAction(true));

      const response = await AuthService.checkAuth();
      
      localStorage.setItem('token', response.data.accessToken);
     

      dispatch(userCheckAuth(response.data.user));
    } catch (e) {
      console.log(e.response?.data?.message);
    } finally {
      dispatch(userLoadingAction(false));
    }
  };
};

export const userAddTransaction = (body) => {
  return async function (dispatch) {
    try {
      dispatch(userLoadingAction(true));
      console.log(body)
      const response = await TransactionService.saveTransaction(body)
      console.log(response.data)
      dispatch(userAddTransactionAction(response.data));
    } catch (e) {
      console.log(e.response?.data?.message);
    } finally {
      dispatch(userLoadingAction(false));
    }
  };
};
