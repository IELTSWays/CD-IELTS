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
      <Box sx={{ px: 1 }} id={`q-${qn}`}
      >
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
          <Paper elevation={0}>
            <Typography><strong>Tidal energy</strong></Typography>
          </Paper>
        </Stack>
      </Box>
      <Box sx={{ px: 1 }}>
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center">
              <Typography sx={{ pr: 1 }}>
                Tides are more
              </Typography>
              <div className={`text-field ${currentQuestion == qn && 'active'}`}>
                <TextField
                  margin="normal"
                  placeholder={qn}
                  onClick={() => dispatch(setCurrentQuestion(qn))}
                />
              </div>
              <Typography sx={{ pl: 1 }}>
                than waves
              </Typography>
            </Stack>
          </Paper>
        </Stack>
      </Box>
    </>
  );
};

export default index;
