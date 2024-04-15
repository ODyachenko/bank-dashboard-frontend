import { FC } from 'react';
import { navList } from '../../data/navList';
import NavListItem from './NavListItem';

const NavList: FC = () => {
  return (
    <ul>
      {navList.map((item) => (
        <NavListItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default NavList;
