import { FC } from 'react';
import { TransactionType } from '../../../@types';
import Transaction from './Transaction';

type TransactionsListProps = {
  transactions: TransactionType[];
  className?: string;
};

const TransactionsList: FC<TransactionsListProps> = ({
  transactions,
  className,
}) => {
  return (
    <ul className={`bg-white rounded-2xl p-5 ${className ? className : ''}`}>
      {transactions.map((transaction) => (
        <Transaction key={transaction.id} {...transaction} />
      ))}
    </ul>
  );
};

export default TransactionsList;
