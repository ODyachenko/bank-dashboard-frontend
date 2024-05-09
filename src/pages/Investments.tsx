import { FC } from 'react';
import Categories from '../components/Categories/Categories';
import Layout from '../components/Layout/Layout';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import YearlyInvestment from '../components/Charts/YearlyInvestment';
import MonthlyRevenue from '../components/Charts/MonthlyRevenue';
import Stock from '../components/Stock/Stock';
import MyInvestment from '../components/MyInvestment/MyInvestment';
import { investmentsCategories } from '../data/investmentsCategories';

const Investments: FC = () => {
  return (
    <Layout>
      <PageWrapper title="Investments">
        <Categories
          categoriesList={investmentsCategories}
          className="sm:grid-cols-2 md:grid-cols-3 md:grid-rows-1"
        />
        <div className="row mb-5 lg:grid lg:grid-cols-2 lg:gap-6 lg:mb-6">
          <YearlyInvestment className="mb-5 lg:mb-0" />
          <MonthlyRevenue />
        </div>
        <div className="row mb-5 lg:grid lg:grid-cols-3 lg:gap-6 lg:mb-6">
          <MyInvestment className="col-span-2 mb-5 lg:mb-0" />
          <Stock />
        </div>
      </PageWrapper>
    </Layout>
  );
};

export default Investments;
