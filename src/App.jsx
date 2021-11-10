import './App.css';
import LoginForm from './components/LoginForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import Navlayout from './layouts/NavLayout';
import Homepage from './pages/Homepage/Homepage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { checkAuth } from './asyncActions/asyncActions';
import {  LinearProgress } from '@mui/material';
import { userLoadingAction } from './store/reducers/userReducer';
import UserProfile from './pages/UserProfile/UserProfile';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }else {
      dispatch(userLoadingAction(false));
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const state = useSelector((state) => state);
  return (
    <div className='App'>
      {state.isLoading ? (
        <LinearProgress></LinearProgress>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navlayout />}>
              <Route index element={<Homepage></Homepage>}></Route>
              <Route exact path='profile/' element={<UserProfile/>} />
              <Route exact path='login/' element={<LoginForm />} />
              <Route exact path='signup/' element={<RegistrationForm />} />
              <Route path='*' element={'123'}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
