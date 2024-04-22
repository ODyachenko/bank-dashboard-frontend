import React, { FC } from 'react';
import { CardSettingType } from '../../../@types';
import icon from '../../assets/img/transacrion.png';

const CardSettingsItem: FC<CardSettingType> = ({ title, subtitle }) => {
  return (
    <li className="flex items-center gap-3 mb-4 last:mb-0">
      <img src={icon} alt={title} />
      <div>
        <h2 className="font-medium mb-1">{title}</h2>
        <span className="text-xs text-secondary-blue">{subtitle}</span>
      </div>
    </li>
  );
};

export default CardSettingsItem;
