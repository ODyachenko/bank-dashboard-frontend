import React, { FC } from 'react';
import { CardType } from '../../../@types';
import icon from '../../assets/img/transacrion.png';

const CardListItem: FC<CardType> = ({ type, bank }) => {
  return (
    <li className="flex items-center justify-between gap-3 bg-primary-bg rounded-xl py-4 px-5 mb-3 last:mb-0 ">
      <div className="flex items-center gap-3 flex-shrink-0">
        <img src={icon} alt={bank} />
        <div>
          <h3 className="font-medium mb-1">Card Type</h3>
          <span className="text-xs text-secondary-blue">{type}</span>
        </div>
      </div>
      <div>
        <h3 className="font-medium mb-1">Bank</h3>
        <span className="text-xs text-secondary-blue">{bank}</span>
      </div>
      <button className="inline-block w-auto text-primary-blue">
        View Details
      </button>
    </li>
  );
};

export default CardListItem;
