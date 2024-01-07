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
      <Typography sx={{ pr: 1, py: 1 }} id={`q-${qn}`}>
        and the
      </Typography>
      <div className={`text-field ${currentQuestion == qn && 'active'}`}>
        <TextField
          margin="normal"
          placeholder={qn}
          onClick={() => dispatch(setCurrentQuestion(qn))}
        />
      </div>

      <Typography sx={{ pr: 1, py: 1 }}>
        Of the staff. A balance was required between a degree of freedom and maintaining work standards.
      </Typography>
    </>
  );
};

export default index;
