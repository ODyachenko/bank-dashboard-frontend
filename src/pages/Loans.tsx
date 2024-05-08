import { FC } from 'react';
import Categories from '../components/Categories/Categories';
import Layout from '../components/Layout/Layout';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import LoansOverview from '../components/LoansOverview/LoansOverview';
import { loansCategories } from '../data/loansCategories';

const Loans: FC = () => {
  return (
    <Layout>
      <PageWrapper title="Loans">
        <Categories
          categoriesList={loansCategories}
          className="sm:grid-cols-2 md:grid-cols-3 md:grid-rows-1"
        />
        <LoansOverview />
      </PageWrapper>
    </Layout>
  );
};

export default Loans;
