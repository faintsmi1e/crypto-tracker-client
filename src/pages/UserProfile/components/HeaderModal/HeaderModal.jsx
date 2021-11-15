import React, { useState } from 'react';
import {
  InputLabel,
  Input,
  Button,
  TextField,
  Modal,
  Typography,
  Box,
} from '@mui/material';
import moment from 'moment';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import classes from './HeaderModal.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { userAddTransaction } from '../../../../asyncActions/asyncActions';

const Headermodal = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const defaultId = state.user.id;
  const defaultFormState = {
    userId: defaultId,
    ticker: '',
    buyPrise: '',
    amount: '',
    date: moment(),
  };
  const [form, setForm] = useState(defaultFormState);
  const onSendClick = () => {
    console.log(form)
    dispatch(userAddTransaction(form))
    props.onClose()
    setForm(defaultFormState);
  };
  return (
    <Modal
      {...props}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box className={classes.ModalBox}>
        <Typography
          className={classes.ModalHeader}
          id='modal-modal-title'
          variant='h6'
          component='h2'
        >
          Add transaction
        </Typography>
        <div className={classes.Input}>
          <InputLabel htmlFor='buy price'>Ticker: </InputLabel>
          <Input
            id='ticker'
            value={form.ticker}
            onChange={(e) => {
              setForm({ ...form, ticker: e.target.value });
            }}
            placeholder='e.g BTCUSDT'
          />
        </div>
        <div className={classes.Input}>
          <InputLabel htmlFor='buy price'>Amount: </InputLabel>
          <Input
            type='number'
            value={form.amount}
            onChange={(e) => {
              setForm({ ...form, amount: e.target.value });
            }}
            id='token amount'
            placeholder='e.g 0.1'
          />
        </div>
        <div className={classes.Input}>
          <InputLabel htmlFor='buy price'>Buy price: </InputLabel>
          <Input
            type='number'
            value={form.buyPrise}
            onChange={(e) => {
              setForm({ ...form, buyPrise: e.target.value });
            }}
            id='buy price'
            placeholder='e.g 63200'
          />
        </div>

        <LocalizationProvider dateAdapter={DateAdapter}>
          <MobileDatePicker
            label='date'
            value={form.date}
            onChange={(newValue) => {
              setForm({ ...form, date: newValue });
            }}
            renderInput={(params) => (
              <Input
                sx={{ marginTop: '20px' }}
                placeholder='date'
                {...params}
              />
            )}
          />
        </LocalizationProvider>

        <Button onClick={onSendClick}>Добавить</Button>
      </Box>
    </Modal>
  );
};

export default Headermodal;
