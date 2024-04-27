// mtu
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// mtu

const index = () => {
  return (
    <>
      <Box sx={{ p: 1 }}>
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
          <Paper elevation={0} sx={{ width: '200px' }}>
            <Typography><strong>Type of crime:</strong></Typography>
          </Paper>
          <Paper elevation={0}>theft</Paper>
        </Stack>
        <Stack spacing={{ xs: 1, sm: 2, mt: 1 }} direction="row" useFlexGap flexWrap="wrap">
          <Paper elevation={0}>
            <Typography><strong>Personal information</strong></Typography>
          </Paper>
        </Stack>
      </Box>
      <Box sx={{ p: 1 }}>
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
          <Paper elevation={0} sx={{ width: '200px' }}>
            <Typography className='italic'>Example</Typography>
          </Paper>
          <Paper elevation={0}></Paper>
        </Stack>
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center' }}>
          <Paper elevation={0} sx={{ width: '200px' }}>
            <Typography>Name:</Typography>
          </Paper>
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center">
              <Typography>Louise </Typography>
              <div className='text-field'>
                <TextField
                  margin="normal"
                  disabled
                  placeholder="Taylor"
                />
              </div>
            </Stack>
          </Paper>
        </Stack>
      </Box>
    </>
  );
};

export default index;
