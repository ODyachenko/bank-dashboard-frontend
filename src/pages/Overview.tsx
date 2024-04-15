import { FC } from 'react';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import CreditCards from '../components/CreditCards/CreditCards';
import Transactions from '../components/Transactions/Transactions';
import { transacrionList } from '../data/transactionList';
import WeeklyActivity from '../components/Charts/WeeklyActivity';
import ExpenseStatistics from '../components/Charts/ExpenseStatistics';
import BalanceHistory from '../components/Charts/BalanceHistory';
import Transfer from '../components/Transfer/Transfer';

const Overview: FC = () => {
  return (
    <PageWrapper title="Overview">
      <div className="row mb-5 lg:flex lg:gap-6 lg:mb-6">
        <CreditCards />
        <Transactions
          title="Recent Transaction"
          transactions={transacrionList}
          className="lg:max-h-[172px]  overflow-auto xl:max-h-[196px]"
        />
      </div>
      <div className="row mb-5 lg:flex lg:gap-6 lg:mb-6">
        <WeeklyActivity />
        <ExpenseStatistics />
      </div>
      <div className="row lg:flex lg:gap-6">
        <Transfer />
        <BalanceHistory />
      </div>
    </PageWrapper>
  );
};

export default Overview;
