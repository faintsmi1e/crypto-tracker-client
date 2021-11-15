import React from 'react';
import { TableCell, TableRow } from '@mui/material';
import moment from 'moment';

const Transactionrow = ({ row }) => {
  const humanDate = moment(row.date);
  
  return (
    <TableRow>
      <TableCell>{row.ticker}</TableCell>
      <TableCell>{row.buyPrise}</TableCell>
      <TableCell>{row.amount}</TableCell>
      <TableCell>{humanDate.format('MMM Do YY')}</TableCell>
    </TableRow>
  );
};

export default Transactionrow;
