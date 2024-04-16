import React, { FC, useState } from 'react';
import { TabsType } from '../../../@types';
import TabsItem from './TabsItem';

type TabsProps = {
  tabsNameArray: TabsType;
  className?: string;
};

const Tabs: FC<TabsProps> = ({ tabsNameArray, className }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <ul
      className={`flex justify-between items-end ${className ? className : ''}`}
    >
      {tabsNameArray.map((tab, index) => (
        <TabsItem
          key={tab}
          value={tab}
          index={index}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      ))}
    </ul>
  );
};

export default Tabs;
