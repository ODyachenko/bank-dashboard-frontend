import DashBoard from '../assets/img/Dashboard.svg';
import Transactions from '../assets/img/Transactions.svg';
import Accounts from '../assets/img/Accounts.svg';
import Investments from '../assets/img/Investments.svg';
import CreditCards from '../assets/img/CreditCards.svg';
import Loans from '../assets/img/Loans.svg';
import Services from '../assets/img/Services.svg';
import MyPrivileges from '../assets/img/MyPrivileges.svg';
import Settings from '../assets/img/Settings.svg';

import { NavListType } from '../../@types';

export const navList: NavListType[] = [
  {
    id: 1,
    value: 'Dashboard',
    path: '/',
    icon: DashBoard,
  },
  {
    id: 2,
    value: 'Transactions',
    path: '/transactions',
    icon: Transactions,
  },
  {
    id: 3,
    value: 'Accounts',
    path: '/accounts',
    icon: Accounts,
  },
  {
    id: 4,
    value: 'Investments',
    path: '/investments',
    icon: Investments,
  },
  {
    id: 5,
    value: 'Credit Cards',
    path: '/credit-cards',
    icon: CreditCards,
  },
  {
    id: 6,
    value: 'Loans',
    path: '/loans',
    icon: Loans,
  },
  {
    id: 7,
    value: 'Services',
    path: '/services',
    icon: Services,
  },
  {
    id: 8,
    value: 'My Privileges',
    path: '/my-privileges',
    icon: MyPrivileges,
  },
  {
    id: 9,
    value: 'Settings',
    path: '/settings',
    icon: Settings,
  },
];
