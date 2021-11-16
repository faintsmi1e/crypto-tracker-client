const defaultState = {
  isLoading: true,
  user: {},
  transactions: [],
  isAuth: false,
  error:''
};

const USER_LOGIN = 'USER_LOGIN';
const USER_LOGOUT = 'USER_LOGOUT';
const CHECK_AUTH = 'CHECK_AUTH';
const USER_LOADING = 'USER_LOADING';

const USER_ADD_TRANSACTION = 'USER_ADD_TRANSACTION';

const USER_SIGNUP_ERROR = 'USER_SIGNUP_ERROR';
const USER_NAVIGATE = 'USER_NAVIGATE';



export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, isAuth: true, user: action.payload.user, transactions: action.payload.transactions };
    case USER_LOGOUT:
      return { ...state, isAuth: false, user: action.payload.user, transactions: action.payload.transactions };
    case CHECK_AUTH:
      return { ...state, isAuth: true, user: action.payload.user, transactions: action.payload.transactions, isLoading: false };
    case USER_LOADING:
      return { ...state, isLoading: action.payload };
    case USER_ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case USER_SIGNUP_ERROR:
      return { ...state, error: action.payload };
    case USER_NAVIGATE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const userLoginAction = (payload) => ({ type: USER_LOGIN, payload });
export const userLogoutAction = (payload) => ({ type: USER_LOGOUT, payload });
export const userCheckAuth = (payload) => ({ type: CHECK_AUTH, payload });
export const userLoadingAction = (payload) => ({ type: USER_LOADING, payload });
export const userAddTransactionAction = (payload) => ({ type: USER_ADD_TRANSACTION, payload });
export const userSignupErrorAction = (payload) => ({ type: USER_SIGNUP_ERROR, payload });

export const userNavigateAction = (payload) => ({ type: USER_NAVIGATE, payload });