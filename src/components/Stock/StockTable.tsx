import { FC } from 'react';
import { stockList } from '../../data/stockList';
import StockRecord from './StockRecord';

const StockTable: FC = () => {
  return (
    <table className="w-full lg:block lg:overflow-auto">
      <thead className="font-medium text-secondary-blue border-b border-solid border-border-gray hidden lg:table-header-group">
        <tr>
          <th className="p-4">SL No</th>
          <th className="p-4">Name</th>
          <th className="p-4">Price</th>
          <th className="p-4">Return</th>
        </tr>
      </thead>
      <tbody>
        {stockList.map((stock) => (
          <StockRecord key={stock.id} {...stock} />
        ))}
      </tbody>
    </table>
  );
};

export default StockTable;
