import { FC } from 'react';
import Block from '../Block/Block';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import { weeklyActivity } from '../../data/weeklyActivity';
import { ClassNameProps } from '../../../@types';

const WeeklyActivity: FC<ClassNameProps> = ({ className }) => {
  return (
    <Block title="Weekly Activity" className={`${className ? className : ''}`}>
      <div className={' lg:h-[322px]'}>
        <ResponsiveContainer minHeight={225}>
          <BarChart
            data={weeklyActivity}
            maxBarSize={15}
            style={{ fontSize: '12px' }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" axisLine={false} />
            <YAxis width={40} axisLine={false} />
            <Tooltip />
            <Legend iconType="circle" />
            <Bar dataKey="income" fill="#16DBCC" radius={5} />
            <Bar dataKey="expense" fill="#FE5C73" radius={5} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Block>
  );
};

export default WeeklyActivity;
