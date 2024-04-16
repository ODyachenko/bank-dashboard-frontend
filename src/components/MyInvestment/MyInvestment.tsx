import React, { FC } from 'react';
import Block from '../Block/Block';
import InvestmentList from './InvestmentList';
import { ClassNameProps } from '../../../@types';

const MyInvestment: FC<ClassNameProps> = ({ className }) => {
  return (
    <Block title="My Investment" className={className}>
      <InvestmentList />
    </Block>
  );
};

export default MyInvestment;
