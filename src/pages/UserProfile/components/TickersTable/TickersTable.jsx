import React from 'react';
import TickerRow from '../TransactionRow/TickerRow';

const Tickerstable = ({transactions}) => {
  const tickersWithTransactions = {};
  const tickers = new Set()
  transactions.forEach(trans => {
    tickersWithTransactions[trans.ticker] = [];
    tickers.add(trans.ticker);
  })
  const tickersArray = Array.from(tickers)
  transactions.forEach(trans => {
    tickersWithTransactions[trans.ticker].push(trans);
  })
 

  
  return (
    <div>
      {tickersArray.map((ticker, id) => {
        return (<TickerRow key={id} style={{display:'flex'}} ticker={ticker} rows={tickersWithTransactions[ticker]}></TickerRow>)
      })}
    </div>
  );
}

export default Tickerstable;
