import React, { FC } from 'react';
import CreditCards from '../components/CreditCards/CreditCards';
import Layout from '../components/Layout/Layout';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import RecentTransactions from '../components/RecentTransactions/RecentTransactions';
import Transactions from '../components/Transactions/Transactions';
import { transacrionList } from '../data/transactionList';
import Categories from '../components/Categories/Categories';
import DebitCredit from '../components/Charts/DebitCredit';

const Accounts: FC = () => {
  return (
    <Layout>
      <PageWrapper title="Accounts">
        <Categories />
        <div className="row mb-5 lg:grid lg:grid-cols-3 lg:gap-6 lg:mb-6">
          <Transactions
            title="Last Transaction"
            transactions={transacrionList}
            className="lg:max-h-[204px] overflow-auto xl:max-h-[224px]"
          />
          <CreditCards className="col-span-2" />
        </div>
        <div className="row mb-5 lg:grid lg:grid-cols-3 lg:gap-6 lg:mb-6">
          <DebitCredit className="col-span-2" />
          <Transactions
            title="Invoices Sent"
            transactions={transacrionList}
            // className="lg:max-h-[204px] overflow-auto xl:max-h-[224px]"
          />
        </div>
      </PageWrapper>
    </Layout>
  );
};

export default Accounts;
