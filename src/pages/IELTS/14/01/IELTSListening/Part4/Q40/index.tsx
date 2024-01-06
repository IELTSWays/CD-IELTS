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
      <section>
        <Box
          sx={{ px: 1 }}
          id={`q-${qn}`}
        >
          <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
            <Paper elevation={0}>
              <Typography>Problem:</Typography>
            </Paper>
          </Stack>
        </Box>

        <Box sx={{ px: 1 }}>
          <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', }}>
            <Paper elevation={0} sx={{ width: '15px' }}>
              <Typography>●</Typography>
            </Paper>
            <Paper elevation={0}>
              <Stack direction="row" alignItems="center">
                <Typography sx={{ pr: 1 }}>
                  may ham fish and birds, e.g. by affecting
                </Typography>
                <div className={`text-field ${currentQuestion === qn && 'active'}`}>
                  <TextField
                    margin="normal"
                    placeholder={qn}
                    onClick={() => dispatch(setCurrentQuestion(qn))}
                  />
                </div>
                <Typography sx={{ pl: 1 }}>
                  and building up silt
                </Typography>
              </Stack>
            </Paper>
          </Stack>
        </Box>
      </section>

      <section>
        <Box sx={{ px: 1 }}>
          <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
            <Paper elevation={0}>
              <Typography>Ocean thermal energy conversion:</Typography>
            </Paper>
          </Stack>
        </Box>

        <Box sx={{ px: 1 }}>
          <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', }}>
            <Paper elevation={0}>
              <Stack direction="row" alignItems="center">
                <Typography sx={{ pr: 1 }}>
                  Uses a difference in temperature between the surface and lower levels                          </Typography>
              </Stack>
            </Paper>
          </Stack>
          <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', }}>
            <Paper elevation={0}>
              <Stack direction="row" alignItems="center">
                <Typography sx={{ pr: 1 }}>
                  Water brought to the surface in a pipe
                </Typography>
              </Stack>
            </Paper>
          </Stack>
        </Box>
      </section>
    </>
  );
};

export default index;
