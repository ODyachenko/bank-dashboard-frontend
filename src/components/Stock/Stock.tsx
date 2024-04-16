import React, { FC } from 'react';
import Block from '../Block/Block';
import StockTable from './StockTable';

const Stock: FC = () => {
  return (
    <Block title="Trending Stock">
      <StockTable />
    </Block>
  );
};

export default Stock;
