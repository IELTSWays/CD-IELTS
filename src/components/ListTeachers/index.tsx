import { useNavigate } from "react-router-dom";

// mtu
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { red } from '@mui/material/colors';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ArticleIcon from '@mui/icons-material/Article';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
// mtu

import video1 from '@/assets/videos/example.mp4'

const CardTeacher = ({ data }: any) => {

  const navigate = useNavigate();

  const { id, name, description, photo, speaking_price } = data;

  return (
    <Card variant="outlined">
      <CardMedia
        // component="video"
        // image={video1}
        // controls
        component="img"
        height="194"
        image={`http://195.214.235.46:8000${photo}`}
        sx={{ borderRadius: 1.5 }}
      />
      <CardContent sx={{ pb: 0.5 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" component="div" sx={{ color: red[700] }}>
            {name}
          </Typography>
          <Chip label={`${(speaking_price * 10).toLocaleString()} IRR` } variant="outlined" sx={{ borderRadius: '7px' }}/>
        </Stack>

        {/* <Typography color="text.secondary" sx={{ pb: 1 }}>
          {company.catchPhrase} - {company.bs}
        </Typography> */}

        <Typography color="text.secondary" sx={{ mx: 1 }}>
          <ul id="list-red-bullet">
            <li>
              {description}
            </li>
          </ul>
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ pt: 0.5 }}>

        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%' }}>
          <Stack direction="row" alignItems="center">
            <IconButton>
              <ArticleIcon size="small" />
            </IconButton>
            <IconButton>
              <OndemandVideoIcon size="small" />
            </IconButton>
          </Stack>
          <Stack direction="row" alignItems="center">
            <IconButton onClick={() => navigate(`/teachers/${id}`)}>
              <ChevronRightIcon size="small" sx={{ color: red[700] }} />
            </IconButton>
          </Stack>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default CardTeacher;