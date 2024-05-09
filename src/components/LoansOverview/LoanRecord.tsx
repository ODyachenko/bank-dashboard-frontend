import { FC } from 'react';
import { LoansType } from '../../../@types';

const LoanRecord: FC<LoansType> = ({
  id,
  loanMoney,
  leftToRepay,
  duration,
  rate,
  installment,
}) => {
  return (
    <tr className="text-center border-b border-solid border-border-gray">
      <td className="p-3 hidden lg:table-cell">{id}</td>
      <td className="p-3">${loanMoney}</td>
      <td className="p-3">${leftToRepay}</td>
      <td className="p-3 hidden lg:table-cell">{duration} Months</td>
      <td className="p-3 hidden lg:table-cell">{rate}%</td>
      <td className="p-3 hidden lg:table-cell">${installment} / month</td>
      <td className="p-3">
        <button className="border text-center border-solid rounded-2xl cursor-pointer transition-all py-2 px-3 hover:text-primary-blue hover:border-primary-blue">
          Repay
        </button>
      </td>
    </tr>
  );
};

export default LoanRecord;
