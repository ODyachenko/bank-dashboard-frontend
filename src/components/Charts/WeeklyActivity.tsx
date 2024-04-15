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

const WeeklyActivity: FC = () => {
  return (
    <Block
      title="Weekly Activity"
      className="mb-5 lg:w-full lg:max-w-[480px] lg:flex-shrink-0 lg:mb-0 xl:max-w-[660px]"
    >
      <div className={'bg-white rounded-2xl p-4'}>
        <ResponsiveContainer height={225}>
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
