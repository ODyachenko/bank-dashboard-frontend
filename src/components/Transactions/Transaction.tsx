import { FC } from 'react';
import { TransactionType } from '../../../@types';

const Transaction: FC<TransactionType> = ({
  icon,
  name,
  date,
  type,
  value,
}) => {
  return (
    <li className="flex items-center gap-3 mb-3 last:mb-0 lg:mb-4">
      <img className="rounded-xl" src={icon} alt={name} />
      <span>
        <span className="block font-medium mb-1">{name}</span>
        <span className="text-xs text-gray-text">{date}</span>
      </span>
      {type === 'income' ? (
        <span className="text-primary-green text-xs font-medium block ml-auto">
          +${value}
        </span>
      ) : (
        <span className="text-primary-red text-xs font-medium block ml-auto">
          -${value}
        </span>
      )}
    </li>
  );
};

export default Transaction;
