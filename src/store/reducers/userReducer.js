const defaultState = {
  isLoading: true,
  user: {},
  transactions: {},
  isAuth: false,
};
const USER_LOGIN = 'USER_LOGIN';
const USER_LOGOUT = 'USER_LOGOUT';
const CHECK_AUTH = 'CHECK_AUTH';
const USER_LOADING = 'USER_LOADING';
export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, isAuth: true, user: action.payload };
    case USER_LOGOUT:
      return { ...state, isAuth: false, user: action.payload };
    case CHECK_AUTH:
      return { ...state, isAuth: true, user: action.payload, isLoading: false };
    case USER_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export const userLoginAction = (payload) => ({ type: USER_LOGIN, payload });
export const userLogoutAction = (payload) => ({ type: USER_LOGOUT, payload });
export const userCheckAuth = (payload) => ({ type: CHECK_AUTH, payload });
export const userLoadingAction = (payload) => ({ type: USER_LOADING, payload });
