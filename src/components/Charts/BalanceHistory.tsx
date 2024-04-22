import { FC } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import Block from '../Block/Block';
import { balanceHistory } from '../../data/balanceHistory';
import { ClassNameProps } from '../../../@types';

const BalanceHistory: FC<ClassNameProps> = ({ className }) => {
  return (
    <Block
      title="Balance History"
      className={`lg:w-full ${className ? className : ''}`}
    >
      <ResponsiveContainer height={225}>
        <AreaChart data={balanceHistory} style={{ fontSize: '12px' }}>
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2D60FF" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#2D60FF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" axisLine={false} />
          <YAxis axisLine={false} width={30} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="balance"
            stroke="#1814F3"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorBalance)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Block>
  );
};

export default BalanceHistory;
