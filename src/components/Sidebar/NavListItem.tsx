import { FC } from 'react';
import { NavListType } from '../../../@types';
import { NavLink } from 'react-router-dom';

const NavListItem: FC<NavListType> = ({ value, path, icon }) => {
  return (
    <li className="nav__list-item">
      <NavLink
        to={path}
        className="nav__list-link flex items-center gap-5 text-gray-text   "
      >
        <img src={icon} alt={value} />
        <span className="text-base font-medium ">{value}</span>
      </NavLink>
    </li>
  );
};

export default NavListItem;
