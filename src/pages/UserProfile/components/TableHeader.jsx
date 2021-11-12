import React from 'react';
import { TableRow, TableCell } from '@mui/material';

const Tableheader = () => {
  const map = [
    { number: 2, text: 'Token', padding: '80px' },
    { number: 2, text: 'Amount' },
    { number: 2, text: 'Current price' },
    { number: 1, text: 'Usd equal' },
    { number: 1, text: 'PNL(total)' },
  ];
  return (
    <TableRow
      sx={{
        display: 'flex',
        width: '100%',
        background: '#6699ff',
      }}
    >
      {map.map((item, id) => {
        return (
          <TableCell
            key={id}
            sx={{
              flex: item.number,
              display: 'flex',
              alignItems: 'center',
              fontWeight: 'bold',
              paddingLeft: item.padding,
            }}
          >
            {item.text}
          </TableCell>
        );
      })}
      
    </TableRow>
  );
};

export default Tableheader;