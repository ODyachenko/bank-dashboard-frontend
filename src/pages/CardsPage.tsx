import { FC } from 'react';
import Layout from '../components/Layout/Layout';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import CreditCards from '../components/CreditCards/CreditCards';
import ExpenseStatistics from '../components/Charts/ExpenseStatistics';
import NewCard from '../components/CreditCards/NewCard';
import CardSettings from '../components/CreditCards/CardSettings';
import CardsList from '../components/CreditCards/CardsList';

const CardsPage: FC = () => {
  return (
    <Layout>
      <PageWrapper title="Credit Cards">
        <CreditCards className="mb-5" />
        <div className="row mb-5 lg:grid lg:grid-cols-3 lg:gap-6 lg:mb-6">
          <ExpenseStatistics />
          <CardsList className="col-span-2 mt-5 lg:mt-0" />
        </div>
        <div className="row mb-5 lg:grid lg:grid-cols-3 lg:gap-6 lg:mb-6">
          <NewCard className="col-span-2 mb-5 lg:mb-0" />
          <CardSettings />
        </div>
      </PageWrapper>
    </Layout>
  );
};

export default CardsPage;
