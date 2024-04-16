import React, { FC } from 'react';
import { accountCategories } from '../../data/accountCategories';
import CategoriesItem from './CategoriesItem';

const Categories: FC = () => {
  return (
    <ul className="grid grid-cols-2 grid-rows-2 gap-4 mb-5 md:grid-cols-4 md:grid-rows-1">
      {accountCategories.map((category) => (
        <CategoriesItem key={category.id} {...category} />
      ))}
    </ul>
  );
};

export default Categories;
