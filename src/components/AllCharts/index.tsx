import { useState } from 'react'
// mtu
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EqualizerIcon from '@mui/icons-material/Equalizer';
// mtu
import PieChart from '@/components/Chars/PieChart';
import LineChart from "@/components/Chars/LineChart";
import BarChart from "@/components/Chars/BarChart";

const AllCharts = () => {

  const [alignment, setAlignment] = useState<string | null>('LineChart');

  const handleAlignment = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };

  return <Card variant="outlined">
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[700] }}>
          <EqualizerIcon />
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      titleTypographyProps={{ variant: 'h6' }}
      title="Visual Charts"
    />
    <CardContent>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        size="small"
        onChange={handleAlignment}
        sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}
      >
        <ToggleButton value="LineChart" >
          LineChart
        </ToggleButton>
        <ToggleButton value="BarChart" >
          BarChart
        </ToggleButton>
        <ToggleButton value="PieChart" >
          PieChart
        </ToggleButton>
      </ToggleButtonGroup>

      {alignment === 'BarChart' && <BarChart />}
      {alignment === 'LineChart' && <LineChart />}
      {alignment === 'PieChart' &&
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '300px', margin: 'auto' }}>
          <PieChart />
        </div>
      }

    </CardContent>
  </Card >;
};

export default AllCharts;