// mtu
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
// mtu
import DocAccordion from '@/components/SkillsGuide/DocAccordion';
import iconAI from '@/assets/images/artificial-intelligence.gif'
import iconHuman from '@/assets/images/vlogger.gif'

const Guide = () => {

  return (
    <>
      <Grid sx={{ py: 3 }} container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} id="flowchart">
        {/* Listening */}
        <Grid item xs={4} sm={4} md={6} lg={3}>
          <Card variant="outlined">
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[700] }}>
                  <HeadphonesIcon />
                </Avatar>
              }
              titleTypographyProps={{ variant: 'h6' }}
              title="Listening"
            />
            <CardContent>
              <div className="tree">
                <ul>
                  <li>
                    <a>Analyze</a>
                    <ul>
                      <li>
                        <a>Test Report</a>
                        <ul>
                          <li>
                            <a>Take the Test</a>
                            <ul>
                              <li>
                                <a>Select a Book</a>
                                <ul>
                                  <li>
                                    <a>Listening</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <Button variant={"outlined"} fullWidth color="error" sx={{ marginTop: '65px' }}>
                Listening
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Reading */}
        <Grid item xs={4} sm={4} md={6} lg={3}>
          <Card variant="outlined">
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[700] }}>
                  <LibraryBooksIcon />
                </Avatar>
              }
              titleTypographyProps={{ variant: 'h6' }}
              title="Reading"
            />
            <CardContent>
              <div className="tree">
                <ul>
                  <li>
                    <a>Analyze</a>
                    <ul>
                      <li>
                        <a>Test Report</a>
                        <ul>
                          <li>
                            <a>Take the Test</a>
                            <ul>
                              <li>
                                <a>Select a Book</a>
                                <ul>
                                  <li>
                                    <a>Reading</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <Button variant={"outlined"} fullWidth color="error" sx={{ marginTop: '65px' }}>
                Reading
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Writing */}
        <Grid item xs={4} sm={4} md={6} lg={3}>
          <Card variant="outlined">
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[700] }}>
                  <BorderColorIcon />
                </Avatar>
              }
              titleTypographyProps={{ variant: 'h6' }}
              title="Writing"
            />
            <CardContent>
              <div className="tree">
                <ul>
                  <li>
                    <a>Analyze</a>
                    <ul>
                      <li>
                        <ul>
                          <li>
                            <a style={{
                              minWidth: 'unset',
                              padding: '0em',
                              height: '42px',
                              width: '94px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <img src={iconHuman} alt='AL' width={27} />
                              <span style={{ paddingTop: '4px', paddingLeft: '4px' }}>
                                Human
                              </span>
                            </a>
                          </li>
                          <li>
                            <a style={{
                              minWidth: 'unset',
                              padding: '0em',
                              height: '42px',
                              width: '60px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <img src={iconAI} alt='AL' width={27} />
                              <span style={{ paddingTop: '4px', paddingLeft: '4px' }}>
                                AI
                              </span>
                            </a>
                          </li>
                        </ul>
                        <a>Select a Marker</a>
                        <ul>
                          <li>
                            <a>Compose Your Task</a>
                            <ul>
                              <li>
                                <a>Select a Book</a>
                                <ul>
                                  <li>
                                    <a>Writing</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <Button variant={"outlined"} fullWidth color="error" sx={{ marginTop: '65px' }}>
                Writing
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Speaking */}
        <Grid item xs={4} sm={4} md={6} lg={3}>
          <Card variant="outlined">
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[700] }}>
                  <KeyboardVoiceIcon />
                </Avatar>
              }
              titleTypographyProps={{ variant: 'h6' }}
              title="Speaking"
            />
            <CardContent>
              <div className="tree" style={{ position: 'relative', top: '-32px' }}>
                <ul>
                  <li>
                    <a>Analyze</a>
                    <ul>
                      <li>
                        <ul>
                          <li>
                            <a>Talk on Skype</a>
                            <ul>
                              <li>
                                <a>Select a time <br /> and a teacher</a>
                                <ul>
                                  <li>
                                    <a>View available <br /> Teacher Times</a>
                                    <ul>
                                      <li>
                                        <a>Select a Date</a>
                                        <ul>
                                          <li>
                                            <a>Speaking</a>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <Button variant={"outlined"} fullWidth color="error">
                Speaking
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid sx={{ py: 3 }} container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
        <Grid item xs={4} sm={8} md={12} lg={12}>
          <DocAccordion />
        </Grid>
      </Grid>
    </>
  );
};

export default Guide;