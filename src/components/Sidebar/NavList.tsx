import { FC } from 'react';
import { navList } from '../../data/navList';
import NavListItem from './NavListItem';
import { useAppDispatch } from '../../hooks/hooks';
import { setShowNavbar } from '../../redux/slices/navSlice';

const NavList: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <ul className="nav__list" onClick={() => dispatch(setShowNavbar(false))}>
      {navList.map((item) => (
        <NavListItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default NavList;
