// import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';

// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Typography from '@mui/material/Typography';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// // store
// import { useAppSelector } from '@/store/hooks'
// import { useAppDispatch } from '@/store/hooks'
// import { setCurrentQuestion } from '@/store/slices/user/userSlice'
// // store

// const questions = [
//   { id: 14, title: 'a description of how people misused a bike-sharing scheme' },
//   { id: 15, title: 'an explanation of why a proposed bike-sharing scheme was turned down' },
//   { id: 16, title: 'a reference to a person being unable to profit their work' },
//   { id: 17, title: 'an explanation of the potential savings a bike-sharing scheme would bring' },
//   { id: 18, title: 'a reference to the problems a bike-sharing scheme was intended to solve' }
// ]

// const index = () => {

//   const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

//   return (
//     <Card variant="outlined">
//       <CardContent sx={{ p: 3 }}>
//         <div className='ielts-answersTable'>

//           <Stack
//             direction="row"
//             spacing={2}
//             id="ielts-answersTable-first"
//           >
//             <Paper>{" "}</Paper>
//             <RadioGroup
//               row
//             >
//               <FormControlLabel control={<Radio />} label="A" />
//               <FormControlLabel control={<Radio />} label="B" />
//               <FormControlLabel control={<Radio />} label="C" />
//               <FormControlLabel control={<Radio />} label="D" />
//               <FormControlLabel control={<Radio />} label="E" />
//               <FormControlLabel control={<Radio />} label="F" />
//               <FormControlLabel control={<Radio />} label="G" />
//             </RadioGroup>
//           </Stack>

//           {questions.map((i) => {
//             return (
//               <Stack
//                 direction="row"
//                 spacing={2}
//                 id={`q-${i.id}`}
//               >
//                 <Paper>
//                   <strong className={`question-now ${currentQuestion == i.id && 'active'} `}> {i.id} </strong>
//                   <Typography sx={{ px: 1 }}> {i.title} </Typography>
//                 </Paper>
//                 <RadioGroup
//                   row
//                 >
//                   <FormControlLabel value="A" control={<Radio />} label={undefined} />
//                   <FormControlLabel value="B" control={<Radio />} label={undefined} />
//                   <FormControlLabel value="C" control={<Radio />} label={undefined} />
//                   <FormControlLabel value="D" control={<Radio />} label={undefined} />
//                   <FormControlLabel value="E" control={<Radio />} label={undefined} />
//                   <FormControlLabel value="F" control={<Radio />} label={undefined} />
//                   <FormControlLabel value="G" control={<Radio />} label={undefined} />
//                 </RadioGroup>
//               </Stack>
//             )
//           })}
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default index;
