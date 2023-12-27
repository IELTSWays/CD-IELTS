// mtu
import { blue, red } from '@mui/material/colors';
// mtu

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Bar Chart',
    // },
  },
};

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: blue[700],
      borderColor: blue[700]
    },
    {
      label: "Second dataset",
      data: [56, 43, 60, 55, 41, 44],
      fill: true,
      backgroundColor: red[700],
      borderColor: red[700]
    },
  ]
};

const BarChart = () => {
  return <Bar options={options} data={data} />;
};

export default BarChart;

