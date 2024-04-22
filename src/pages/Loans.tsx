import React, { FC } from 'react';
import Categories from '../components/Categories/Categories';
import Layout from '../components/Layout/Layout';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import LoansOverview from '../components/LoansOverview/LoansOverview';

const Loans: FC = () => {
  return (
    <Layout>
      <PageWrapper title="Loans">
        <Categories />
        <LoansOverview />
      </PageWrapper>
    </Layout>
  );
};

export default Loans;
