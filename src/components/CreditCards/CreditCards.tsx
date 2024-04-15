import React, { FC } from 'react';
import CreditCardsCarousel from './CreditCardsCarousel';
import Block from '../Block/Block';

const CreditCards: FC = () => {
  return (
    <Block title="My Cards" className="mb-5 lg:mb-0">
      <CreditCardsCarousel />
    </Block>
  );
};

export default CreditCards;
