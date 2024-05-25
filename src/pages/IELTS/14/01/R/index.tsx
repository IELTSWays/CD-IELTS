import React from 'react';
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';

// api
import { useQuery } from "@tanstack/react-query";
import axiosInstance from '@/services/API'
// api

// mtu
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DoneIcon from '@mui/icons-material/Done';
import BookmarkIcon from '@mui/icons-material/Bookmark';
// mtu

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion, setAnswersAll } from '@/store/slices/user/userSlice'
// store

import iLeft from '@/assets/images/CharmArrowLeft.svg';
import iRight from '@/assets/images/CharmArrowRight.svg';

import IdeClone from "@/components/IELTS/IdeClone"

import Title from '@/components/IELTS/Title';

import Text1 from './Text/Text1';
import Text2 from './Text/Text2';
import Text3 from './Text/Text3';

import Q01 from './Part1/Q01';
import Q02 from './Part1/Q02';
import Q03 from './Part1/Q03';
import Q04 from './Part1/Q04';
import Q05 from './Part1/Q05';
import Q06 from './Part1/Q06';
import Q07 from './Part1/Q07';
import Q08 from './Part1/Q08';
import Q09 from './Part1/Q09';
import Q10 from './Part1/Q10';
import Q11 from './Part1/Q11';
import Q12 from './Part1/Q12';
import Q13 from './Part1/Q13';
import Q14_18 from './Part2/Q14_18';
import Q19_20 from './Part2/Q19_20';
import Q21_22 from './Part2/Q21_22';
import Q23 from './Part2/Q23';
import Q24 from './Part2/Q24';
import Q25 from './Part2/Q25';
import Q26 from './Part2/Q26';
import Q27_31 from './Part3/Q27_31';
import Q32 from './Part3/Q32';
import Q33 from './Part3/Q33';
import Q34 from './Part3/Q34';
import Q35 from './Part3/Q35';
import Q36 from './Part3/Q36';
import Q37 from './Part3/Q37';
import Q38 from './Part3/Q38';
import Q39 from './Part3/Q39';
import Q40 from './Part3/Q40';

const index = () => {

  const { t } = useTranslation();
  const dispatch = useAppDispatch()

  const flags = useAppSelector((state: any) => state.user.flag)
  const fontSize = useAppSelector((state) => state.user.fontSize)
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)
  const answersAll = useAppSelector((state) => state.user.answersAll)

  const parts = [
    { title: "Part 1", description: "Read the text and answer questions 1-13." },
    { title: "Part 2", description: "Read the text and answer questions 13-20." },
    { title: "Part 3", description: "Read the text and answer questions 21-40." },
  ]

  const [test_id, setTest_id] = useState<any>('')

  const getAnswer = useQuery({
    queryKey: ['getAnswer'],
    queryFn: async () => {
      const response = await axiosInstance.get(`exam/answer/${localStorage.getItem('test_id')}`)
      const data = await response.data.answers
      dispatch(setAnswersAll(data))
      return data
    },
  })

  const postAnswer = useQuery({
    enabled: false,
    queryKey: ['postAnswer'],
    queryFn: async () => {
      const response = await axiosInstance.post(`exam/answer/${localStorage.getItem('test_id')}`, {
        "test_done": false, "confirm": true,
        "answers": answersAll,
      })
      const data = await response.data
      return data
    },
  })

  const [part, setPart] = useState(1)

  useEffect(() => {
    test_id && getAnswer.isFetching
    test_id && postAnswer.refetch()
  }, [part])

  useEffect(() => {
    setTest_id(localStorage.getItem('test_id'))
    test_id && getAnswer.refetch()
  }, [])

  const questions = [
    { number: 1, label: "1" },
    { number: 2, label: "2" },
    { number: 3, label: "3" },
    { number: 4, label: "4" },
    { number: 5, label: "5" },
    { number: 6, label: "6" },
    { number: 7, label: "7" },
    { number: 8, label: "8" },
    { number: 9, label: "9" },
    { number: 10, label: "10" },
    { number: 11, label: "11" },
    { number: 12, label: "12" },
    { number: 13, label: "13" },
    { number: 14, label: "14" },
    { number: 15, label: "15" },
    { number: 16, label: "16" },
    { number: 17, label: "17" },
    { number: 18, label: "18" },
    { number: 19, label: "19" },
    { number: 20, label: "20" },
    { number: 21, label: "21" },
    { number: 22, label: "22" },
    { number: 23, label: "23" },
    { number: 24, label: "24" },
    { number: 25, label: "25" },
    { number: 26, label: "26" },
    { number: 27, label: "27" },
    { number: 28, label: "28" },
    { number: 29, label: "29" },
    { number: 30, label: "30" },
    { number: 31, label: "31" },
    { number: 32, label: "32" },
    { number: 33, label: "33" },
    { number: 34, label: "34" },
    { number: 35, label: "35" },
    { number: 36, label: "36" },
    { number: 37, label: "37" },
    { number: 38, label: "38" },
    { number: 38, label: "39" },
    { number: 40, label: "40" },
  ]

  useEffect(() => {

    if (currentQuestion > 0 && currentQuestion < 14) {
      setPart(1);
    }
    if (currentQuestion > 13 && currentQuestion < 27) {
      setPart(2);
    }
    if (currentQuestion > 26 && currentQuestion < 41) {
      setPart(3)
    }
  }, [currentQuestion]);

  const handlePrevious = () => {
    if (currentQuestion == 21 || currentQuestion == 23) {
      dispatch(setCurrentQuestion(+currentQuestion - 2))
    }
    else {
      dispatch(setCurrentQuestion(+currentQuestion - 1))
    }
  }

  const handleNext = () => {
    if (currentQuestion == 19 || currentQuestion == 21) {
      dispatch(setCurrentQuestion(+currentQuestion + 2))
    }
    else {
      dispatch(setCurrentQuestion(+currentQuestion + 1))
    }
  }

  useEffect(() => {
    if (currentQuestion == 14 || currentQuestion == 27) {
      window.scrollTo(0, 0)
    }
  }, [currentQuestion])
    
  return (
    <>
      <Title title={parts[part - 1].title} description={parts[part - 1].description} />

      <div className={`ielts-container ${fontSize}`} id="ielts-list-text-input">
        <div className='arrow-currentQuestion'>
          <div className={currentQuestion == 1 && 'disable'}>
            <HashLink onClick={handlePrevious} smooth to={`#q-${currentQuestion - 1}`}>
              <img src={iLeft} />
            </HashLink>
          </div>
          <div className={currentQuestion == 40 && 'disable'}>
            <HashLink onClick={handleNext} smooth to={`#q-${currentQuestion + 1}`}>
              <img src={iRight} />
            </HashLink>
          </div>
        </div>

        {getAnswer.isLoading && <div> LOADING... </div>}
        {getAnswer.isSuccess &&

          <IdeClone
            left=
            {
              <div className="left ielts-scrollbar">
                {part === 1 && <Text1 />}
                {part === 2 && <Text2 />}
                {part === 3 && <Text3 />}
              </div>
            }
            right=
            {
              <div className="right ielts-scrollbar">
                {part === 1 &&
                  <>
                    <Box>
                      <Typography>
                        <h3> Questions 1 - 8 </h3>
                      </Typography>
                      <Typography sx={{ my: 1.5 }}>
                        Complete the notes below.
                      </Typography>
                      <Typography className='italic'>
                        Choose
                        <Typography sx={{ px: 1 }}> <strong className='uppercase'> ONE WORD ONLY </strong> </Typography>
                        from the passage for each answer.
                      </Typography>
                    </Box>

                    <Box sx={{ mt: 3 }}>
                      <Typography align="left" sx={{ py: 2 }}>
                        <h3>Children’s play</h3>
                      </Typography>

                      <section>
                        <Box sx={{ px: 1 }}>
                          <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                            <Paper elevation={0}>
                              <Typography><strong>Uses of children’s play</strong></Typography>
                            </Paper>
                          </Stack>
                        </Box>

                        {/************************* [1] *************************/}
                        <Q01 qn={questions[0].label} />

                        {/************************* [2] *************************/}
                        <Q02 qn={questions[1].label} />
                      </section>

                      <section>
                        <Box sx={{ px: 1 }}>
                          <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                            <Paper elevation={0}>
                              <Typography><strong>Recent changes affecting children’s play</strong></Typography>
                            </Paper>
                          </Stack>
                        </Box>

                        {/************************* [3] *************************/}
                        <Q03 qn={questions[2].label} />

                        {/************************* [4] *************************/}
                        <Q04 qn={questions[3].label} />

                        {/************************* [5] *************************/}
                        <Q05 qn={questions[4].label} />

                        {/************************* [6] *************************/}
                        <Q06 qn={questions[5].label} />
                      </section>

                      <section>
                        <Box sx={{ px: 1 }}>
                          <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                            <Paper elevation={0}>
                              <Typography><strong>International policies on children’s play</strong></Typography>
                            </Paper>
                          </Stack>
                        </Box>

                        {/************************* [7] *************************/}
                        <Q07 qn={questions[6].label} />

                        {/************************* [8] *************************/}
                        <Q08 qn={questions[7].label} />
                      </section>

                      <Box sx={{ py: 1 }}>
                        <Typography>
                          <h3> Questions 9 - 13 </h3>
                        </Typography>
                        <Typography sx={{ my: 1.5 }}>
                          Do the following statements agree with the information given in Reading Passage 1?
                        </Typography>
                        <Typography>
                          Choose
                          <Typography sx={{ px: 1 }}> <strong className='uppercase'> true </strong> </Typography>
                          if the statement agrees with the information,
                        </Typography>
                        <Typography>
                          Choose
                          <Typography sx={{ px: 1 }}> <strong className='uppercase'> false </strong> </Typography>
                          if the statement contradicts the information, or
                          <Typography sx={{ px: 1 }}> <strong className='uppercase'> not given </strong> </Typography>
                          if there is no information on this
                        </Typography>
                      </Box>

                      <section>
                        <Box sx={{ p: 1 }}>
                          {/************************* [9] *************************/}
                          <Q09 qn={questions[8].label} />
                          {/************************* [10] *************************/}
                          <Q10 qn={questions[9].label} />
                          {/************************* [11] *************************/}
                          <Q11 qn={questions[10].label} />
                          {/************************* [12] *************************/}
                          <Q12 qn={questions[11].label} />
                          {/************************* [13] *************************/}
                          <Q13 qn={questions[12].label} />
                        </Box>
                      </section>
                    </Box>
                  </>
                }
                {part === 2 &&
                  <>
                    <Box>
                      <Typography>
                        <h3> Questions 14 - 18 </h3>
                      </Typography>
                      <Typography>
                        The text has seven paragraphs,
                        <Typography sx={{ px: 1 }}> <strong className='uppercase'> A-G </strong>. </Typography>
                        Which paragraph contains the following information?
                      </Typography>
                    </Box>

                    {/************************* [14-18] *************************/}
                    <Box sx={{ mt: 3 }}>
                      <Q14_18 />
                    </Box>

                    <Box sx={{ mt: 3 }}>
                      <Typography>
                        <h3> Questions 19 - 22 </h3>
                      </Typography>
                      <Typography sx={{ my: 1.5 }}>
                        Choose
                        <Typography sx={{ px: 1 }}> <strong className='uppercase'>two</strong> </Typography>
                        corrent answers
                      </Typography>
                    </Box>
                    <Box sx={{ p: 1 }}>
                      {/************************* [19-20] *************************/}
                      <Q19_20 qn="19" />
                      {/************************* [21-22] *************************/}
                      <Q21_22 qn="21" />
                    </Box>

                    <Box>
                      <Typography>
                        <h3> Questions 23 - 26 </h3>
                      </Typography>
                      <Typography sx={{ my: 1.5 }}>
                        Complete the notes below.
                      </Typography>
                      <Typography className='italic'>
                        Choose
                        <Typography sx={{ px: 1 }}> <strong className='uppercase'> ONE WORD ONLY </strong> </Typography>
                        from the passage for each answer.
                      </Typography>
                    </Box>

                    <Box sx={{ mt: 3 }}>
                      <Typography align="left" sx={{ py: 2 }}>
                        <h3>The first urban bike-sharing scheme</h3>
                      </Typography>

                      <section>
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                          <Paper elevation={0}>
                            <Stack direction="row" alignItems="center" sx={{ flexWrap: 'wrap' }}>
                              {/************************* [23] *************************/}
                              <Q23 qn={questions[22].label} />
                              {/************************* [24] *************************/}
                              <Q24 qn={questions[23].label} />
                              {/************************* [25] *************************/}
                              <Q25 qn={questions[24].label} />
                            </Stack>
                          </Paper>
                        </Stack>

                        {/************************* [26] *************************/}
                        <Q26 qn={questions[25].label} />
                      </section>
                    </Box>
                  </>
                }

                {part === 3 &&
                  <>
                    <Box>
                      <Box>
                        <Typography>
                          <h3> Questions 27 - 31 </h3>
                        </Typography>
                        <Typography className='italic'>
                          Choose the correct answer.
                        </Typography>
                      </Box>
                      {/* <Q27_28_29_30_31 /> */}
                      <Q27_31/>
                    </Box>

                    <Box>
                      <Box sx={{ py: 1 }}>
                        <Typography>
                          <h3> Questions 32 - 35 </h3>
                        </Typography>
                        <Typography sx={{ my: 1.5 }}>
                          Do the following statements agree with the information given in Reading Passage 1?
                        </Typography>
                        <Typography sx={{ display: 'flex', flexWrap: 'wrap' }}>
                          Choose
                          <Typography sx={{ px: 1 }}> <strong className='uppercase'> yes </strong> </Typography>
                          if the statement agrees with the information,
                        </Typography>
                        <Typography sx={{ display: 'flex', flexWrap: 'wrap' }}>
                          Choose
                          <Typography sx={{ px: 1 }}> <strong className='uppercase'> no </strong> </Typography>
                          if the statement contradicts the information, or
                          <Typography sx={{ px: 1 }}> <strong className='uppercase'> not given </strong> </Typography>
                          if there is no information on this
                        </Typography>
                      </Box>

                      <section>
                        <Box sx={{ p: 1 }}>
                          {/************************* [32] *************************/}
                          <Q32 qn={questions[31].label} />
                          {/************************* [33] *************************/}
                          <Q33 qn={questions[32].label} />
                          {/************************* [34] *************************/}
                          <Q34 qn={questions[33].label} />
                          {/************************* [35] *************************/}
                          <Q35 qn={questions[34].label} />
                        </Box>
                      </section>
                    </Box>

                    <Box>
                      <Typography>
                        <h3> Questions 36 - 40 </h3>
                      </Typography>
                      <Typography sx={{ my: 1.5 }}>
                        Complete the notes below.
                      </Typography>
                      <Typography className='italic'>
                        Choose
                        <Typography sx={{ px: 1 }}> <strong className='uppercase'> ONE WORD ONLY </strong> </Typography>
                        from the passage for each answer.
                      </Typography>
                    </Box>

                    <Box sx={{ mt: 3 }}>
                      <Typography align="left" sx={{ py: 2 }}>
                        <h3>Fun at work</h3>
                      </Typography>

                      <section>
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                          <Paper elevation={0}>
                            <Stack direction="row" alignItems="center" sx={{ flexWrap: 'wrap' }}>

                              {/************************* [36] *************************/}
                              <Q36 qn={questions[35].label} />

                              {/************************* [37] *************************/}
                              <Q37 qn={questions[36].label} />

                              {/************************* [38] *************************/}
                              <Q38 qn={questions[37].label} />

                              {/************************* [39] *************************/}
                              <Q39 qn={questions[38].label} />

                              {/************************* [40] *************************/}
                              <Q40 qn={questions[39].label} />
                            </Stack>
                          </Paper>
                        </Stack>
                      </section>
                    </Box>
                    {/* <button onClick={() => postAnswer.refetch()}> FINISH </button> */}
                  </>
                }
              </div>
            }
          />
        }
      </div>

      <div className="ielts-navigation" id="B14RT1">
        <div className={`navigation-part ${part === 1 && 'active'} ${part > 1 && 'done'}`}>
          <div className="navigation-part-title">
            <span>Part 1</span>
          </div>
          <div className="navigation-part-items">

            {questions.slice(0, 13).map((i) => {
              return (
                <div
                  className={currentQuestion == `${i.number}` && 'active'}
                  id={`item-${i.number}`}
                  data-answer={`${answersAll[i.label]?.length > 0 && 'answered'}`}
                >
                  <HashLink 
                    onClick={() => dispatch(setCurrentQuestion(i.label))} 
                    smooth 
                    to={`#q-${i.label}`}
                    >
                    <span>
                      <>
                        {flags[i.number] && <BookmarkIcon color={'error'} />}
                      </>
                      {i.label}
                    </span>
                  </HashLink>
                </div>
              )
            })}
          </div>
          <div className='navigation-part-counter'>
            {part > 1 ?
              <>
                <DoneIcon color="success" sx={{ mr: 1 }} />
                <div>Part 1</div>
              </>
              :
              <>
                <div>Part 1</div>
                <div> 0 of 13 </div>
              </>
            }
          </div>
        </div>

        <div className={`navigation-part ${part === 2 && 'active'} ${part > 2 && 'done'}`}>
          <div className="navigation-part-title">
            <span>Part 2</span>
          </div>
          <div className="navigation-part-items">
            {questions.slice(13, 26).map((i) => {
              return (
                <div
                  className={currentQuestion == `${i.label}` && 'active'}
                  id={`item-${i.number}`}
                  data-answer={`${answersAll[i.label]?.length > 0 && 'answered'}`}
                >
                  <HashLink 
                    onClick={() => dispatch(setCurrentQuestion(i.label))} 
                    smooth 
                    to={`#q-${i.label}`}
                    >
                    <span>
                      <>
                        {flags[i.number] && <BookmarkIcon color={'error'} />}
                      </>
                      {i.label}
                    </span>
                  </HashLink>
                </div>
              )
            })}
          </div>
          <div className='navigation-part-counter'>
            {part > 2 ?
              <>
                <DoneIcon color="success" sx={{ mr: 1 }} />
                <div>Part 2</div>
              </>
              :
              <>
                <div>Part 2</div>
                <div> 0 of 13 </div>
              </>
            }
          </div>
        </div>

        <div className={`navigation-part ${part === 3 && 'active'} ${part > 3 && 'done'}`}>
          <div className="navigation-part-title">
            <span>Part 3</span>
          </div>
          <div className="navigation-part-items">
            {questions.slice(26, 40).map((i) => {
              return (
                <div
                  className={currentQuestion == `${i.label}` && 'active'}
                  id={`item-${i.number}`}
                  data-answer={`${answersAll[i.label]?.length > 0 && 'answered'}`}
                >
                  <HashLink 
                    onClick={() => dispatch(setCurrentQuestion(i.label))} 
                    smooth 
                    to={`#q-${i.label}`}
                    >
                    <span>
                      <>
                        {flags[i.number] && <BookmarkIcon color={'error'} />}
                      </>
                      {i.label}
                    </span>
                  </HashLink>
                </div>
              )
            })}
          </div>
          <div className='navigation-part-counter'>
            {part > 3 ?
              <>
                <DoneIcon color="success" sx={{ mr: 1 }} />
                <div>Part 3</div>
              </>
              :
              <>
                <div>Part 3</div>
                <div> 0 of 8 </div>
              </>
            }
          </div>
        </div>
      </div>

    </>
  );
};

export default index;

// import React from 'react';
// import { useState, useEffect } from 'react'

// import { useQuery } from "@tanstack/react-query";
// import axiosInstance from '@/services/API'

// import Typography from '@mui/material/Typography';

// import { useAppSelector } from '@/store/hooks'
// import { useAppDispatch } from '@/store/hooks'
// import { setPart, setCurrentQuestion, setAnswersAll } from '@/store/slices/user/userSlice'

// import IELTSTitle from '@/components/IELTS/IELTSTitle';
// import IELTSParts from '@/components/IELTS/IELTSParts';
// import IELTSArrows from '@/components/IELTS/IELTSArrows';
// import IELTSRadio from '@/components/IELTS/QuestionTypes/IELTSRadio';
// import IELTSInput from '@/components/IELTS/QuestionTypes/IELTSInput';
// import IELTSQuestionTitle from '@/components/IELTS/IELTSQuestionTitle';
// import IELTSPartNavigation from '@/components/IELTS/IELTSPartNavigation/';
// import IELTSTableOptions from '@/components/IELTS/QuestionTypes/IELTSTableOptions';
// import IELTSMultiCheckbox from '@/components/IELTS/QuestionTypes/IELTSMultiCheckbox';
// import IELTSTableOptionsLabel from '@/components/IELTS/QuestionTypes/IELTSTableOptionsLabel'

// import IdeClone from "@/components/IELTS/IdeClone"

// import Text1 from './Text/Text1';
// import Text2 from './Text/Text2';
// import Text3 from './Text/Text3';

// const index = () => {

//   const dispatch = useAppDispatch()

//   const fontSize = useAppSelector((state) => state.user.fontSize)
//   const currentQuestion = useAppSelector((state) => state.user.currentQuestion)
//   const answersAll = useAppSelector((state) => state.user.answersAll)

//   const [test_id, setTest_id] = useState<any>('')

//   const getAnswer = useQuery({
//     queryKey: ['getAnswer'],
//     queryFn: async () => {
//       const response = await axiosInstance.get(`exam/answer/${localStorage.getItem('test_id')}`)
//       const data = await response.data.answers
//       dispatch(setAnswersAll(data))
//       return data
//     },
//   })

//   const postAnswer = useQuery({
//     enabled: false,
//     queryKey: ['postAnswer'],
//     queryFn: async () => {
//       const response = await axiosInstance.post(`exam/answer/${localStorage.getItem('test_id')}`, {
//         "test_done": false, "confirm": true,
//         "answers": answersAll,
//       })
//       const data = await response.data
//       return data
//     },
//   })

//   const [part, setPart] = useState(1)

//   useEffect(() => {
//     test_id && getAnswer.isFetching
//     test_id && postAnswer.refetch()
//   }, [part])

//   useEffect(() => {
//     setTest_id(localStorage.getItem('test_id'))
//     test_id && getAnswer.refetch()
//   }, [])


//   useEffect(() => {

//     if (currentQuestion > 0 && currentQuestion < 14) {
//       dispatch(setPart(1))
//     }
//     if (currentQuestion > 13 && currentQuestion < 27) {
//       dispatch(setPart(2))
//     }
//     if (currentQuestion > 26 && currentQuestion < 41) {
//       dispatch(setPart(3))
//     }
//   }, [currentQuestion]);

  
//   const handlePrevious = () => {
//     const stepBack = currentQuestion === 21 || currentQuestion === 23 ? 2 : 1;
//     dispatch(setCurrentQuestion(Number(currentQuestion) - Number(stepBack)));
//   };

//   const handleNext = () => {
//     const stepForward = currentQuestion === 19 || currentQuestion === 21 ? 2 : 1;
//     dispatch(setCurrentQuestion(Number(currentQuestion) + Number(stepForward)));
//   };

//   const options_9_13 = [
//     { label: 'TRUE', value: "a", },
//     { label: 'FALSE', value: "b", },
//     { label: 'NOT GIVEN', value: "c", },
//   ]

//   const options_32_35 = [
//     { label: 'YES', value: "a", },
//     { label: 'NO', value: "b", },
//     { label: 'NOT GIVEN', value: "c", },
//   ]

//   return (
//     <>
//       <IELTSParts part={part}/>

//       <div className={`ielts-container ${fontSize}`} id="ielts-list-text-input">
//         <IELTSArrows handlePrevious={handlePrevious} handleNext={handleNext} />

//         {getAnswer.isLoading && <div> LOADING... </div>}
//         {getAnswer.isSuccess &&

//           <IdeClone
//             left=
//             {
//               <div className="left ielts-scrollbar">
//                 {part === 1 && <Text1 />}
//                 {part === 2 && <Text2 />}
//                 {part === 3 && <Text3 />}
//               </div>
//             }
//             right=
//             {
//               <div className="right ielts-scrollbar">
//                 {part === 1 &&
//                   <>
//                     {/* ================================================================================ [01-08] */}
//                     <IELTSQuestionTitle from="1" to="8" type="4" />
//                     <IELTSTitle title="Children’s play" isHeader />
//                     <IELTSTitle title="Uses of children’s play" />
//                     {/************* [1] *************/}
//                     <IELTSInput qn="1" beforeInput="● building a ‘magical kingdom’ may help develop" />
//                     <IELTSInput qn="3" beforeInput="● hello" afterInput="bye" />
//                     {/************* [2] *************/}
//                     <IELTSInput qn="2" beforeInput="● board games involve" afterInput="and turn-taking" />
//                     <IELTSTitle title="Recent changes affecting children’s play" />
//                     {/************* [3] *************/}
//                     <IELTSInput qn="3" beforeInput="● population of" afterInput="have grown" />
//                     {/************* [4] *************/}
//                     <IELTSInput qn="4" beforeInput=" — fear of" />
//                     {/************* [5] *************/}
//                     <IELTSInput qn="5" beforeInput=" — fear of" />
//                     {/************* [6] *************/}
//                     <IELTSInput qn="6" beforeInput=" — increased" afterInput="in schools" />
//                     <IELTSTitle title="International policies on children’s play" />
//                     {/************* [7] *************/}
//                     <IELTSInput qn="7" beforeInput="● it is difficult to find" afterInput="to support new policies" />
//                     {/************* [8] *************/}
//                     <IELTSInput qn="8" beforeInput="● research needs to study the impact of play on the rest of the child’s" />

//                     {/* ================================================================================ [09-13] */}
//                     <IELTSQuestionTitle from="9" to="13" type="5" />
//                     {/************* [9] *************/}
//                     <IELTSRadio
//                       qn="9"
//                       question="Children with good self-control are known to be likely to do well at school later on."
//                       options={options_9_13}
//                     />
//                     {/************* [10] *************/}
//                     <IELTSRadio
//                       qn="10"
//                       question="The way a child plays may provide information about possible medical problems."
//                       options={options_9_13}
//                     />
//                     {/************* [11] *************/}
//                     <IELTSRadio
//                       qn="11"
//                       question="Playing with dolls was found to benefit girls’ writing more than boys’ writing"
//                       options={options_9_13}
//                     />
//                     {/************* [12] *************/}
//                     <IELTSRadio
//                       qn="12"
//                       question="Children had problems thinking up ideas when they first created the story with Lego."
//                       options={options_9_13}
//                     />
//                     {/************* [13] *************/}
//                     <IELTSRadio
//                       qn="13"
//                       question="People nowadays regard children’s play as less significant than they did in the past."
//                       options={options_9_13}
//                     />
//                   </>
//                 }
//                 {part === 2 &&
//                   <>
//                     {/* ================================================================================ [14-18] */}
//                     <IELTSQuestionTitle from="14" to="18" type="6" />
//                     {/************* [14-18] *************/}
//                     <IELTSTableOptions
//                       questions={[
//                         { id: 14, title: 'a description of how people misused a bike-sharing scheme' },
//                         { id: 15, title: 'an explanation of why a proposed bike-sharing scheme was turned down' },
//                         { id: 16, title: 'a reference to a person being unable to profit their work' },
//                         { id: 17, title: 'an explanation of the potential savings a bike-sharing scheme would bring' },
//                         { id: 18, title: 'a reference to the problems a bike-sharing scheme was intended to solve' }
//                       ]} />

//                     {/* ================================================================================ [19-22] */}
//                     <IELTSQuestionTitle from="19" to="22" type="2" />
//                     {/************* [19-20] *************/}
//                     <IELTSMultiCheckbox
//                       qn="19"
//                       question="the following statements are made in the text about the Amsterdam bike-sharing scheme of 1999?"
//                       checkList={[
//                         { label: 'It was initially opposed by a government department.', value: "a", },
//                         { label: 'It failed when a partner in the scheme withdrew support.', value: "b", },
//                         { label: 'It aimed to be more successful than the Copenhagen scheme.', value: "c", },
//                         { label: 'It was made possible by a change in people’s attitudes.', value: "d", },
//                         { label: 'It attracted interest from a range of bike designers.', value: "e", },
//                       ]}
//                     />
//                     {/************* [21-22] *************/}
//                     <IELTSMultiCheckbox
//                       qn="21"
//                       question="of the following statements are made in the text about Amsterdam today?"
//                       checkList={[
//                         { label: 'The majority of residents would like to prevent all cars from entering the city.', value: "a", },
//                         { label: 'There is little likelihood of the city having another bike-sharing scheme.', value: "b", },
//                         { label: 'More trips in the city are made by bike than by any other form of transport.', value: "c", },
//                         { label: 'A bike-sharing scheme would benefit residents who use public transport.', value: "d", },
//                         { label: 'The city has a reputation as a place that welcomes cyclists.', value: "e", },
//                       ]}
//                     />

//                     {/* ================================================================================ [23-26] */}

//                     <IELTSQuestionTitle from="23" to="26" type="4" />
//                     <IELTSTitle title="he first urban bike-sharing scheme" />
//                     {/************* [23] *************/}
//                     <IELTSInput qn="23" beforeInput="The first bike-sharing scheme was the idea of the Dutch group Provo. The people who belonged to this group were" />
//                     {/************* [24] *************/}
//                     <IELTSInput qn="24" beforeInput="They were concerned about damage to the environment and about" afterInput="and believed that the bike-sharing scheme would draw attention to these issues." />
//                     {/************* [25] *************/}
//                     <IELTSInput qn="25" beforeInput="As well as painting some bikes white, they handed out" afterInput="that condemned the use of cars." />
//                     {/************* [26] *************/}
//                     <IELTSInput qn="26" beforeInput="However, the scheme was not a great success:
// almost as quickly as Provo left the bikes around the city, the" afterInput="Took them away." />
//                     <Typography sx={{ mb: 2 }}>
//                       According to Schimmelpennink,the scheme was intended to be symbolic.The idea was to get people thinking about the issues.
//                     </Typography>
//                   </>
//                 }

//                 {part === 3 &&
//                   <>
//                     {/* ================================================================================ [27-31] */}
//                     <IELTSQuestionTitle from="27" to="31" type="3" />
//                     {/************* [27-31] *************/}
//                     <IELTSTableOptionsLabel
//                       questions={
//                         [
//                           { id: 27, title: 'Hotel managers need to know what would encourage good staff to remain.' },
//                           { id: 28, title: 'The actions of managers may make staff feel they shouldn’t move to a different employer.' },
//                           { id: 29, title: 'Little is done in the hospitality industry to help workers improve their skills.' },
//                           { id: 30, title: 'Staff are less likely to change jobs if cooperation is encouraged.' },
//                           { id: 31, title: 'Dissatisfaction with pay is not the only reason why hospitality workers change jobs.' }
//                         ]
//                       }
//                       topLabels={[
//                         { title: "Pfeffer" },
//                         { title: "Lucas" },
//                         { title: "Maroudas et al" },
//                         { title: "Ng and Sorensen" },
//                         { title: "provide a handout" },
//                         { title: "Enz and Siguaw" },
//                         { title: "Deery" },
//                       ]
//                       }
//                     />
//                     {/* ================================================================================ [32-35] */}
//                     <IELTSQuestionTitle from="32" to="35" type="5" />
//                     {/************* [32] *************/}
//                     <IELTSRadio
//                       qn="32"
//                       question="One reason for high staff turnover in the hospitality industry is poor morale."
//                       options={options_32_35}
//                     />
//                     {/************* [33] *************/}
//                     <IELTSRadio
//                       qn="33"
//                       question="Research has shown that staff have a tendency to dislike their workplace."
//                       options={options_32_35}
//                     />
//                     {/************* [34] *************/}
//                     <IELTSRadio
//                       qn="34"
//                       question="An improvement in working conditions and job security makes staff satisfied with their jobs."
//                       options={options_32_35}
//                     />
//                     {/************* [35] *************/}
//                     <IELTSRadio
//                       qn="35"
//                       question="Staff should be allowed to choose when they take breaks during the working day"
//                       options={options_32_35}
//                     />
//                     {/* ================================================================================ [36-40] */}
//                     <IELTSQuestionTitle from="36" to="40" type="4" />
//                     <IELTSTitle title="Fun at work" />
//                     {/************* [36] *************/}
//                     <IELTSInput qn="36" beforeInput="Tews, Michel and Stafford carried out research on staff in an American chain of" />
//                     {/************* [37] *************/}
//                     <IELTSInput qn="37" beforeInput="They discovered that activities designed for staff to have fun improved their" />
//                     {/************* [38] *************/}
//                     <IELTSInput qn="38" beforeInput=", and that management involvement led to lower staff" />
//                     {/************* [39] *************/}
//                     <IELTSInput qn="39" beforeInput="They also found that the activities needed to fit with both the company’s" />
//                     {/************* [40] *************/}
//                     <IELTSInput qn="40" beforeInput="and the" afterInput="Of the staff. A balance was required between a degree of freedom and maintaining work standards." />
//                   </>
//                 }
//               </div>
//             }
//           />
//         }
//       </div>
//       <IELTSPartNavigation part={part} />
//     </>
//   );
// };

// export default index;