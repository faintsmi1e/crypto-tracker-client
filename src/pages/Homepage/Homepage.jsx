import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFetching } from '../../hooks/useFetching';
import UserService from '../../services/UserService';

const Homepage = () => {
  const state = useSelector((state) => state);
  const [users, setUsers] = useState([]);
  const [fetchUsers, isUsersLoading, usersError] = useFetching(async () => {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (e) {
      console.log(e)
    }
  })
  
  
  
  return (
    <div>
      <h1>{state.isAuth ? `Пользователь aвторизован ${state.user.email}`: "гость"} </h1>

      <Button onClick={fetchUsers}>Get users</Button>
      {isUsersLoading? <div>загрузка...</div> : users.map(user => <div key={user.email}>{user.email}</div>)}
      
    </div>
  );
}

export default Homepage;
