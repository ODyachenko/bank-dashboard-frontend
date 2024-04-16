import React, { FC } from 'react';
import Categories from '../components/Categories/Categories';
import Layout from '../components/Layout/Layout';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import YearlyInvestment from '../components/Charts/YearlyInvestment';
import MonthlyRevenue from '../components/Charts/MonthlyRevenue';
import Stock from '../components/Stock/Stock';
import MyInvestment from '../components/MyInvestment/MyInvestment';

const Investments: FC = () => {
  return (
    <Layout>
      <PageWrapper title="Investments">
        <Categories />
        <div className="row mb-5 lg:grid lg:grid-cols-2 lg:gap-6 lg:mb-6">
          <YearlyInvestment />
          <MonthlyRevenue />
        </div>
        <div className="row mb-5 lg:grid lg:grid-cols-3 lg:gap-6 lg:mb-6">
          <MyInvestment className="col-span-2" />
          <Stock />
        </div>
      </PageWrapper>
    </Layout>
  );
};

export default Investments;