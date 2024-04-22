import React, { FC } from 'react';
import CategoriesItem from './CategoriesItem';
import { CategoriesType } from '../../../@types';

type CategoriesProps = {
  categoriesList: CategoriesType[];
  className?: string;
};

const Categories: FC<CategoriesProps> = ({ categoriesList, className }) => {
  return (
    <ul className={`grid gap-4 mb-5 ${className ? className : ''}`}>
      {categoriesList.map((category) => (
        <CategoriesItem key={category.id} {...category} />
      ))}
    </ul>
  );
};

export default Categories;
