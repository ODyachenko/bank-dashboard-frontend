import React, { FC } from 'react';
import { AccountCategoriesType } from '../../../@types';

const CategoriesItem: FC<AccountCategoriesType> = ({ name, icon, total }) => {
  return (
    <li className="flex items-center gap-2 bg-white rounded-2xl py-4 px-3">
      <img className="" src={icon} alt={name} />
      <div>
        <span className="block text-xs text-secondary-blue">{name}</span>
        <h2 className="text-base font-semibold">${total}</h2>
      </div>
    </li>
  );
};

export default CategoriesItem;
