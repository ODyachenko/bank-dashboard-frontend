import React, { FC } from 'react';
import Block from '../Block/Block';
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';
import { debitCreditList } from '../../data/debitCreditList';
import { ClassNameProps } from '../../../@types';

const DebitCredit: FC<ClassNameProps> = ({ className }) => {
  return (
    <Block title="Debit & Credit Overview" className={className}>
      <div className={'bg-white rounded-2xl p-4 xl:p-7'}>
        <ResponsiveContainer height={364}>
          <BarChart
            data={debitCreditList}
            maxBarSize={30}
            style={{ fontSize: '12px' }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" axisLine={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="debit" fill="#1A16F3" radius={10} />
            <Bar dataKey="credit" fill="#FCAA0B" radius={10} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Block>
  );
};

export default DebitCredit;
