import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts';
import './Statistics.css'



const Statistics = () => {
  const allQuiz = useLoaderData();
  const data = allQuiz.data;
    
    return (
      <LineChart className='chart'
      width={500}
      height={300}
      data={data}
      >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
   
    
    );
};

export default Statistics;