import { FC } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Block from '../Block/Block';
import { expenseStatistics } from '../../data/expenseStatistics';

const COLORS = ['#343C6A', '#FC7900', '#1814F3', '#FA00FF'];
const RADIAN = Math.PI / 180;

const ExpenseStatistics: FC = () => {
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%
        `}
        {/* {expenseStatistics[index].name} */}
      </text>
    );
  };

  return (
    <Block title="Expense Statistics" className="lg:w-full ">
      <div className={'bg-white rounded-2xl p-4'}>
        <ResponsiveContainer height={290}>
          <PieChart>
            <Pie
              data={expenseStatistics}
              labelLine={false}
              label={renderCustomizedLabel}
              fill="#8884d8"
              dataKey="value"
              //   paddingAngle={7}
            >
              {expenseStatistics.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Block>
  );
};

export default ExpenseStatistics;
