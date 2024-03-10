import React from 'react';

// mtu
import { red, green, yellow } from '@mui/material/colors';
// mtu

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

// export const data = {
//   labels: ['Red', 'Green', 'Yellow'],
//   datasets: [
//     {
//       data: [12, 19, 3,],
//       backgroundColor: [
//         red[700],
//         green[700],
//         yellow[700]
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

const PieChart = ({percent}) => {
  return <Pie data={{
    labels: ['Right', 'Wrong', 'NA'],
    datasets: [
      {
        data: percent,
        backgroundColor: [
          green[700],
          red[700],
          yellow[700]
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }} />;
};

export default PieChart;