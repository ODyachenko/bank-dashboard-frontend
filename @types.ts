export type NavListType = {
  id: number;
  value: string;
  path: string;
  icon: any;
};

export type InputFieldType = {
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'password' | 'date' | 'number';
};

export type PrimaryBtnType = {
  value: string;
};

export type PageInnerType = {
  title: string;
};

export type TransactionType = {
  id: number;
  icon: React.ReactNode;
  name: string;
  date: string;
  type: 'income' | 'expense';
  value: number;
};

export type TransactionsType = {
  title: string;
  transactions: TransactionType[];
  className?: string;
};

export type BlockType = {
  title: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export type WeeklyActivityType = {
  name: string;
  income: number;
  expense: number;
  amt?: number;
};

export type BalanceType = {
  month: string;
  balance: number;
};
