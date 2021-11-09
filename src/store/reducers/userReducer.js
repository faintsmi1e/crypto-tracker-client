const defaultState = {
  user: {},
  isAuth: false,
};
const USER_LOGIN = 'USER_LOGIN';
const USER_LOGOUT = 'USER_LOGOUT';

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, isAuth: true, user: action.payload };
    case USER_LOGOUT:
      return { ...state, isAuth: false, user: action.payload };
    default:
      return state;
  }
};

export const userLoginAction = (payload) => ({type: USER_LOGIN, payload})
export const userLogoutAction = (payload) => ({type: USER_LOGOUT, payload})
