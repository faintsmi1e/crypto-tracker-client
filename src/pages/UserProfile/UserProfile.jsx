import React, { useEffect, useState } from 'react';
import { CircularProgress, TableContainer, Paper } from '@mui/material';
import Header from './components/Header';
import Tableheader from './components/TableHeader';
import classes from './UserProfile.module.css';
import { useFetching } from '../../hooks/useFetching';
import TransactionService from '../../services/TransactionService';
import { useSelector } from 'react-redux';
import TransactionRow from './components/TransactionRow/TickerRow';
import Tickerstable from './components/TickersTable/TickersTable';

const UserProfile = () => {
  
  const state = useSelector((state) => state);
  console.log(state);
  const transactions = state.transactions;

  return (
    <div className={classes.Profile}>
      <Header />
      <TableContainer
        sx={{
          border: 1,
          borderRadius: '0px 0 6px 6px',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
          padding: '15px',
          minWidth: '800px',
        }}
        component={Paper}
      >
        <Tableheader />

        <div>
          
          
            <Tickerstable transactions={transactions}/>
          
        </div>
      </TableContainer>
    </div>
  );
};

export default UserProfile;
