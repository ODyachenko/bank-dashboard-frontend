import React, { FC } from 'react';
import { recentTransactions } from '../../data/RecentTransactions';
import TransactionsRecord from './TransactionsRecord';

const TransactionsTable: FC = () => {
  return (
    <table className="w-full bg-white rounded-2xl">
      <thead className="font-medium text-secondary-blue border-b border-solid border-border-gray hidden lg:table-header-group">
        <tr>
          <th className="p-4">Description</th>
          <th className="p-4">Transaction ID</th>
          <th className="p-4">Type</th>
          <th className="p-4">Card</th>
          <th className="p-4">Date</th>
          <th className="p-4">Amount</th>
          <th className="p-4">Reciept</th>
        </tr>
      </thead>
      <tbody>
        {recentTransactions.map((transaction) => (
          <TransactionsRecord key={transaction.id} {...transaction} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsTable;
