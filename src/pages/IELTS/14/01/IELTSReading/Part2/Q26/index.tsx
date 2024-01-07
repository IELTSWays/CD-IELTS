// import { useState } from "react";
// import { useTranslation } from 'react-i18next';

// // mtu
// import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// // mtu

// // store
// import { useAppSelector } from '@/store/hooks'
// import { useAppDispatch } from '@/store/hooks'
// import { setCurrentQuestion } from '@/store/slices/user/userSlice'
// // store

// const index = ({ qn }: any) => {

//   const { t } = useTranslation();
//   const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

//   const options = [
//     { text: t('00064'), value: "P01", selected: false },
//     { text: t('00065'), value: "P02", selected: false },
//     { text: t('00066'), value: "P03", selected: false },
//   ];

//   const [value, setValue] = useState('female');

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setValue((event.target as HTMLInputElement).value);
//   };

//   return (
//     <Stack
//       spacing={{ xs: 1, sm: 2 }}
//       direction="column"
//       useFlexGap
//       flexWrap="wrap"
//       sx={{ py: 1 }}
//       id={`q-${qn}`}
//     >
//       <Paper elevation={0}>
//         <Typography>
//           <strong className={`question-now ${currentQuestion == qn && 'active'} `}> {qn} </strong>
//           <Typography sx={{ px: 1 }}> {t('00063')} </Typography>
//         </Typography>
//       </Paper>
//       <Paper elevation={0}>
//         <Stack direction="row" alignItems="center">
//           <FormControl>
//             <RadioGroup
//               value={value}
//               onChange={handleChange}
//             >
//               {options.map((i) => {
//                 return (
//                   <FormControlLabel value={i.value} control={<Radio />} label={i.text} />
//                 )
//               })}
//             </RadioGroup>
//           </FormControl>
//         </Stack>
//       </Paper>
//     </Stack>
//   );
// };

// export default index;


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
      <Paper elevation={0}>
        <Stack direction="row" alignItems="center" sx={{ flexWrap: 'wrap' }}>
          <Typography sx={{ pr: 1, py: 1 }}>
            However, the scheme was not a great success: almost as quickly as Provo left the bikes around the city, the
          </Typography>
          <div className={`text-field ${currentQuestion == qn && 'active'}`}>
            <TextField
              margin="normal"
              placeholder={qn}
              onClick={() => dispatch(setCurrentQuestion(qn))}
            />
          </div>
          <Typography sx={{ pl: 1, py: 1 }}>
            Took them away. According to Schimmelpennink, the scheme was intended to be symbolic. The idea was to get people thinking about the issues.
          </Typography>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default index;
