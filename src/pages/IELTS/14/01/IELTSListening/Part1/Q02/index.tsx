import { useTranslation } from 'react-i18next';
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

  const { t } = useTranslation();
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
        <Paper elevation={0} sx={{ width: '200px' }}>
          <Typography>{t('00002')}</Typography>
        </Paper>
        <Paper elevation={0}>
          <Paper elevation={0}>
            <Typography>{t('00003')}</Typography>
          </Paper>
        </Paper>
      </Stack>

      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
        <Paper elevation={0} sx={{ width: '200px' }}>
          <Typography>{t('00004')}</Typography>
        </Paper>
        <Paper elevation={0}>
          <Paper elevation={0}>
            <Typography>{t('00005')}</Typography>
          </Paper>
        </Paper>
      </Stack>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
        <Paper elevation={0} sx={{ width: '200px' }}>
          <Typography>{t('00006')}</Typography>
        </Paper>
        <Paper elevation={0}>
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center">
              <Typography sx={{ pr: 1 }}> {t('00007')} </Typography>
              <Typography sx={{ pr: 1 }}> (‍{t('00008')} </Typography>
              <div className={`text-field ${currentQuestion == qn && 'active'}`}>
                <TextField
                  margin="normal"
                  placeholder={qn}
                  onClick={() => dispatch(setCurrentQuestion(qn))}
                />
              </div>
            </Stack>
          </Paper>
        </Paper>
      </Stack>
    </>
  );
};

export default index;
