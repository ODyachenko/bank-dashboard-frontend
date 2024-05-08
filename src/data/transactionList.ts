import icon from '/transacrion.png';
import { TransactionType } from '../../@types';

export const transacrionList: TransactionType[] = [
  {
    id: 1,
    icon: icon,
    name: 'Deposit from my',
    date: '28 January 2021',
    type: 'expense',
    value: 850,
  },
  {
    id: 2,
    icon: icon,
    name: 'Deposit Paypal',
    date: '28 January 2021',
    type: 'income',
    value: 2500,
  },
  {
    id: 3,
    icon: icon,
    name: 'Jemi Wilson',
    date: '28 January 2021',
    type: 'income',
    value: 5400,
  },
  {
    id: 4,
    icon: icon,
    name: 'Deposit from my',
    date: '28 January 2021',
    type: 'expense',
    value: 850,
  },
];
