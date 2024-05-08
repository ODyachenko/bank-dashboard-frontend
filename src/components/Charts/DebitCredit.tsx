import { FC } from 'react';
import Block from '../Block/Block';
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';
import { debitCreditList } from '../../data/debitCreditList';
import { ClassNameProps } from '../../../@types';

const DebitCredit: FC<ClassNameProps> = ({ className }) => {
  return (
    <Block title="Debit & Credit Overview" className={className}>
      <ResponsiveContainer height={364}>
        <BarChart
          data={debitCreditList}
          maxBarSize={30}
          style={{ fontSize: '12px' }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" axisLine={false} />
          <Tooltip />
          <Legend iconType="circle" />
          <Bar dataKey="debit" fill="#1A16F3" radius={10} />
          <Bar dataKey="credit" fill="#FCAA0B" radius={10} />
        </BarChart>
      </ResponsiveContainer>
    </Block>
  );
};

export default DebitCredit;
