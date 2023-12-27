import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Grid from '@mui/material/Grid';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Times = ({onClick, sina}) => {
  const [value, setValue] = useState(0);

  const [selectTime, setSelectTime] = useState()

  // console.log(selectTime);


  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: 1,
  }));

  return (
    <Box sx={{ width: '100%', }} id="teacher-times">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Tab label="00:00 - 06:00" {...a11yProps(0)} />
          <Tab label="06:00 - 12:00" {...a11yProps(1)} />
          <Tab label="12:00 - 18:00" {...a11yProps(2)} />
          <Tab label="18:00 - 23:59" {...a11yProps(2)} />
        </Tabs>
        <Tabs value={value} onChange={handleChange} centered sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Tab label="00-06" {...a11yProps(0)} sx={{ minWidth: '25%' }} />
          <Tab label="06-12" {...a11yProps(1)} sx={{ minWidth: '25%' }} />
          <Tab label="12-18" {...a11yProps(2)} sx={{ minWidth: '25%' }} />
          <Tab label="18-24" {...a11yProps(3)} sx={{ minWidth: '25%' }} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <Box sx={{ flexGrow: 1, mt: 2.5 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {/* 00 - 01 */}
            <Grid item xs={4} sm={8} md={4}>
              <Paper variant="outlined" sx={{
                p: 1.5
              }}>
                <Typography variant="body1" display="block" gutterBottom align='center' color={grey[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} /> 00:00 - 01:00
                </Typography>

                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
                  <Item>
                    <Button
                      size="small"
                      variant="outlined"
                      fullWidth
                      value="1"
                      variant={sina == 1 ? 'contained' : 'outlined'}
                      onClick={onClick}
                    >
                      00:00 - 00:20
                    </Button>
                  </Item>
                  <Item>
                    <Button
                      size="small"
                      variant="outlined"
                      fullWidth
                      value="2"
                      variant={sina == 2 ? 'contained' : 'outlined'}
                      onClick={onClick}
                    >
                      00:20 - 00:40
                    </Button>
                  </Item>
                  <Item>
                    <Button
                      size="small"
                      variant="outlined"
                      fullWidth
                      value="3"
                      variant={sina == 3 ? 'contained' : 'outlined'}
                      onClick={onClick}
                    >
                      00:40 - 01:00
                    </Button>
                  </Item>
                </Stack>
              </Paper>
            </Grid>

            {/* 01 - 02 */}
            <Grid item xs={4} sm={8} md={4}>
              <Paper variant="outlined" sx={{
                p: 1.5
              }}>
                <Typography variant="body1" display="block" gutterBottom align='center' color={grey[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} /> 01:00 - 02:00
                </Typography>

                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      001;00 - 01:20
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      01:20 - 01:40
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      01:40 - 02:00
                    </Button>
                  </Item>
                </Stack>
              </Paper>
            </Grid>

            {/* 02 - 03 */}
            <Grid item xs={4} sm={8} md={4}>
              <Paper variant="outlined" sx={{
                p: 1.5
              }}>
                <Typography variant="body1" display="block" gutterBottom align='center' color={grey[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} /> 02:00 - 03:00
                </Typography>

                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      02:00 - 02:20
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      02:20 - 02:40
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      02:40 - 03:00
                    </Button>
                  </Item>
                </Stack>
              </Paper>
            </Grid>

            {/* 03 - 04 */}
            <Grid item xs={4} sm={8} md={4}>
              <Paper variant="outlined" sx={{
                p: 1.5
              }}>
                <Typography variant="body1" display="block" gutterBottom align='center' color={grey[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} /> 03:00 - 04:00
                </Typography>

                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      03:00 - 03:20
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      03:20 - 03:40
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      03:40 - 04:00
                    </Button>
                  </Item>
                </Stack>
              </Paper>
            </Grid>

            {/* 04 - 05 */}
            <Grid item xs={4} sm={8} md={4}>
              <Paper variant="outlined" sx={{
                p: 1.5
              }}>
                <Typography variant="body1" display="block" gutterBottom align='center' color={grey[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} /> 04:00 - 05:00
                </Typography>

                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      04:00 - 04:20
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      04:20 - 04:40
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      04:40 - 05:00
                    </Button>
                  </Item>
                </Stack>
              </Paper>
            </Grid>

            {/* 05 - 06 */}
            <Grid item xs={4} sm={8} md={4}>
              <Paper variant="outlined" sx={{
                p: 1.5
              }}>
                <Typography variant="body1" display="block" gutterBottom align='center' color={grey[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} /> 05:00 - 06:00
                </Typography>

                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
                  <Item>
                    <Button size="small" variant="outlined" disabled fullWidth>
                      05:00 - 05:20
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" disabled fullWidth>
                      <div className="reserved">Already Booked</div>
                      05:20 - 05:40
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      05:40 - 06:00
                    </Button>
                  </Item>
                </Stack>
              </Paper>
            </Grid>

          </Grid>
        </Box>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Box sx={{ flexGrow: 1, mt: 2.5 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

            {/* 06 - 07 */}
            <Grid item xs={4} sm={8} md={4}>
              <Paper variant="outlined" sx={{
                p: 1.5
              }}>
                <Typography variant="body1" display="block" gutterBottom align='center' color={grey[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} /> 06:00 - 07:00
                </Typography>

                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      06:00 - 06:20
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      06:20 - 06:40
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      06:40 - 07:00
                    </Button>
                  </Item>
                </Stack>
              </Paper>
            </Grid>
            {/* 07 - 08 */}
            <Grid item xs={4} sm={8} md={4}>
              <Paper variant="outlined" sx={{
                p: 1.5
              }}>
                <Typography variant="body1" display="block" gutterBottom align='center' color={grey[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} /> 07:00 - 08:00
                </Typography>

                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      07:00 - 07:20
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      07:20 - 07:40
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      07:40 - 08:00
                    </Button>
                  </Item>
                </Stack>
              </Paper>
            </Grid>

            {/* 08 - 09 */}
            <Grid item xs={4} sm={8} md={4}>
              <Paper variant="outlined" sx={{
                p: 1.5
              }}>
                <Typography variant="body1" display="block" gutterBottom align='center' color={grey[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} /> 08:00 - 09:00
                </Typography>

                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      08:00 - 08:20
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      08:20 - 08:40
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      08:40 - 09:00
                    </Button>
                  </Item>
                </Stack>
              </Paper>
            </Grid>

            {/* 09 - 08 */}
            <Grid item xs={4} sm={8} md={4}>
              <Paper variant="outlined" sx={{
                p: 1.5
              }}>
                <Typography variant="body1" display="block" gutterBottom align='center' color={grey[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} /> 09:00 - 10:00
                </Typography>

                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      09:00 - 09:20
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      09:20 - 09:40
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      09:40 - 10:00
                    </Button>
                  </Item>
                </Stack>
              </Paper>
            </Grid>

            {/* 10 - 11 */}
            <Grid item xs={4} sm={8} md={4}>
              <Paper variant="outlined" sx={{
                p: 1.5
              }}>
                <Typography variant="body1" display="block" gutterBottom align='center' color={grey[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} /> 10:00 - 11:00
                </Typography>

                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      10:00 - 10:20
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      10:20 - 10:40
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      10:40 - 11:00
                    </Button>
                  </Item>
                </Stack>
              </Paper>
            </Grid>

            {/* 11 - 12 */}
            <Grid item xs={4} sm={8} md={4}>
              <Paper variant="outlined" sx={{
                p: 1.5
              }}>
                <Typography variant="body1" display="block" gutterBottom align='center' color={grey[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} /> 11:00 - 12:00
                </Typography>

                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      11:00 - 11:20
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      11:20 - 11:40
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      11:40 - 12:00
                    </Button>
                  </Item>
                </Stack>
              </Paper>
            </Grid>

          </Grid>
        </Box>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <Box sx={{ flexGrow: 1, mt: 2.5 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            
            {/* 12 - 13 */}
            <Grid item xs={4} sm={8} md={4}>
              <Paper variant="outlined" sx={{
                p: 1.5
              }}>
                <Typography variant="body1" display="block" gutterBottom align='center' color={grey[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} /> 00:00 - 01:00
                </Typography>

                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      12:00 - 12:20
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      12:20 - 12:40
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      12:40 - 13:00
                    </Button>
                  </Item>
                </Stack>
              </Paper>
            </Grid>

            {/* 13 - 14 */}
            <Grid item xs={4} sm={8} md={4}>
              <Paper variant="outlined" sx={{
                p: 1.5
              }}>
                <Typography variant="body1" display="block" gutterBottom align='center' color={grey[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} /> 13:00 - 14:00
                </Typography>

                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      13:00 - 13:20
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      13:20 - 13:40
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      13:40 - 14:00
                    </Button>
                  </Item>
                </Stack>
              </Paper>
            </Grid>

            {/* 14 - 15 */}
            <Grid item xs={4} sm={8} md={4}>
              <Paper variant="outlined" sx={{
                p: 1.5
              }}>
                <Typography variant="body1" display="block" gutterBottom align='center' color={grey[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} /> 14:00 - 15:00
                </Typography>

                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      14:00 - 14:20
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      14:20 - 14:40
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      14:40 - 15:00
                    </Button>
                  </Item>
                </Stack>
              </Paper>
            </Grid>

            {/* 15 - 16 */}
            <Grid item xs={4} sm={8} md={4}>
              <Paper variant="outlined" sx={{
                p: 1.5
              }}>
                <Typography variant="body1" display="block" gutterBottom align='center' color={grey[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} /> 15:00 - 16:00
                </Typography>

                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      15:00 - 15:20
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      15:20 - 15:40
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      15:40 - 16:00
                    </Button>
                  </Item>
                </Stack>
              </Paper>
            </Grid>

            {/* 16 - 17 */}
            <Grid item xs={4} sm={8} md={4}>
              <Paper variant="outlined" sx={{
                p: 1.5
              }}>
                <Typography variant="body1" display="block" gutterBottom align='center' color={grey[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} /> 16:00 - 17:00
                </Typography>

                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      16:00 - 16:20
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      16:20 - 16:40
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      16:40 - 17:00
                    </Button>
                  </Item>
                </Stack>
              </Paper>
            </Grid>

            {/* 17 - 18 */}
            <Grid item xs={4} sm={8} md={4}>
              <Paper variant="outlined" sx={{
                p: 1.5
              }}>
                <Typography variant="body1" display="block" gutterBottom align='center' color={grey[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} /> 17:00 - 18:00
                </Typography>

                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      17:00 - 17:20
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" disabled fullWidth>
                      17:20 - 17:40
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      17:40 - 18:00
                    </Button>
                  </Item>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <Box sx={{ flexGrow: 1, mt: 2.5 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {/* 18 - 19 */}
            <Grid item xs={4} sm={8} md={4}>
              <Paper variant="outlined" sx={{
                p: 1.5
              }}>
                <Typography variant="body1" display="block" gutterBottom align='center' color={grey[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} /> 18:00 - 19:00
                </Typography>

                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      18:00 - 18:20
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      18:20 - 18:40
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      18:40 - 19:00
                    </Button>
                  </Item>
                </Stack>
              </Paper>
            </Grid>

            {/* 19 - 20 */}
            <Grid item xs={4} sm={8} md={4}>
              <Paper variant="outlined" sx={{
                p: 1.5
              }}>
                <Typography variant="body1" display="block" gutterBottom align='center' color={grey[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} /> 19:00 - 20:00
                </Typography>

                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      19:00 - 19:20
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      19:20 - 19:40
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      19:40 - 20:00
                    </Button>
                  </Item>
                </Stack>
              </Paper>
            </Grid>

            {/* 20 - 21 */}
            <Grid item xs={4} sm={8} md={4}>
              <Paper variant="outlined" sx={{
                p: 1.5
              }}>
                <Typography variant="body1" display="block" gutterBottom align='center' color={grey[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} /> 20:00 - 21:00
                </Typography>

                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      20:00 - 20:20
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      20:20 - 20:40
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      20:40 - 21:00
                    </Button>
                  </Item>
                </Stack>
              </Paper>
            </Grid>

            {/* 21 - 22 */}
            <Grid item xs={4} sm={8} md={4}>
              <Paper variant="outlined" sx={{
                p: 1.5
              }}>
                <Typography variant="body1" display="block" gutterBottom align='center' color={grey[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} /> 21:00 - 22:00
                </Typography>

                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      21:00 - 21:20
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      21:20 - 21:40
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      21:40 - 22:00
                    </Button>
                  </Item>
                </Stack>
              </Paper>
            </Grid>

            {/* 22 - 23 */}
            <Grid item xs={4} sm={8} md={4}>
              <Paper variant="outlined" sx={{
                p: 1.5
              }}>
                <Typography variant="body1" display="block" gutterBottom align='center' color={grey[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} /> 22:00 - 23:00
                </Typography>

                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      22:00 - 22:20
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      22:20 - 22:40
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      22:40 - 23:00
                    </Button>
                  </Item>
                </Stack>
              </Paper>
            </Grid>

            {/* 23 - 24 */}
            <Grid item xs={4} sm={8} md={4}>
              <Paper variant="outlined" sx={{
                p: 1.5
              }}>
                <Typography variant="body1" display="block" gutterBottom align='center' color={grey[900]} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} /> 23:00 - 23:59
                </Typography>

                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      23:00 - 23:20
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" disabled fullWidth>
                      23:20 - 23:40
                    </Button>
                  </Item>
                  <Item>
                    <Button size="small" variant="outlined" fullWidth>
                      23:40 - 23:59
                    </Button>
                  </Item>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </CustomTabPanel>
    </Box>
  );
}

export default Times;