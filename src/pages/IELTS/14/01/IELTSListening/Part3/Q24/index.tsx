// import { useState, useEffect } from "react";
// import { useTranslation } from 'react-i18next';

// // mtu
// import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import BookmarkIcon from '@mui/icons-material/Bookmark';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// // mtu

// // api
// import { useQuery } from "@tanstack/react-query";
// import axiosInstance from '@/services/API'
// // api

// // store
// import { useAppSelector } from '@/store/hooks'
// import { useAppDispatch } from '@/store/hooks'
// import { setCurrentQuestion, setAnswersAll, setFlags } from '@/store/slices/user/userSlice'
// // store

// const index = ({ qn }: any) => {

//   const { t } = useTranslation();
//   const dispatch = useAppDispatch();

//   const flags = useAppSelector((state: any) => state.user.flag)
//   const answersAll = useAppSelector((state: any) => state.user.answersAll)
//   const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

//   const options = [
//     { label: t('00064'), value: "A", },
//     { label: t('00065'), value: "B", },
//     { label: t('00066'), value: "C", },
//   ];

//   const [flag, setFlag] = useState(flags['24'])
//   // answer, setAnswer
//   const [answer, setAnswer] = useState(answersAll['00024']);

//   const postAnswer = useQuery({
//     enabled: false,
//     queryKey: ['postAnswer24'],
//     queryFn: async () => {
//       const response = await axiosInstance.post(`exam/answer/${localStorage.getItem('test_id')}`, {
//         "test_done": false,
//         "answers": {
//           "00024": localStorage.getItem('00024')
//         }
//       })
//       const data = await response.data
//       getAnswer.refetch()
//       return data
//     },
//   })

//   const getAnswer = useQuery({
//     queryKey: ['getAnswer24'],
//     queryFn: async () => {
//       const response = await axiosInstance.get(`exam/answer/${localStorage.getItem('test_id')}`)
//       const data = await response.data.answers
//       dispatch(setAnswersAll(data))
//       return data
//     },
//   })

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setAnswer((event.target as HTMLInputElement).value);
//     localStorage.setItem('00024', event.target.value);
//     postAnswer.refetch()
//     dispatch(setAnswersAll(Object.assign({}, answersAll, { '00024': ((event.target as HTMLInputElement).value) })))
//     getAnswer.refetch()
//   };

//   const flagHandler = () => {
//     setFlag(!flag)
//     dispatch(setFlags(Object.assign({}, flags, { '24': !flag })))
//   }

//   useEffect(() => {
//     getAnswer.refetch()
//   }, []);

//   return (
//     <Stack
//       spacing={{ xs: 1, sm: 2 }}
//       direction="column"
//       useFlexGap
//       flexWrap="wrap"
//       sx={{ py: 1 }}
//       id={`q-${qn}`}
//     >
//       <div className="align-items-start justify-content-space-between">
//         <Paper elevation={0}>
//           <Typography>
//             <strong className={`question-now ${currentQuestion == qn && 'active'} `}> {qn} </strong>
//             <Typography sx={{ px: 1 }}> {t('00063')} </Typography>
//           </Typography>
//         </Paper>
//         <div onClick={() => flagHandler()} className={`flag ${currentQuestion == qn && 'active'}`}>
//           {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
//         </div>
//       </div>
//       <Paper elevation={0}>
//         <Stack direction="row" alignItems="center" className="ielts-checkbox">
//           <FormControl>
//             <RadioGroup
//               value={answer}
//               onChange={handleChange}
//             >
//               {options.map((i) => {
//                 return (
//                   <FormControlLabel
//                     value={i.value}
//                     control={<Radio />}
//                     label={i.label}
//                     onClick={() => dispatch(setCurrentQuestion(24))}
//                   />
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


import { useState } from "react";
import { useTranslation } from 'react-i18next';

// mtu
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// mtu

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion, setAnswersAll, setFlags } from '@/store/slices/user/userSlice'
// store

const index = ({ qn }: any) => {

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const flags = useAppSelector((state: any) => state.user.flag)
  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

  const options = [
    { label: t('00064'), value: "a", },
    { label: t('00065'), value: "b", },
    { label: t('00066'), value: "c", },
  ];

  const [flag, setFlag] = useState(flags['24'])
  // answer, setAnswer
  const [answer, setAnswer] = useState(answersAll['00024']);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer((event.target as HTMLInputElement).value);
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '00024': ((event.target as HTMLInputElement).value) })))
  };

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '24': !flag })))
  }

  return (
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="column"
      useFlexGap
      flexWrap="wrap"
      sx={{ py: 1 }}
      id={`q-${qn}`}
      className="radio-select"
    >
      <div className="align-items-start justify-content-space-between type-radio">
        <Paper elevation={0}>
        <Typography>
            <strong className={`question-now ${currentQuestion == qn && 'active'} `}> {qn} </strong>
            <Typography sx={{ px: 1 }} className="question"> {t('00063')} </Typography>
          </Typography>
        </Paper>
        <div onClick={() => flagHandler()} className={`flag ${currentQuestion == qn && 'active'}`}>
          {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
        </div>
      </div>
      <Paper elevation={0}>
        <Stack direction="row" alignItems="center" className="ielts-checkbox">
          <FormControl>
            <RadioGroup
              value={answer}
              onChange={handleChange}
            >
              {options.map((i) => {
                return (
                  <FormControlLabel
                    value={i.value}
                    control={<Radio />}
                    label={i.label}
                    onClick={() => dispatch(setCurrentQuestion(24))}
                  />
                )
              })}
            </RadioGroup>
          </FormControl>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default index;