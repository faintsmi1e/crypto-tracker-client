import AuthService from '../services/AuthService';
import TransactionService from '../services/TransactionService';
import {
  userAddTransactionAction,
  userCheckAuth,
  userLoadingAction,
  userLoginAction,
  userLogoutAction,
  userSignupErrorAction,
} from '../store/reducers/userReducer';

export const userLogin = (email, password, navigate) => {
  return async function (dispatch) {
    try {
      dispatch(userLoadingAction(true));
      const response = await AuthService.login(email, password);
      localStorage.setItem('token', response.data.accessToken);
      console.log(response.data);
      dispatch(userLoginAction(response.data));
      navigate('/')
    } catch (e) {
      console.log(e.response?.data?.message);
      dispatch(userSignupErrorAction(e.response?.data?.message))
    } finally {
      dispatch(userLoadingAction(false));
    }
  };
};
export const userRegistration = (email, password, setLocalLoading) => {
  return async function (dispatch) {
    try {
      setLocalLoading(true);
      const response = await AuthService.registration(email, password);
      localStorage.setItem('token', response.data.accessToken);
      console.log(response.data);
      dispatch(userLoginAction(response.data));
    } catch (e) {
      console.log(e.response?.data?.message);
      dispatch(userSignupErrorAction(e.response?.data?.message))
    } finally {
      setLocalLoading(false);
      
    }
  };
};

export const userLogout = () => {
  return async function (dispatch) {
    try {
      dispatch(userLoadingAction(true));
      const response = await AuthService.logout();
      localStorage.removeItem('token');
      dispatch(userLogoutAction({ user: {}, transactions: [] }));
    } catch (e) {
      console.log(e.response?.data?.message);
    } finally {
      dispatch(userLoadingAction(false));
    }
  };
};

export const checkAuth = () => {
  return async function (dispatch) {
    try {
      dispatch(userLoadingAction(true));

      const response = await AuthService.checkAuth();

      localStorage.setItem('token', response.data.accessToken);

      dispatch(userCheckAuth(response.data));
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
      console.log(body);
      const response = await TransactionService.saveTransaction(body);
      console.log(response.data);
      dispatch(userAddTransactionAction(response.data));
    } catch (e) {
      console.log(e.response?.data?.message);
    } finally {
      dispatch(userLoadingAction(false));
    }
  };
};
