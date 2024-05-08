import { FC } from 'react';
import Block from '../Block/Block';
import LoansOverviewTable from './LoansOverviewTable';

const LoansOverview: FC = () => {
  return (
    <Block title="Active Loans Overview">
      <LoansOverviewTable />
    </Block>
  );
};

export default LoansOverview;
