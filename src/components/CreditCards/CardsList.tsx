import { FC } from 'react';
import Block from '../Block/Block';
import { cardsList } from '../../data/cardsList';
import CardListItem from './CardListItem';
import { ClassNameProps } from '../../../@types';

const CardsList: FC<ClassNameProps> = ({ className }) => {
  return (
    <Block title="Card List" className={className}>
      <ul>
        {cardsList.map((card) => (
          <CardListItem key={card.id} {...card} />
        ))}
      </ul>
    </Block>
  );
};

export default CardsList;
