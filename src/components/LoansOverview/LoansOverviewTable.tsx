import { FC } from 'react';
import { loansList } from '../../data/loansList';
import LoanRecord from './LoanRecord';

const LoansOverviewTable: FC = () => {
  return (
    <table className="w-full">
      <thead className="font-medium text-secondary-blue border-b border-solid border-border-gray">
        <tr>
          <th className="p-3 hidden lg:table-cell">SL No</th>
          <th className="p-3">Loan Money</th>
          <th className="p-3">Left to repay</th>
          <th className="p-3 hidden lg:table-cell">Duration</th>
          <th className="p-3 hidden lg:table-cell">Interest rate</th>
          <th className="p-3 hidden lg:table-cell">Installment</th>
          <th className="p-3">Repay</th>
        </tr>
      </thead>
      <tbody>
        {loansList.map((loan) => (
          <LoanRecord key={loan.id} {...loan} />
        ))}
      </tbody>
      <tfoot>
        <tr className="text-center text-primary-red">
          <td className="p-3 hidden lg:table-cell">Total</td>
          <td className="p-3">$1250000</td>
          <td className="p-3">$750000</td>
          <td className="p-3"></td>
          <td className="p-3"></td>
          <td className="p-3 hidden lg:table-cell">$50000 / month</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default LoansOverviewTable;
