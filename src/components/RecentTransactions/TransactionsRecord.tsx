import { FC } from 'react';
import { RecentTransaction } from '../../../@types';

const TransactionsRecord: FC<RecentTransaction> = ({
  description,
  transactionId,
  type,
  card,
  date,
  amount,
  direction,
}) => {
  return (
    <tr className="text-center border-b border-solid border-border-gray">
      <td className="flex items-center gap-2 p-4">
        <svg
          width="25"
          height="25"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${direction === 'income' ? 'r rotate-180' : ''}`}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 1.33333C5.21353 1.33333 1.33333 5.21353 1.33333 10C1.33333 14.7865 5.21353 18.6667 10 18.6667C14.7865 18.6667 18.6667 14.7865 18.6667 10C18.6667 5.21353 14.7865 1.33333 10 1.33333ZM10 8.74228e-07C4.47715 1.35705e-06 -1.35705e-06 4.47715 -8.74228e-07 10C-3.91405e-07 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 3.91405e-07 10 8.74228e-07Z"
            fill="#718EBF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.4645 8.82818L9.64648 5.6462C9.84174 5.45094 10.1583 5.45094 10.3536 5.6462L13.5356 8.82818C13.7308 9.02344 13.7308 9.34003 13.5356 9.53529C13.3403 9.73055 13.0237 9.73055 12.8285 9.53529L10.5 7.20686L10.5 12.9998L9.50003 12.9998L9.50003 7.20686L7.17161 9.53529C6.97635 9.73055 6.65976 9.73055 6.4645 9.53529C6.26924 9.34003 6.26924 9.02345 6.4645 8.82818Z"
            fill="#718EBF"
          />
        </svg>

        {description}
      </td>
      <td className="p-4 hidden lg:table-cell">{transactionId}</td>
      <td className="p-4 hidden lg:table-cell">{type}</td>
      <td className="p-4 hidden lg:table-cell">{card}</td>
      <td className="p-4">{date}</td>
      {direction === 'income' ? (
        <td className={`p-4 text-primary-green`}>+${amount}</td>
      ) : (
        <td className={`p-4 text-primary-red`}>-${amount}</td>
      )}

      <td className="p-4">
        <button className="border text-center border-solid rounded-2xl cursor-pointer transition-all py-2 px-3 hover:text-primary-blue hover:border-primary-blue hidden lg:table-cell">
          Download
        </button>
      </td>
    </tr>
  );
};

export default TransactionsRecord;
