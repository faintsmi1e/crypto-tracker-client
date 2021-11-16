import React, { useEffect, useState } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  IconButton,
  TableRow,
  Collapse,
  Box,
  Typography,
} from '@mui/material';
import axios from 'axios';

import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import classes from './TickerRow.module.css';
import Transactionrow from './TransactionRow/TransactionRow';

function TickerRow({ rows, ticker, ...props }) {
  const [tickerPrice, setTickerPrice] = useState('');
  const [open, setOpen] = useState(false);
  let rowTokensAmount = 0;
  let rowSpent = 0;
  rows.forEach((row) => {
    rowTokensAmount += row.amount;

    rowSpent += row.buyPrise * row.amount;
  });
  const rowUsd = Math.floor(tickerPrice * rowTokensAmount);
  const priceLoad = async () => {
    const response = await axios.get(
      `https://api.binance.com/api/v3/ticker/price?symbol=${ticker}`
    );
    const price = response?.data?.price;

    setTickerPrice(price);
  };
  useEffect(() => {
    priceLoad();
    const askPriceInterval = setInterval(async () => {
      priceLoad();
    }, 1000 * 60);
    return () => clearInterval(askPriceInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <TableRow {...props}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell
          component='th'
          scope='row'
          sx={{
            flex: '2',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {ticker}
        </TableCell>

        <TableCell
          align='right'
          sx={{
            flex: '2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          {rowTokensAmount}
        </TableCell>
        <TableCell
          align='right'
          sx={{
            flex: '2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          {Math.round(Number(tickerPrice) * 100) / 100}
        </TableCell>
        <TableCell
          align='right'
          sx={{
            flex: '1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >{`${rowUsd} $`}</TableCell>
        <TableCell
          align='right'
          sx={{
            flex: '1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          {tickerPrice ? (((rowUsd - rowSpent)/rowSpent) * 100).toFixed(2) + '%' + ` (${rowUsd - rowSpent} $)`  : '0'}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant='h6' gutterBottom component='div'>
                Transactions
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableBody>
                  <TableRow>
                    <TableCell>{'Ticker'}</TableCell>
                    <TableCell>{'Buy price'}</TableCell>
                    <TableCell>{'Amount'}</TableCell>
                    <TableCell>{'Date'}</TableCell>
                  </TableRow>
                  {rows.map((row, id) => {
                    return <Transactionrow key={id} row={row}></Transactionrow>;
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default TickerRow;
