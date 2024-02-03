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
import { setCurrentQuestion } from '@/store/slices/user/userSlice'
// store

import useGetAnswer from '@/services/Requests/useGetAnswer';

import iLeft from '@/assets/images/CharmArrowLeft.svg';
import iRight from '@/assets/images/CharmArrowRight.svg';

import Title from '@/components/IELTS/Title';

import Q00 from './Part1/Q00';
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
import Q11_12 from './Part2/Q11_12';
import Q13_14 from './Part2/Q13_14';
import Q15 from './Part2/Q15';
import Q16 from './Part2/Q16';
import Q17 from './Part2/Q17';
import Q18 from './Part2/Q18';
import Q19 from './Part2/Q19';
import Q20 from './Part2/Q20';
import Q21 from './Part3/Q21';
import Q22 from './Part3/Q22';
import Q23 from './Part3/Q23';
import Q24 from './Part3/Q24';
import Q25 from './Part3/Q25';
import Q26_27_28_29_30 from './Part3/Q26_27_28_29_30';
import Q31 from './Part4/Q31';
import Q32 from './Part4/Q32';
import Q33 from './Part4/Q33';
import Q34 from './Part4/Q34';
import Q35 from './Part4/Q35';
import Q36 from './Part4/Q36';
import Q37 from './Part4/Q37';
import Q38 from './Part4/Q38';
import Q39 from './Part4/Q39';
import Q40 from './Part4/Q40';

const index = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch()

  const flags = useAppSelector((state: any) => state.user.flag)
  const fontSize = useAppSelector((state) => state.user.fontSize)
  const answersAll = useAppSelector((state) => state.user.answersAll)
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

  const parts = [
    { title: "Part 1", description: "Listen and answer question 1-10." },
    { title: "Part 2", description: "Listen and answer question 11-20." },
    { title: "Part 3", description: "Listen and answer question 21-30." },
    { title: "Part 4", description: "Listen and answer question 31-40." },
  ]

  const [test_id, setTest_id] = useState<any>('')

  const { refetch: refetchGetAnswer, isLoading, isSuccess } = useGetAnswer()

  const postAnswer = useQuery({
    enabled: false,
    queryKey: ['postAnswer'],
    queryFn: async () => {
      const response = await axiosInstance.post(`exam/answer/${localStorage.getItem('test_id')}`, {
        "test_done": false,
        "answers": answersAll,
      })
      const data = await response.data
      return data
    },
  })

  const [part, setPart] = useState(1)

  useEffect(() => {
    test_id && refetchGetAnswer()
    test_id && postAnswer.refetch()
  }, [part])

  useEffect(() => {
    setTest_id(localStorage.getItem('test_id'))
    test_id && refetchGetAnswer()
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
    { number: 39, label: "39" },
    { number: 40, label: "40" },
  ]

  useEffect(() => {

    if (currentQuestion > 0 && currentQuestion < 11) {
      setPart(1);
    }
    if (currentQuestion > 10 && currentQuestion < 21) {
      setPart(2);
    }
    if (currentQuestion > 20 && currentQuestion < 31) {
      setPart(3)
    }
    if (currentQuestion > 30 && currentQuestion < 41) {
      setPart(4)
    }
  }, [currentQuestion]);


  const handlePrevious = () => {
    if (currentQuestion == 15 || currentQuestion == 13) {
      dispatch(setCurrentQuestion(+currentQuestion - 2))
    }
    else {
      dispatch(setCurrentQuestion(+currentQuestion - 1))
    }
  }

  const handleNext = () => {
    if (currentQuestion == 11 || currentQuestion == 13) {
      dispatch(setCurrentQuestion(+currentQuestion + 2))
    }
    else {
      dispatch(setCurrentQuestion(+currentQuestion + 1))
    }
  }

  return (
    <>
      <Title title={parts[part - 1]?.title} description={parts[part - 1]?.description} />

      <div className={`ielts-container full-w ${fontSize}`} id="ielts-list-text-input">

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

        {isLoading && <div> LOADING... </div>}
        {!isSuccess &&
          <>
            {part === 1 &&
              <>
                <Box>
                  <Typography>
                    <h3> Questions 1 - 10 </h3>
                  </Typography>
                  <Typography sx={{ my: 1.5 }}>
                    Complete the notes.
                  </Typography>
                  <Typography className='italic'>
                    Write
                    <Typography sx={{ px: 1 }}> <strong className='uppercase'> one word and/or a number </strong> </Typography>
                    for each answer.
                  </Typography>
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Typography align="center" sx={{ py: 2 }}>
                    <h3 className='uppercase'>CRIME REPORT FORM</h3>
                  </Typography>
                  <div>
                    {/************************* [0] *************************/}
                    <Q00 />

                    <Box sx={{ p: 1 }}>
                      {/************************* [1] *************************/}
                      <Q01 qn={questions[0].label} />
                      {/************************* [2] *************************/}
                      <Q02 qn={questions[1].label} />
                      {/************************* [3] *************************/}
                      <Q03 qn={questions[2].label} />
                    </Box>

                    <Box sx={{ p: 1 }}>
                      {/************************* [4] *************************/}
                      <Q04 qn={questions[3].label} />
                      {/************************* [5] *************************/}
                      <Q05 qn={questions[4].label} />
                      {/************************* [6] *************************/}
                      <Q06 qn={questions[5].label} />
                    </Box>

                    <Box sx={{ p: 1 }}>
                      {/************************* [7] *************************/}
                      <Q07 qn={questions[6].label} />
                      {/************************* [8] *************************/}
                      <Q08 qn={questions[7].label} />
                      {/************************* [9] *************************/}
                      <Q09 qn={questions[8].label} />
                    </Box>

                    <Box sx={{ p: 1 }}>
                      {/************************* [10] *************************/}
                      <Q10 qn={questions[9].label} />
                    </Box>
                  </div>
                </Box>
              </>
            }

            {part === 2 &&
              <>
                <Box>
                  <Typography>
                    <h3> Questions 11 - 14 </h3>
                  </Typography>
                  <Typography className='italic'>
                    Choose
                    <Typography sx={{ px: 1 }}> <strong className='uppercase'> two </strong> </Typography>
                    correct answer.
                  </Typography>
                </Box>
                <Box sx={{ mt: 3 }}>
                  <div>
                    <Box sx={{ p: 1 }}>
                      {/************************* [11-12] *************************/}
                      <Q11_12 qn="11-12" />

                      {/************************* [13-14] *************************/}
                      <Q13_14 qn="13-14" />
                    </Box>
                  </div>
                </Box>

                <Box>
                  <Typography>
                    <h3> Questions 15 - 20 </h3>
                  </Typography>
                  <Typography className='italic'>
                    Choose the correct answer.
                  </Typography>
                </Box>
                <Box sx={{ mt: 3 }}>
                  <div>
                    <Box sx={{ p: 1 }}>
                      {/************************* [15] *************************/}
                      <Q15 qn={questions[14].label} />
                      {/************************* [16] *************************/}
                      <Q16 qn={questions[15].label} />
                      {/************************* [17] *************************/}
                      <Q17 qn={questions[16].label} />
                      {/************************* [18] *************************/}
                      <Q18 qn={questions[17].label} />
                      {/************************* [19] *************************/}
                      <Q19 qn={questions[18].label} />
                      {/************************* [20] *************************/}
                      <Q20 qn={questions[19].label} />
                    </Box>
                  </div>
                </Box>
              </>
            }

            {part === 3 &&
              <>
                <Box>
                  <Typography>
                    <h3> Questions 21 - 25 </h3>
                  </Typography>
                  <Typography className='italic'>
                    Choose the correct answer.
                  </Typography>
                </Box>
                <Box sx={{ mt: 3 }}>
                  <div>
                    <Box sx={{ p: 1 }}>
                      {/************************* [21] *************************/}
                      <Q21 qn={questions[20].label} />
                      {/************************* [22] *************************/}
                      <Q22 qn={questions[21].label} />
                      {/************************* [23] *************************/}
                      <Q23 qn={questions[22].label} />
                      {/************************* [24] *************************/}
                      <Q24 qn={questions[23].label} />
                      {/************************* [25] *************************/}
                      <Q25 qn={questions[24].label} />
                    </Box>
                  </div>
                </Box>
                <Box>
                  <Typography>
                    <h3> Questions 26 - 30 </h3>
                  </Typography>
                  <Typography className='italic'>
                    Choose the correct answer.
                  </Typography>
                </Box>
                <Box sx={{ mt: 3 }}>
                  <div>
                    <Box sx={{ p: 1 }}>
                      {/************************* [26-30] *************************/}
                      <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap" sx={{ py: 1 }}>
                        <Paper elevation={0}>
                          <Typography>
                            <strong> 26-30 </strong>
                            <Typography sx={{ px: 1 }}> {t('00071')} </Typography>
                          </Typography>
                        </Paper>
                        <Paper elevation={0}>
                          <Stack direction="row" alignItems="center">
                            <Q26_27_28_29_30 />
                          </Stack>
                        </Paper>
                      </Stack>
                    </Box>
                  </div>
                </Box>
              </>
            }

            {part === 4 &&
              <>
                <Box>
                  <Typography>
                    <h3> Questions 31 - 40 </h3>
                  </Typography>
                  <Typography sx={{ my: 1.5 }}>
                    Complete the notes below.
                  </Typography>
                  <Typography className='italic'>
                    Write
                    <Typography sx={{ px: 1 }}> <strong className='uppercase'> ONE WORD ONLY </strong> </Typography>
                    for each answer.
                  </Typography>
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Typography align="center" sx={{ py: 2 }}>
                    <h3 className='uppercase'>CRIME REPORT FORM</h3>
                  </Typography>
                  <div>

                    <section>
                      <Box sx={{ px: 1 }}>
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                          <Paper elevation={0}>
                            <Typography><strong>Introduction</strong></Typography>
                          </Paper>
                        </Stack>
                      </Box>

                      <Box sx={{ px: 1 }}>
                        {/************************* [31] *************************/}
                        <Q31 qn={questions[30].label} />
                      </Box>
                    </section>

                    <section>
                      <Box sx={{ px: 1 }}>
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                          <Paper elevation={0}>
                            <Typography><strong>Wave energy</strong></Typography>
                          </Paper>
                        </Stack>
                      </Box>

                      <Box sx={{ px: 1 }}>
                        {/************************* [32] *************************/}
                        <Q32 qn={questions[31].label} />
                      </Box>

                      <Box sx={{ px: 1 }}>
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                          <Paper elevation={0}>
                            <Stack direction="row" alignItems="center">
                              <Typography>
                                Electricity can be generated using offshore or onshore systems
                              </Typography>
                            </Stack>
                          </Paper>
                        </Stack>
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                          <Paper elevation={0}>
                            <Stack direction="row" alignItems="center">
                              <Typography>
                                Onshore systems may use a reservoir
                              </Typography>
                            </Stack>
                          </Paper>
                        </Stack>

                        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                          <Paper elevation={0}>
                            <Stack direction="row" alignItems="center">
                              <Typography>
                                Problems:
                              </Typography>
                            </Stack>
                          </Paper>
                        </Stack>

                        {/************************* [33] *************************/}
                        <Q33 qn={questions[32].label} />

                        {/************************* [34] *************************/}
                        <Q34 qn={questions[33].label} />
                      </Box>
                    </section>

                    <section>
                      {/************************* [35] *************************/}
                      <Q35 qn={questions[34].label} />

                      <Box sx={{ px: 1 }}>
                        {/************************* [36] *************************/}
                        <Q36 qn={questions[35].label} />

                        {/************************* [37] *************************/}
                        <Q37 qn={questions[36].label} />
                      </Box>
                    </section>

                    <section>
                      <Box sx={{ px: 1 }}>
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                          <Paper elevation={0}>
                            <Typography>Advantages:</Typography>
                          </Paper>
                        </Stack>
                      </Box>

                      <Box sx={{ px: 1 }}>
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                          <Paper elevation={0}>
                            <Stack direction="row" alignItems="center">
                              <Typography >
                                not dependent on weather
                              </Typography>
                            </Stack>
                          </Paper>
                        </Stack>
                      </Box>

                      <Box sx={{ px: 1 }}>
                        {/************************* [38] *************************/}
                        <Q38 qn={questions[37].label} />
                        {/************************* [39] *************************/}
                        <Q39 qn={questions[38].label} />
                      </Box>
                    </section>

                    {/************************* [40] *************************/}
                    <Q40 qn={questions[39].label} />
                  </div>
                </Box>
                <button onClick={() => postAnswer.refetch()}> FINISH </button>
              </>
            }
          </>
        }
      </div>

      <div className="ielts-navigation" id="ielts-listening-1401">
        <div className={`navigation-part ${part === 1 && 'active'} ${part > 1 && 'done'}`}>
          <div className="navigation-part-title">
            <span>Part 1</span>
          </div>
          <div className="navigation-part-items">

            {questions.slice(0, 10).map((i) => {
              return (
                <div
                  className={currentQuestion == `${i.number}` && 'active'}
                  id={`item-${i.number}`}
                  data-answer={`${answersAll && Object.values(answersAll)[i.number - 1]?.length > 0 && 'answered'}`}
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
                <div> 1 of 10 </div>
              </>
            }
          </div>
        </div>

        <div className={`navigation-part ${part === 2 && 'active'} ${part > 2 && 'done'}`}>
          <div className="navigation-part-title">
            <span>Part 2</span>
          </div>
          <div className="navigation-part-items">
            {questions.slice(10, 20).map((i) => {
              return (
                <div
                  className={currentQuestion == `${i.label}` && 'active'}
                  id={`item-${i.number}`}
                  data-answer={`${answersAll && Object.values(answersAll)[i.number - 1]?.length > 0 && 'answered'}`}
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
                <div> 2 of 20 </div>
              </>
            }
          </div>
        </div>

        <div className={`navigation-part ${part === 3 && 'active'} ${part > 3 && 'done'}`}>
          <div className="navigation-part-title">
            <span>Part 3</span>
          </div>
          <div className="navigation-part-items">
            {questions.slice(20, 30).map((i) => {
              return (
                <div
                  className={currentQuestion == `${i.label}` && 'active'}
                  id={`item-${i.number}`}
                  data-answer={`${answersAll && Object.values(answersAll)[i.number - 1]?.length > 0 && 'answered'}`}
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
                <div> 2 of 30 </div>
              </>
            }
          </div>
        </div>

        <div className={`navigation-part ${part === 4 && 'active'}`}>
          <div className="navigation-part-title">
            <span>Part 4</span>
          </div>
          <div className="navigation-part-items">
            {questions.slice(30, 40).map((i) => {
              return (
                <div
                  className={currentQuestion == `${i.label}` && 'active'}
                  id={`item-${i.number}`}
                  data-answer={`${answersAll && Object.values(answersAll)[i.number - 1]?.length > 0 && 'answered'}`}
                >
                  <HashLink
                    onClick={() => dispatch(setCurrentQuestion(i.number))}
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
            <div>Part 4</div> <div> 0 of 40 </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;