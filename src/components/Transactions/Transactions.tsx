import { FC } from 'react';
import TransactionsList from './TransactionsList';
import { TransactionsType } from '../../../@types';
import Block from '../Block/Block';

const Transactions: FC<TransactionsType> = ({
  title,
  transactions,
  className,
}) => {
  return (
    <Block title={title}>
      <TransactionsList transactions={transactions} className={className} />
    </Block>
  );
};

export default Transactions;
