// import { useState } from "react";

// // mtu
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
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

//   const dispatch = useAppDispatch()

//   const flags = useAppSelector((state: any) => state.user.flag)
//   const answersAll = useAppSelector((state: any) => state.user.answersAll)
//   const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

//   const [flag, setFlag] = useState(flags['40'])
//   const [answer, setAnswer] = useState<any>(answersAll['00040'])

//   const flagHandler = () => {
//     setFlag(!flag)
//     dispatch(setFlags(Object.assign({}, flags, { '40': !flag })))
//   }

//   const postAnswer = useQuery({
//     enabled: false,
//     queryKey: ['postAnswer40'],
//     queryFn: async () => {
//       const response = await axiosInstance.post(`exam/answer/${localStorage.getItem('test_id')}`, {
//         "test_done": false,
//         "answers": {
//           "00040": localStorage.getItem('00040')
//         }
//       })
//       const data = await response.data
//       getAnswer.refetch()
//       return data
//     },
//   })

//   const getAnswer = useQuery({
//     queryKey: ['getAnswer40'],
//     queryFn: async () => {
//       const response = await axiosInstance.get(`exam/answer/${localStorage.getItem('test_id')}`)
//       const data = await response.data.answers
//       dispatch(setAnswersAll(data))
//       return data
//     },
//   })

//   const answerHandler = (e: any) => {
//     setAnswer((e.target.value))
//     localStorage.setItem('00040', e.target.value);
//     postAnswer.refetch()
//     dispatch(setAnswersAll(Object.assign({}, answersAll, { '00040': (e.target.value).trim().toLowerCase() })))
//     getAnswer.refetch()
//   }

//   return (
//     // <div className="align-items-start justify-content-space-between">
//     //   <div className="d-flex">
//     //     <Typography sx={{ px: 1, py: 1 }} id={`q-${qn}`}>
//     //       and the
//     //     </Typography>
//     //     <div className={`text-field ${currentQuestion == qn && 'active'}`}>
//     //       <TextField
//     //         autoComplete='off'
//     //         margin="normal"
//     //         placeholder={qn}
//     //         value={answer}
//     //         onChange={(e) => answerHandler(e)}
//     //         onClick={() => dispatch(setCurrentQuestion(qn))}
//     //       />
//     //     </div>
//     //     <Typography sx={{ pr: 1, py: 1 }}>
//     //       Of the staff. A balance was required between a degree of freedom and maintaining work standards.
//     //     </Typography>
//     //   </div>
//     //   <div onClick={() => flagHandler()} className={`flag ${currentQuestion == 40 && 'active'}`}>
//     //     {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
//     //   </div>
//     // </div>
//     <div className="ielts-question-textfield" id={`q-${qn}`}>
//       <span> and the</span>
//       <div className={`text-field ${currentQuestion == qn && 'active'}`}>
//         <TextField
//           autoComplete='off'
//           spellCheck="false"
//           margin="normal"
//           placeholder={qn}
//           value={answer}
//           onChange={(e) => answerHandler(e)}
//           onClick={() => dispatch(setCurrentQuestion(qn))}
//         />
//       </div>
//       <div onClick={() => flagHandler()} className={`flag ${currentQuestion == 40 && 'active'}`}>
//         {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
//       </div>
//       <span>Of the staff. </span>
//       <span>
//         A balance was required between
//       </span>
//       <div>
//         <span>
//           a degree of freedom and maintaining work standards.
//         </span>
//       </div>
//     </div>
//   );
// };

// export default index;

import { useState } from "react";

// mtu
import TextField from '@mui/material/TextField';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// mtu

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion, setAnswersAll, setFlags } from '@/store/slices/user/userSlice'
// store

const index = ({ qn }: any) => {

  const dispatch = useAppDispatch()

  const flags = useAppSelector((state: any) => state.user.flag)
  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state: any) => state.user.currentQuestion)

  const [flag, setFlag] = useState(flags['40'])
  const [answer, setAnswer] = useState<any>(answersAll['00040'])

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '40': !flag })))
  }

  const answerHandler = (e: any) => {
    setAnswer((e.target.value))
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '00040': (e.target.value).trim().toLowerCase() })))
  }

  return (
    <div className="ielts-question-textfield" id={`q-${qn}`}>
      <span>and the</span>
      <TextField
        autoComplete='off'
        spellCheck="false"
        margin="normal"
        placeholder={qn}
        value={answer}
        onChange={(e) => answerHandler(e)}
        onClick={() => dispatch(setCurrentQuestion(qn))}
      />
      <span>Of the staff.  A balance was required between</span>
      <span>a degree of freedom and maintaining work standards.</span>
      <div onClick={() => flagHandler()} className={`flag ${currentQuestion == qn && 'active'}`}>
        {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
      </div>
    </div>
  );
};

export default index;