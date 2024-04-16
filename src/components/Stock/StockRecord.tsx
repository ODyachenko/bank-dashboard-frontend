import React, { FC } from 'react';
import { StockType } from '../../../@types';

const StockRecord: FC<StockType> = ({ name, price, id, returnPercent }) => {
  return (
    <tr className="text-center border-b border-solid border-border-gray">
      <td className="p-4">{id}</td>
      <td className="p-4">{name}</td>
      <td className="p-4">${price}</td>
      {Math.sign(returnPercent) === -1 ? (
        <td className="p-4 text-primary-red">{returnPercent}%</td>
      ) : (
        <td className="p-4 text-primary-green">{returnPercent}%</td>
      )}
    </tr>
  );
};

export default StockRecord;
