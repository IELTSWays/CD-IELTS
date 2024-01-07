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
            <Typography>
              Planned tidal lagoon in Wales:
            </Typography>
          </Stack>
        </Paper>
      </Stack>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', }}>
        <Paper elevation={0} sx={{ width: '15px' }}>
          <Typography>●</Typography>
        </Paper>
        <Paper elevation={0}>
          <Stack direction="row" alignItems="center">
            <Typography sx={{ pr: 1 }}>
              will be created in a
            </Typography>
            <div className={`text-field ${currentQuestion == qn && 'active'}`}>
              <TextField
                margin="normal"
                placeholder={qn}
                onClick={() => dispatch(setCurrentQuestion(qn))}
              />
            </div>
            <Typography sx={{ pl: 1 }}>
              at Swansea
            </Typography>
          </Stack>
        </Paper>
      </Stack>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', mt: 1 }}>
        <Paper elevation={0} sx={{ width: '15px' }}>
          <Typography>●</Typography>
        </Paper>
        <Paper elevation={0}>
          <Stack direction="row" alignItems="center">
            <Typography sx={{ pr: 1 }}>
              breakwater (dam) containing 16 turbines
            </Typography>
          </Stack>
        </Paper>
      </Stack>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', mt: 1 }}>
        <Paper elevation={0} sx={{ width: '15px' }}>
          <Typography>●</Typography>
        </Paper>
        <Paper elevation={0}>
          <Stack direction="row" alignItems="center">
            <Typography sx={{ pr: 1 }}>
              rising tide forces water through turbines, generating electricity
            </Typography>
          </Stack>
        </Paper>
      </Stack>
    </>
  );
};

export default index;