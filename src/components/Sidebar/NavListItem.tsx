import { FC } from 'react';
import { NavListType } from '../../../@types';

const NavListItem: FC<NavListType> = ({ value, path, icon }) => {
  return (
    <li className="mb-10 last:mb-0">
      <a
        href={path}
        className="flex items-center gap-5 text-gray-text transition-all hover:text-primary-blue"
      >
        <img src={icon} alt={value} />
        <span className="text-base font-medium ">{value}</span>
      </a>
    </li>
  );
};

export default NavListItem;
