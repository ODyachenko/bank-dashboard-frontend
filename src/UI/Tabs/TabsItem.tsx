import { FC } from 'react';
import { TabsItemType } from '../../../@types';

const TabsItem: FC<TabsItemType> = ({
  value,
  index,
  activeTab,
  onChangeHandler,
}) => {
  return (
    <li
      className={`w-1/3 text-center border-b-2 border-solid border-border-gray pb-2 transition-all hover:text-primary-blue cursor-pointer ${
        index === activeTab
          ? 'text-primary-blue border-b-2 border-primary-blue'
          : 'text-secondary-blue'
      }`}
      onClick={() => onChangeHandler(index)}
    >
      {value}
    </li>
  );
};

export default TabsItem;
