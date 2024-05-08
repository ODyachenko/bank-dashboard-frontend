import { FC, useCallback, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from 'recharts';
import Block from '../Block/Block';
import { expenseStatistics } from '../../data/expenseStatistics';

const COLORS = ['#343C6A', '#FC7900', '#1814F3', '#FA00FF'];

const renderActiveShape = (props: any) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
  } = props;

  return (
    <g>
      <text
        x="50%"
        y="45%"
        dy={8}
        textAnchor="middle"
        className="font-semibold"
      >
        {payload.name}
      </text>
      <text
        x="50%"
        y="53%"
        dy={8}
        textAnchor="middle"
        className="font-semibold"
      >
        {payload.value}%
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
    </g>
  );
};

const ExpenseStatistics: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_: any, index: number) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <Block title="Expense Statistics" className="lg:w-full">
      <ResponsiveContainer height={290}>
        <PieChart width={300} height={300}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={expenseStatistics}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={130}
            dataKey="value"
            onMouseEnter={onPieEnter}
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
    </Block>
  );
};

export default ExpenseStatistics;
