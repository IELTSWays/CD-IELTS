// mtu
import { red, blue } from '@mui/material/colors';
// mtu

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      backgroundColor: "#E21D38",
      borderColor: "#E21D38"
    },
  ]
};

const LineChart = () => {
  return <Line options={options} data={data} />;
};

export default LineChart;

