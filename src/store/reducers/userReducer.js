const defaultState = {
  user: {},
  isAuth: false
}

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case 'USER_LOGIN':
      return { ...state, isAuth:true, user: action.payload };
    default:
      return state;
  }
}
