import React, { FC } from 'react';
import { StockType } from '../../../@types';

const InvestmentListItem: FC<StockType> = ({
  name,
  price,
  returnPercent,
  icon,
}) => {
  return (
    <li className="flex justify-between items-center gap-5 bg-primary-bg rounded-xl p-4 mb-4 last:mb-0">
      <div className="flex gap-5 items-center">
        <img src={icon} alt={name} />
        <div>
          <span className="block font-medium mb-2">{name}</span>
          <span className="text-secondary-blue">E-commerce, Marketplace</span>
        </div>
      </div>
      <div className="hidden lg:block">
        <span className="block font-medium mb-2">${price}</span>
        <span className="text-secondary-blue">Envestment Value</span>
      </div>
      <div>
        {Math.sign(returnPercent) === -1 ? (
          <span className="block text-primary-red font-medium mb-2">
            {returnPercent}%
          </span>
        ) : (
          <span className="block text-primary-green font-medium mb-2">
            +{returnPercent}%
          </span>
        )}
        <span className="text-secondary-blue">Return Value</span>
      </div>
    </li>
  );
};

export default InvestmentListItem;
