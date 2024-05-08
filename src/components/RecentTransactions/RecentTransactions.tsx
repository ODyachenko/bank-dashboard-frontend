import { FC, useState } from 'react';
import Block from '../Block/Block';
import Tabs from '../../UI/Tabs/Tabs';
import { TabsType } from '../../../@types';
import TransactionsTable from './TransactionsTable';

const tabsName: TabsType = ['All Transactions', 'Income', 'Expense'];

const RecentTransactions: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const onChangeHandler = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Block title="Recent Transactions">
      <Tabs
        tabsNameArray={tabsName}
        activeTab={activeTab}
        onChangeHandler={onChangeHandler}
        className=" mb-4"
      />
      <TransactionsTable />
    </Block>
  );
};

export default RecentTransactions;
