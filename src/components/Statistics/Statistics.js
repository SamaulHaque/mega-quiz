import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import './Statistics.css'



const Statistics = () => {
  const allQuiz = useLoaderData();
  const data = allQuiz.data;
    
    return (
      <ResponsiveContainer className='chart' width="95%" height={300}>
      <LineChart 
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 20,
        left: 20,
        bottom: 20,
      }}
      >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
    </ResponsiveContainer>

    
    );
};

export default Statistics;