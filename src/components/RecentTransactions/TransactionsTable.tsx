import { FC } from 'react';
import { recentTransactions } from '../../data/recentTransactions';
import TransactionsRecord from './TransactionsRecord';

const TransactionsTable: FC = () => {
  return (
    <table className="w-full">
      <thead className="font-medium text-secondary-blue border-b border-solid border-border-gray hidden lg:table-header-group">
        <tr>
          <th className="p-3">Description</th>
          <th className="p-3">Transaction ID</th>
          <th className="p-3">Type</th>
          <th className="p-3">Card</th>
          <th className="p-3">Date</th>
          <th className="p-3">Amount</th>
          <th className="p-3">Reciept</th>
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
