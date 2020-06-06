import React from 'react';
import {
  Label, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  AreaChart, Area
} from 'recharts';

import './Chart.scss';


const Chart = ({ data }) => {
  return (
    <div className="Chart card">
      <ResponsiveContainer
        width={"100%"}
        height={300}
      >
        <AreaChart
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <XAxis dataKey="date" />
          <YAxis>
            <Label angle={-90} offset={10} position="left">BMI</Label>
          </YAxis>
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Area type="monotone" dataKey="bmi" stroke="#8884d8" activeDot={{ r: 8 }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart;