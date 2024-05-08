import { FC } from 'react';
import Block from '../Block/Block';
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from 'recharts';
import { monthlyRevenue } from '../../data/monthlyRevenue';

const MonthlyRevenue: FC = () => {
  return (
    <Block title="Monthly Revenue">
      <ResponsiveContainer height={225}>
        <LineChart data={monthlyRevenue}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" axisLine={false} />
          <YAxis axisLine={false} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#16DBCC"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </Block>
  );
};

export default MonthlyRevenue;
