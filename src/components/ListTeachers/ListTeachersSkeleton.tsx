// mtu
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
// mtu

const ListTeachersSkeleton = () => {

  return (
    <Card variant="outlined">
      {/* <CardMedia
        component="video"
        image={video1}
        controls
      /> */}
      <Skeleton variant="rounded" width='100%' height={280} />

      <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
        <Skeleton variant="text" sx={{ width: '100%', height: '32px' }} />
      </CardContent>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', py: 0 }}>
        <Skeleton variant="text" sx={{ width: '100%', height: '26px' }} />
      </CardContent>
      <CardActions>
        <Box sx={{ width: '100%', mt: 1 }}>
          <Skeleton variant="text" sx={{ width: '50%', height: '26px', ml: 1 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 1, mx: 1, flexDirection: { xs: 'column', md: 'row' } }} id="chip-speaking">
            <Skeleton variant="rounded" width="100%" height={46} />
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ListTeachersSkeleton;