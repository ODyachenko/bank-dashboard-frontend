import { FC } from 'react';
import logo from '../../assets/img/logo.svg';
import NavList from './NavList';

const Sidebar: FC = () => {
  return (
    <nav className="nav w-64 py-6 border-r border-solid border-border-gray hidden lg:block xl:flex-shrink-0">
      <div className="container">
        <div className="nav__brand flex items-center gap-3 mb-14">
          <img src={logo} alt="Logo" />
          <h1 className="text-2xl font-bold">BankDash</h1>
        </div>
        <NavList />
      </div>
    </nav>
  );
};

export default Sidebar;
