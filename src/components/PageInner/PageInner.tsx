import { FC } from 'react';
import SearchField from '../../UI/SearchField/SearchField';
import { PageInnerType } from '../../../@types';

import user from '/avatar.png';
import Burger from '../../UI/Burger/Burger';

const PageInner: FC<PageInnerType> = ({ title }) => {
  return (
    <div className=" bg-white py-6 mb-6">
      <div className="container flex items-center justify-between flex-wrap gap-6 lg:flex-nowrap lg:justify-start">
        <Burger />
        <h1 className="title lg:mr-auto">{title}</h1>
        <SearchField />
        <img className="w-11 h-11 rounded-full" src={user} alt="user avaatar" />
      </div>
    </div>
  );
};

export default PageInner;
