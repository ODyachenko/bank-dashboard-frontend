import { FC } from 'react';
import Block from '../Block/Block';
import InputField from '../../UI/InputField/InputField';
import Btn from '../../UI/Btn/Btn';
import { ClassNameProps } from '../../../@types';

const NewCard: FC<ClassNameProps> = ({ className }) => {
  return (
    <Block title="Add New Card" className={className}>
      <form>
        <p className="text-xs text-secondary-blue mb-4">
          Credit Card generally means a plastic card issued by Scheduled
          Commercial Banks assigned to a Cardholder, with a credit limit, that
          can be used to purchase goods and services on credit or obtain cash
          advances.
        </p>
        <fieldset className="lg:grid lg:grid-cols-2 lg:gap-8">
          <InputField
            className="mb-4"
            type="text"
            label="Card Type"
            placeholder="Classic"
          />
          <InputField
            className="mb-4"
            type="text"
            label="Name On Card"
            placeholder="My Card"
          />
          <InputField
            className="mb-4"
            type="number"
            label="Card Number"
            placeholder="12345..."
          />
          <InputField
            className="mb-4"
            type="date"
            label="Expiration Date"
            placeholder="dd.mm.yyyy"
          />
        </fieldset>
        <Btn value="Add Card" />
      </form>
    </Block>
  );
};

export default NewCard;
