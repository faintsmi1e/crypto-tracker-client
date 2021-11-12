import React, { useState } from 'react';
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
import moment from 'moment';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import classes from './TransactionRow.module.css'

function TransactionRow(props) {
  const { row  } = props;
  const [open, setOpen] = useState(false);
  
  const humanDate =
    moment(row.date);
    console.log(humanDate.format("MMM Do YY"))
  
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
            flex: '1 1 40%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {row.ticker}
          
        </TableCell>
        
        <TableCell align='right' sx={{
            flex: '1 1 20%',
            display: 'flex',
            alignItems: 'center',
            justifyContent:'flex-end'
            
          }}>{row.buyPrise}</TableCell>
        <TableCell align='right' sx={{
            flex: '1 1 10%',
            display: 'flex',
            alignItems: 'center',
            justifyContent:'flex-end'
          }}>{humanDate.format("MMM Do YY")}</TableCell>
        <TableCell align='right' sx={{
            flex: '1 1 10%',
            display: 'flex',
            alignItems: 'center',
          }}>{row.buyPrise + ' USD'}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant='h6' gutterBottom component='div'>
                Контакты
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableBody>
                  <TableRow>
                    
                    
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default TransactionRow;