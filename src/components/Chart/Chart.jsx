import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';

const Chart = () => {
  const data = [
    { name: "Assignment 1", value: 60 },
    { name: "Assignment 2", value: 60 },
    { name: "Assignment 3", value: 60 },
    { name: "Assignment 4", value: 60 },
    { name: "Assignment 5", value: 56 },
    { name: "Assignment 6", value: 60 },
    { name: "Assignment 7", value: 60 },
    { name: "Assignment 8", value: 60 },
  ];

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ffa726",
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8 offset-lg-2 text-center">
            <h2 className="headline-secondary h1 fw-bolder mb-3">
            All the assignments marks in the chart
            </h2>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-4 text-center">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                startAngle={90}
                endAngle={-270}
                paddingAngle={0}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chart;
