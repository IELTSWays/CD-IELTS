// mtu
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// mtu

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion } from '@/store/slices/user/userSlice'
// store

const index = ({ qn }: any) => {

  const dispatch = useAppDispatch()
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

  return (
    <>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        sx={{ alignItems: 'center', py: 1 }}
        id={`q-${qn}`}
      >
        <Paper elevation={0}>
          <Stack direction="row" alignItems="center">
            <Typography sx={{ pr: 1 }}>
              More energy required because of growth in population and
            </Typography>
            <div className={`text-field ${currentQuestion == qn && 'active'}`}>
              <TextField
                margin="normal"
                placeholder={qn}
                onClick={() => dispatch(setCurrentQuestion(qn))}
              />
            </div>
          </Stack>
        </Paper>
      </Stack>
      <Box sx={{ px: 1 }}>
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center">
              <Typography sx={{ pr: 1 }}>
                What’s needed:
              </Typography>
            </Stack>
          </Paper>
        </Stack>
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', }}>
          <Paper elevation={0} sx={{ width: '15px' }}>
            <Typography>●</Typography>
          </Paper>
          <Paper elevation={0}>
            <Paper elevation={0}>
              <Typography>renewable energy sources</Typography>
            </Paper>
          </Paper>
        </Stack>
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', }}>
          <Paper elevation={0} sx={{ width: '15px' }}>
            <Typography>●</Typography>
          </Paper>
          <Paper elevation={0}>
            <Paper elevation={0}>
              <Typography>methods that won’t create pollution</Typography>
            </Paper>
          </Paper>
        </Stack>
      </Box>
    </>
  );
};

export default index;
