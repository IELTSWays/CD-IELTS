import React from 'react';
import { useState } from 'react';

// mtu
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
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
// mtu

import listTimes from '@/pages/Speaking/times.json'

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

const Times = ({ onClick, selected }) => {
  const [value, setValue] = useState(0);

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
    listTimes.data.map((i: any) => {
      return (
        <Grid sx={{ py: 3, px: 2 }} container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4} sm={8} md={12}>
            <Card variant="outlined" sx={{ py: 3, px: 2 }}>
              <Grid sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Avatar alt={i.teacher.name} src="/static/images/avatar/1.jpg" />
                <Typography display="block" sx={{ px: 1, minWidth: '200px' }}> {i.teacher.name} </Typography>
              </Grid>

              <Box sx={{ width: '100%' }} id="teacher-times">
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleChange} centered sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Tab label="00:00 - 06:00" {...a11yProps(0)} />
                    <Tab label="06:00 - 12:00" {...a11yProps(1)} />
                    <Tab label="12:00 - 18:00" {...a11yProps(2)} />
                    <Tab label="18:00 - 23:59" {...a11yProps(3)} />
                  </Tabs>
                  <Tabs value={value} onChange={handleChange} centered sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <Tab label="00-06" {...a11yProps(0)} sx={{ minWidth: '25%' }} />
                    <Tab label="06-12" {...a11yProps(1)} sx={{ minWidth: '25%' }} />
                    <Tab label="12-18" {...a11yProps(2)} sx={{ minWidth: '25%' }} />
                    <Tab label="18-24" {...a11yProps(3)} sx={{ minWidth: '25%' }} />
                  </Tabs>
                </Box>

                {/* 00:00 - 06:00 */}
                <CustomTabPanel value={value} index={0}>
                  <Box sx={{ flexGrow: 1, mt: 2.5, }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} id="container-times">
                      {/* 00 - 01 */}
                      {(i.times.slice(0, 6)).map((j: any) => {
                        return (
                          <Grid item xs={4} sm={8} md={4}>
                            <Paper
                              variant="outlined"
                              sx={{
                                p: 1.5,
                              }}>

                              <Typography
                                variant="body1"
                                display="block"
                                gutterBottom
                                align='center'
                                color={grey[900]}
                                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                              >
                                <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} />
                                {j.start} - {j.end}
                              </Typography>

                              {j.sections.map((k: any) => {
                                return (
                                  <Stack
                                    spacing={{ xs: 1, sm: 2 }}
                                    direction="row"
                                    useFlexGap
                                    flexWrap="wrap"
                                    sx={{ mt: 2}}
                                  >
                                    <Item className={k.state == 'booked' && 'reserved-container'}>
                                      <Button
                                        size="small"
                                        variant="outlined"
                                        fullWidth
                                        disabled={k.state == ('unselectable' || 'booked')}
                                        value={k.id}
                                        variant={selected == k.id ? 'contained' : 'outlined'}
                                        onClick={onClick}

                                      >
                                        {k.state == 'booked' &&
                                          <div className="reserved">Already Booked</div>
                                        }
                                        {k.label}
                                      </Button>
                                    </Item>
                                  </Stack>
                                )
                              })}
                            </Paper>
                          </Grid>
                        )
                      })}
                    </Grid>
                  </Box>
                </CustomTabPanel>

                {/* 06:00 - 12:00 */}
                <CustomTabPanel value={value} index={1}>
                  <Box sx={{ flexGrow: 1, mt: 2.5 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} id="container-times">
                      {i.times.slice(6, 12).map((j: any) => {
                        return (
                          <Grid item xs={4} sm={8} md={4}>
                            <Paper
                              variant="outlined"
                              sx={{
                                p: 1.5
                              }}>

                              <Typography
                                variant="body1"
                                display="block"
                                gutterBottom
                                align='center'
                                color={grey[900]}
                                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                              >
                                <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} />
                                {j.start} - {j.end}
                              </Typography>

                              {j.sections.map((k: any) => {
                                return (
                                  <Stack
                                    spacing={{ xs: 1, sm: 2 }}
                                    direction="row"
                                    useFlexGap
                                    flexWrap="wrap"
                                    sx={{ mt: 2 }}
                                  >
                                    <Item className={k.state == 'booked' && 'reserved-container'}>
                                      <Button
                                        size="small"
                                        variant="outlined"
                                        fullWidth
                                        disabled={k.state == ('unselectable' || 'booked')}
                                        value={k.id}
                                        variant={selected == k.id ? 'contained' : 'outlined'}
                                        onClick={onClick}

                                      >
                                        {k.state == 'booked' &&
                                          <div className="reserved">Already Booked</div>
                                        }
                                        {k.label}
                                      </Button>
                                    </Item>
                                  </Stack>
                                )
                              })}
                            </Paper>
                          </Grid>
                        )
                      })}
                    </Grid>
                  </Box>
                </CustomTabPanel>

                {/* 12:00 - 18:00 */}
                <CustomTabPanel value={value} index={2}>
                  <Box sx={{ flexGrow: 1, mt: 2.5 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} id="container-times">
                      {i.times.slice(12, 18).map((j: any) => {
                        return (
                          <Grid item xs={4} sm={8} md={4}>
                            <Paper
                              variant="outlined"
                              sx={{
                                p: 1.5
                              }}>

                              <Typography
                                variant="body1"
                                display="block"
                                gutterBottom
                                align='center'
                                color={grey[900]}
                                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                              >
                                <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} />
                                {j.start} - {j.end}
                              </Typography>

                              {j.sections.map((k) => {
                                return (
                                  <Stack
                                    spacing={{ xs: 1, sm: 2 }}
                                    direction="row"
                                    useFlexGap
                                    flexWrap="wrap"
                                    sx={{ mt: 2 }}
                                  >
                                    <Item className={k.state == 'booked' && 'reserved-container'}>
                                      <Button
                                        size="small"
                                        variant="outlined"
                                        fullWidth
                                        disabled={k.state == ('unselectable' || 'booked')}
                                        value={k.id}
                                        variant={selected == k.id ? 'contained' : 'outlined'}
                                        onClick={onClick}

                                      >
                                        {k.state == 'booked' &&
                                          <div className="reserved">Already Booked</div>
                                        }
                                        {k.label}
                                      </Button>
                                    </Item>
                                  </Stack>
                                )
                              })}
                            </Paper>
                          </Grid>
                        )
                      })}
                    </Grid>
                  </Box>
                </CustomTabPanel>

                {/* 18:00 - 24:00 */}
                <CustomTabPanel value={value} index={3}>
                  <Box sx={{ flexGrow: 1, mt: 2.5 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} id="container-times">
                      {i.times.slice(18, 24).map((j: any) => {
                        return (
                          <Grid item xs={4} sm={8} md={4}>
                            <Paper
                              variant="outlined"
                              sx={{
                                p: 1.5
                              }}>

                              <Typography
                                variant="body1"
                                display="block"
                                gutterBottom
                                align='center'
                                color={grey[900]}
                                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                              >
                                <AccessTimeIcon fontSize="small" color="action" sx={{ mx: 0.5 }} />
                                {j.start} - {j.end}
                              </Typography>

                              {j.sections.map((k) => {
                                return (
                                  <Stack
                                    spacing={{ xs: 1, sm: 2 }}
                                    direction="row"
                                    useFlexGap
                                    flexWrap="wrap"
                                    sx={{ mt: 2 }}
                                  >
                                    <Item className={k.state == 'booked' && 'reserved-container'}>
                                      <Button
                                        size="small"
                                        variant="outlined"
                                        fullWidth
                                        disabled={k.state == ('unselectable' || 'booked')}
                                        value={k.id}
                                        variant={selected == k.id ? 'contained' : 'outlined'}
                                        onClick={onClick}

                                      >
                                        {k.state == 'booked' &&
                                          <div className="reserved">Already Booked</div>
                                        }
                                        {k.label}
                                      </Button>
                                    </Item>
                                  </Stack>
                                )
                              })}
                            </Paper>
                          </Grid>
                        )
                      })}
                    </Grid>
                  </Box>
                </CustomTabPanel>
              </Box>
              
            </Card>
          </Grid>
        </Grid>

      )
    })
  )

}

export default Times;