import React, { useEffect, useState } from 'react';
import { CircularProgress, TableContainer, Paper } from '@mui/material';
import Header from './components/Header';
import Tableheader from './components/TableHeader';
import classes from './UserProfile.module.css';
import { useFetching } from '../../hooks/useFetching';
import TransactionService from '../../services/TransactionService';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const [transactions, setTransactions] = useState([]);
  const state = useSelector((state) => state);
  const [fetchData, isTransactionsLoading, transactionsError] = useFetching(
    async () => {
      console.log(state);
      const response = await TransactionService.fetchTransactions();
      console.log(response)
      if (response.data.length > 0) {
        setTransactions(response.data);
      }
    }
  );
  useEffect(() => {
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          {transactions.map(trans => <div>{trans}</div>)}
          <CircularProgress></CircularProgress>
        </div>
      </TableContainer>
    </div>
  );
};

export default UserProfile;
