// mtu
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
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="row"
      useFlexGap
      flexWrap="wrap"
      sx={{ alignItems: 'center', py: 1 }}
      id={`q-${qn}`}
    >
      <Paper elevation={0} sx={{ width: '15px' }}>
        <Typography>●</Typography>
      </Paper>
      <Paper elevation={0}>
        <Stack direction="row" alignItems="center">
          <Typography sx={{ pr: 1 }}>
            it is difficult to find
          </Typography>
          <div className={`text-field ${currentQuestion == qn && 'active'}`}>
            <TextField
              margin="normal"
              placeholder={qn}
              onClick={() => dispatch(setCurrentQuestion(qn))}
            />
          </div>
          <Typography sx={{ pl: 1 }}>
            to support new policies
          </Typography>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default index;