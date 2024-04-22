import React, { FC } from 'react';
import Block from '../Block/Block';
import { cardSettings } from '../../data/cardSettings';
import CardSettingsItem from './CardSettingsItem';

const CardSettings: FC = () => {
  return (
    <Block title="Card Settings">
      <ul className="bg-white rounded-2xl p-4 xl:p-7">
        {cardSettings.map((setting) => (
          <CardSettingsItem key={setting.id} {...setting} />
        ))}
      </ul>
    </Block>
  );
};

export default CardSettings;
