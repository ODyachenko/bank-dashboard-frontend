import { FC } from 'react';
import searchIcon from '/search.svg';

const SearchField: FC = () => {
  return (
    <label className="flex w-full items-center gap-4 bg-primary-bg rounded-3xl order-1 cursor-pointer py-4 px-5 lg:max-w-[255px] lg:order-none">
      <img src={searchIcon} alt="search icon" />
      <input type="search" placeholder="Search for something" />
    </label>
  );
};

export default SearchField;
