import React, { FC } from 'react';
import Block from '../Block/Block';
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts';
import { monthlyRevenue } from '../../data/monthlyRevenue';

const MonthlyRevenue: FC = () => {
  return (
    <Block title="Monthly Revenue">
      <div className={'bg-white rounded-2xl p-4 xl:p-7'}>
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
      </div>
    </Block>
  );
};

export default MonthlyRevenue;
