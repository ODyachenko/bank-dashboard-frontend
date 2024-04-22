import React, { FC } from 'react';
import { TabsType } from '../../../@types';
import TabsItem from './TabsItem';

type TabsProps = {
  tabsNameArray: TabsType;
  className?: string;
  activeTab: number;
  onChangeHandler: (index: number) => void;
};

const Tabs: FC<TabsProps> = ({
  activeTab,
  onChangeHandler,
  tabsNameArray,
  className,
}) => {
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
          onChangeHandler={onChangeHandler}
        />
      ))}
    </ul>
  );
};

export default Tabs;
