import { createStore } from "redux";
import thunk from 'redux-thunk'

import userReducer from "./reducers/userReducer";

const store = createStore(userReducer);

export default store