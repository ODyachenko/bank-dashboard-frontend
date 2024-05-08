import { FC } from 'react';
import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { yearlyExpenses } from '../../data/yearlyExpenses';
import Block from '../Block/Block';

const YearlyExpenses: FC = () => {
  return (
    <Block title="My Expense">
      <ResponsiveContainer height={225}>
        <BarChart width={150} height={40} maxBarSize={37} data={yearlyExpenses}>
          <XAxis dataKey="month" axisLine={false} />
          <Tooltip />
          <Bar
            dataKey="amount"
            fill="#EDF0F7"
            radius={10}
            activeBar={{ fill: '#16DBCC' }}
          />
        </BarChart>
      </ResponsiveContainer>
    </Block>
  );
};

export default YearlyExpenses;
