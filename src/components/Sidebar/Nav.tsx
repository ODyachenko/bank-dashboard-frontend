import { FC, useEffect } from 'react';
import logo from '../../assets/img/logo.svg';
import NavList from './NavList';
import { useAppSelector } from '../../hooks/hooks';
import Burger from '../../UI/Burger/Burger';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Sidebar: FC = () => {
  const { showNavbar } = useAppSelector((state) => state.nav);

  useEffect(() => {
    showNavbar
      ? document.documentElement.classList.add('active')
      : document.documentElement.classList.remove('active');
  }, [showNavbar]);

  return (
    <nav
      className={`nav  absolute top-0 bottom-0 -left-[255px] z-50 transition-all duration-300 lg:block xl:flex-shrink-0 
      ${showNavbar ? 'left-0' : ''} lg:static`}
    >
      <div className="container">
        <div className="nav__brand flex items-center gap-3 mb-14">
          <NavLink to={'/'} className={'flex items-center gap-3'}>
            <img src={logo} alt="Logo" />
            <h1 className="text-2xl font-bold">BankDash</h1>
          </NavLink>
          <Burger />
        </div>
        <NavList />
      </div>
    </nav>
  );
};

export default Sidebar;
