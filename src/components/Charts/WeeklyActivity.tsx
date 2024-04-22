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
    <Block
      title="Weekly Activity"
      className={`mb-5 ${className ? className : ''}`}
    >
      <div className={'bg-white rounded-2xl p-4 lg:h-[322px] xl:p-7'}>
        <ResponsiveContainer minHeight={225}>
          <BarChart
            data={weeklyActivity}
            // barSize={7}
            maxBarSize={15}
            style={{ fontSize: '12px' }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" axisLine={false} />
            <YAxis width={40} axisLine={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" fill="#16DBCC" radius={4} />
            <Bar dataKey="expense" fill="#FE5C73" radius={4} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Block>
  );
};

export default WeeklyActivity;
