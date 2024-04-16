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
import { yearlyInvestment } from '../../data/yearlyInvestment';

const YearlyInvestment: FC = () => {
  return (
    <Block title="Yearly Total Investment">
      <div className={'bg-white rounded-2xl p-4 xl:p-7'}>
        <ResponsiveContainer height={225}>
          <LineChart data={yearlyInvestment}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" axisLine={false} />
            <YAxis axisLine={false} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="total"
              stroke="#FCAA0B"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Block>
  );
};

export default YearlyInvestment;
