import React, { FC } from 'react';
import Block from '../Block/Block';
import Tabs from '../../UI/Tabs/Tabs';
import { TabsType } from '../../../@types';
import TransactionsTable from './TransactionsTable';

const tabsName: TabsType = ['All Transactions', 'Income', 'Expense'];

const RecentTransactions: FC = () => {
  return (
    <Block title="Recent Transactions">
      <Tabs tabsNameArray={tabsName} className=" mb-4" />
      <TransactionsTable />
    </Block>
  );
};

export default RecentTransactions;
