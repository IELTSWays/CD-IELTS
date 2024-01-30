import { useState, forwardRef } from 'react'
// mtu
import Badge from '@mui/material/Badge';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { red } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import HistoryIcon from '@mui/icons-material/History';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HeadphonesIcon from '@mui/icons-material/Headphones';
// mtu
import { DocReading, DocListening, DocWriting, DocSpeaking } from '@/components/SkillsGuide/Document'

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const SkillsGuide = () => {

  const [open, setOpen] = useState(false);
  const [skill, setSkill] = useState<any>('');

  const handleClickOpen = (e: any) => {
    setSkill(e.target.value);

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="about-skill"
        >
          <DialogTitle sx={{ color: red[700] }}>{skill}</DialogTitle>
          <DialogContent>
            <DialogContentText id="about-skill">
              {skill === 'Reading' && <DocReading />}
              {skill === 'Listening' && <DocListening />}
              {skill === 'Writing' && <DocWriting />}
              {skill === 'Speaking' && <DocSpeaking />}
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ mb: 1 }}>
            {skill === 'Speaking' &&
              <Button variant="contained" onClick={handleClose}>go to speaking</Button>
            }
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}>

          {/* Listening */}
          <Grid item xs={4} sm={8} md={4} lg={3}>
            <Card variant="outlined">
              <CardHeader
                sx={{ flexWrap: 'wrap' }}
                avatar={
                  <Avatar sx={{ bgcolor: red[700] }}>
                    <HeadphonesIcon />
                  </Avatar>
                }
                action={
                  <Chip label="9,000,000, IRR" sx={{ mt: 1.5, gap: 1 }} />
                }
                titleTypographyProps={{ variant: 'h6' }}
                title="Listening"
              />
              <CardContent sx={{ py: 0 }}>
                <Typography variant="body2">
                  <ul id="list-red-bullet">
                    <li>
                      <strong>The IELTS Listening test</strong> has 4 parts with 40 questions.
                    </li>
                    <li>
                      It consists of 4 recordings of native English speakers.
                    </li>
                    <li>
                      The recordings are a mix of monologues and dialogues from different contexts, such as social, educational, or academic.
                    </li>
                  </ul>
                </Typography>

              </CardContent>
              <CardActions sx={{ pl: 2, pb: 2 }}>
                <Button value="Listening" size="small" variant="outlined" endIcon={<ChevronRightIcon />} onClick={(e) => handleClickOpen(e)}>Read More</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Reading */}
          <Grid item xs={4} sm={8} md={4} lg={3}>
            <Card variant="outlined">
              <CardHeader
                sx={{ flexWrap: 'wrap' }}
                avatar={
                  <Avatar sx={{ bgcolor: red[700] }}>
                    <LibraryBooksIcon />
                  </Avatar>
                }
                action={
                  <Chip label="8,000,000, IRR" sx={{ mt: 1.5, gap: 1 }} />
                }
                titleTypographyProps={{ variant: 'h6' }}
                title="Reading"
              />
              <CardContent sx={{ py: 0 }}>
                <Typography variant="body2">
                  <ul id="list-red-bullet">
                    <li>
                      <strong>The IELTS Reading test</strong> has 3 parts.
                    </li>
                    <li>
                      Each part has 13-14 questions.
                    </li>
                    <li>
                      The question types vary depending on the text and the test version
                    </li>
                    <li>
                      The test is either Academic or General Training version.
                    </li>
                  </ul>
                </Typography>
              </CardContent>
              <CardActions sx={{ pl: 2, pb: 2 }}>
                <Button value="Reading" size="small" variant="outlined" endIcon={<ChevronRightIcon />} onClick={(e) => handleClickOpen(e)}>Read More</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Writing */}
          <Grid item xs={4} sm={8} md={4} lg={3}>
            <Card variant="outlined">
              <CardHeader
                sx={{ flexWrap: 'wrap' }}
                avatar={
                  <Avatar sx={{ bgcolor: red[700] }}>
                    <BorderColorIcon />
                  </Avatar>
                }
                action={
                  <Chip label="9,000,000, IRR" sx={{ mt: 1.5, gap: 1 }} />
                }
                titleTypographyProps={{ variant: 'h6' }}
                title="Writing"
              />
              <CardContent sx={{ py: 0 }}>
                <Typography variant="body2">
                  <ul id="list-red-bullet">
                    <li>
                      <strong>The IELTS Writing test</strong> has two versions: Academic and General Training, and each version has two tasks that you need to complete in one hour.
                    </li>
                    <li>
                      <strong>The Academic Writing</strong> test tasks are based on topics of general interest and common to undergraduate or postgraduate level of education.
                    </li>
                  </ul>
                </Typography>
              </CardContent>
              <CardActions sx={{ pl: 2, pb: 2 }}>
                <Button value="Writing" size="small" variant="outlined" endIcon={<ChevronRightIcon />} onClick={(e) => handleClickOpen(e)}>Read More</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Speaking */}
          <Grid item xs={4} sm={8} md={4} lg={3}>
            <Card variant="outlined">
              <CardHeader
                sx={{ flexWrap: 'wrap' }}
                avatar={
                  <Avatar sx={{ bgcolor: red[700] }}>
                    <KeyboardVoiceIcon />
                  </Avatar>
                }
                action={
                  <Chip
                    label="Speaking"
                    component="a"
                    href="#"
                    color="primary"
                    clickable
                    sx={{ mt: 1.5, gap: 1 }}
                  />
                }
                titleTypographyProps={{ variant: 'h6' }}
                title="Speaking"
              />

              <CardContent sx={{ py: 0 }}>
                <Typography variant="body2">
                  <ul id="list-red-bullet">
                    <li>
                      <strong>The IELTS Speaking test</strong> is the same for both the Academic and General Training versions of the IELTS exam.
                    </li>
                    <li>
                      The test has three parts and lasts for 11 to 14 minutes
                    </li>
                  </ul>
                </Typography>
              </CardContent>
              <CardActions sx={{ pl: 2, pb: 2 }}>
                <Button value="Speaking" size="small" variant="outlined" endIcon={<ChevronRightIcon />} onClick={(e) => handleClickOpen(e)}>Read More</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* History */}
          {/* <Grid item xs={4} sm={8} md={4} lg={4}>
            <Card variant="outlined" sx={{ cursor: 'pointer' }}>
              <CardHeader
                sx={{ flexWrap: 'wrap' }}
                avatar={
                  <Badge color="success" badgeContent={2} anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}>
                    <Avatar sx={{ bgcolor: red[700] }}>
                      <LooksOneIcon />
                    </Avatar>
                  </Badge>
                }
                action={
                  <Chip
                    label="Past tests"
                    icon={<HistoryIcon />}
                    component="a"
                    href="#"
                    color="success"
                    clickable
                    sx={{ mt: 1.5, gap: 1 }}
                  />
                }
                titleTypographyProps={{ variant: 'h6' }}
                title="History"
              />

              <CardContent sx={{ pt: 0 }}>
                <Typography variant="body2">
                  <ul id="list-red-bullet">
                    <li>
                      This icon shows the number of times that you have take the test.
                    </li>
                    <li>
                      You can participate in the same test several times
                    </li>
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid> */}
        </Grid>
      </Box>
    </>
  )
};

export default SkillsGuide;