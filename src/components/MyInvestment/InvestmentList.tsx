import { FC } from 'react';
import { myInvestmentList } from '../../data/myInvestmentList';
import InvestmentListItem from './InvestmentListItem';

const InvestmentList: FC = () => {
  return (
    <ul>
      {myInvestmentList.map((investment) => (
        <InvestmentListItem key={investment.id} {...investment} />
      ))}
    </ul>
  );
};

export default InvestmentList;
