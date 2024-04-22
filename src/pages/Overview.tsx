import { FC } from 'react';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import CreditCards from '../components/CreditCards/CreditCards';
import Transactions from '../components/Transactions/Transactions';
import { transacrionList } from '../data/transactionList';
import WeeklyActivity from '../components/Charts/WeeklyActivity';
import ExpenseStatistics from '../components/Charts/ExpenseStatistics';
import BalanceHistory from '../components/Charts/BalanceHistory';
import Transfer from '../components/Transfer/Transfer';
import Layout from '../components/Layout/Layout';

const Overview: FC = () => {
  return (
    <Layout>
      <PageWrapper title="Overview">
        <div className="row mb-5 lg:grid lg:grid-cols-3 lg:gap-6 lg:mb-6">
          <CreditCards className="col-span-2 mb-5 lg:mb-0" />
          <Transactions
            title="Recent Transaction"
            transactions={transacrionList}
            className="lg:max-h-[204px] overflow-auto xl:max-h-[224px]"
          />
        </div>
        <div className="row mb-5 lg:grid lg:grid-cols-3 lg:gap-6 lg:mb-6">
          <WeeklyActivity className="col-span-2" />
          <ExpenseStatistics />
        </div>
        <div className="row lg:grid lg:grid-cols-3 lg:gap-6">
          <Transfer />
          <BalanceHistory className="col-span-2" />
        </div>
      </PageWrapper>
    </Layout>
  );
};

export default Overview;
