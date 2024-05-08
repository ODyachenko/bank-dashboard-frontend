export type NavListType = {
  id: number;
  value: string;
  path: string;
  icon: string;
};

export type InputFieldType = {
  value?: string;
  onChange?: (value: string) => void;
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'password' | 'date' | 'number';
  className?: string;
};

export type PrimaryBtnType = {
  value: string;
};

export type PageInnerType = {
  title: string;
};

export type TransactionType = {
  id: number;
  icon: string;
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

export type YearlyExpensesType = {
  id: number;
  month: string;
  amount: number;
};

export type ClassNameProps = {
  className?: string;
};

export type TabsType = string[];

export type TabsItemType = {
  value: string;
  index: number;
  activeTab: number;
  onChangeHandler: (index: number) => void;
};

export type RecentTransaction = {
  id: number;
  direction: 'income' | 'expense';
  description: string;
  transactionId: string;
  type: string;
  card: string;
  date: string;
  amount: number;
};

export type CategoriesType = {
  id: number;
  name: string;
  total: number | string;
  icon: string;
};

export type DebitCreditDataType = {
  day: string;
  debit: number;
  credit: number;
};

export type InvestmentType = {
  year: number;
  total: number;
};

export type StockType = {
  id: number;
  name: string;
  price: number;
  returnPercent: number;
  icon?: string;
};

export type BtnType = {
  value: string;
  className?: string;
  handler?: () => void;
};

export type CardSettingType = {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
};

export type CardType = {
  id: number;
  type: string;
  bank: string;
};

export type LoansType = {
  id: number;
  loanMoney: number;
  leftToRepay: number;
  duration: number;
  rate: number;
  installment: number;
};

export type SelectFieldType = {
  label: string;
  className?: string;
  options: string[];
};
