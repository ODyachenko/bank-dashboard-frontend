import { FC } from 'react';
import Layout from '../components/Layout/Layout';
import CreditCards from '../components/CreditCards/CreditCards';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import YearlyExpenses from '../components/Charts/YearlyExpenses';
import RecentTransactions from '../components/RecentTransactions/RecentTransactions';

const Transactions: FC = () => {
  return (
    <Layout>
      <PageWrapper title="Transactions">
        <div className="row mb-5 lg:grid lg:grid-cols-3 lg:gap-6 lg:mb-6">
          <CreditCards className="col-span-2" />
          <YearlyExpenses />
        </div>
        <RecentTransactions />
      </PageWrapper>
    </Layout>
  );
};

export default Transactions;
