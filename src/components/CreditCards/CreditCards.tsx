import { FC } from 'react';
import CreditCardsCarousel from './CreditCardsCarousel';
import Block from '../Block/Block';
import { ClassNameProps } from '../../../@types';

const CreditCards: FC<ClassNameProps> = ({ className }) => {
  return (
    <Block title="My Cards" className={`${className ? className : ''}`}>
      <CreditCardsCarousel />
    </Block>
  );
};

export default CreditCards;
