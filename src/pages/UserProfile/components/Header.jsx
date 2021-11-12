import React, { useState } from 'react';
import classes from './Header.module.css';
import { Button, TextField, Modal, Typography, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useFetching } from '../../../hooks/useFetching';
import TransactionService from '../../../services/TransactionService';
import Headermodal from './HeaderModal/HeaderModal';

const Header = () => {
  const [transaction, setTransaction] = useState({});

  const [fetchData, isTransactionLoading, transactionError] = useFetching(
    async () => {
      const response = await TransactionService.saveTransaction();
      console.log(response);
    }
  );
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <h2 style={{ marginLeft: '15px', height: '40px', lineHeight: '40px' }}>
        USER
      </h2>
      <div className={classes.Header}>
        <Button
          onClick={handleOpen}
          style={{ marginLeft: '15px' }}
          variant='outlined'
        >
          Add transaction
        </Button>

        <div className={classes.Search}>
          <SearchIcon
            color='primary'
            size='medium'
            style={{ marginRight: '5px', cursor: 'pointer' }}
          />
          <TextField
            id='input-with-sx'
            label='Поиск'
            size='small'
            variant='outlined'
          />
        </div>
      </div>
      <Headermodal 
        open={open} 
        onClose={handleClose}
      >
      </Headermodal>
      
    </div>
  );
};

export default Header;
