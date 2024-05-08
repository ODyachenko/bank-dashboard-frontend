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
import { yearlyInvestment } from '../../data/yearlyInvestment';

const YearlyInvestment: FC = () => {
  return (
    <Block title="Yearly Total Investment">
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
    </Block>
  );
};

export default YearlyInvestment;
