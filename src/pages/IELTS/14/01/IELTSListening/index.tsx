import React from 'react';
import { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link';

import { useQuery } from "@tanstack/react-query";
import axiosInstance from '@/services/API'

import Typography from '@mui/material/Typography';

import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion } from '@/store/slices/user/userSlice'

import IELTSDrag from '@/components/IELTS/QuestionTypes/IELTSDrag'
import IELTSRadio from '@/components/IELTS/QuestionTypes/IELTSRadio'
import IELTSInput from '@/components/IELTS/QuestionTypes/IELTSInput'
import IELTSTitle from '@/components/IELTS/QuestionTypes/IELTSTitle'
import IELTSTwoCol from '@/components/IELTS/QuestionTypes/IELTSTwoCol'
import IELTSQuestionTitle from '@/components/IELTS/QuestionTypes/IELTSQuestionTitle'
import IELTSMultiCheckbox from '@/components/IELTS/QuestionTypes/IELTSMultiCheckbox'
import IELTSPartNavigation from '@/components/IELTS/QuestionTypes/IELTSPartNavigation';

import useGetAnswer from '@/services/Requests/useGetAnswer';

import iLeft from '@/assets/images/CharmArrowLeft.svg';
import iRight from '@/assets/images/CharmArrowRight.svg';

import Title from '@/components/IELTS/Title';

const index = () => {
  const dispatch = useAppDispatch()

  const flags = useAppSelector((state: any) => state.user.flag)
  const fontSize = useAppSelector((state: any) => state.user.fontSize)
  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state: any) => state.user.currentQuestion)

  const parts = [
    { title: "Part 1", description: "Listen and answer question 1-10." },
    { title: "Part 2", description: "Listen and answer question 11-20." },
    { title: "Part 3", description: "Listen and answer question 21-30." },
    { title: "Part 4", description: "Listen and answer question 31-40." },
  ]

  const [test_id, setTest_id] = useState<any>('')

  const { refetch: refetchGetAnswer, data: dataGetAnswer, isLoading, isSuccess } = useGetAnswer()

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

  console.log((answersAll))

  const [part, setPart] = useState(1)

  useEffect(() => {
    test_id && refetchGetAnswer()
    test_id && postAnswer.refetch()
  }, [part])

  useEffect(() => {
    setTest_id(localStorage.getItem('test_id'))
    test_id && refetchGetAnswer()
  }, [])

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

  useEffect(() => {
    if (currentQuestion == 11 || currentQuestion == 21 || currentQuestion == 31) {
      window.scrollTo(0, 0)
    }
  }, [currentQuestion])

  const options_15_20 = [
    { label: 'It is encouraged', value: "a" },
    { label: 'There are some restrictions', value: "b" },
    { label: 'It is against the rules', value: "c" },
  ]

  const listOptions = {
    "a": { id: "a", content: "A - use visuals" },
    "b": { id: "b", content: "B - keep it short" },
    "c": { id: "c", content: "C - involve other students" },
    "d": { id: "d", content: "D - check the information is accurate" },
    "e": { id: "e", content: "E - provide a handout" },
    "f": { id: "f", content: "F - focus on one example" },
    "g": { id: "g", content: "G - do online research" }
  }

  const columnsData = [
    {
      id: 26,
      title: "Historical background"
    },
    {
      id: 27,
      title: "Geographical factors"
    },
    {
      id: 28,
      title: "Past mistakes"
    },
    {
      id: 29,
      title: "Future risks"
    },
    {
      id: 30,
      title: "International implications"
    }
  ];

  return (
    <div>
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
        {isSuccess &&
          <>
            {part === 1 &&
              <>
                {/* ================================================================================ [01-10] */}
                <IELTSQuestionTitle from="1" to="10" type="1" />
                <IELTSTitle title="CRIME REPORT FORM" isHeader />
                {/************* [0] *************/}
                <IELTSTwoCol colLeft="Type of crime:" colRight="theft" />
                <IELTSTitle title="Personal information" />
                <Typography className='italic'>Example</Typography>
                <IELTSInput qn="0" colLeft="Name:" beforeInput="Louise" disabled placeholder="Taylor" />
                {/************* [1] *************/}
                <IELTSInput qn="1" colLeft="Nationality" />
                <IELTSTwoCol colLeft="Date of birth" colRight="14 Dec 1977" />
                <IELTSTwoCol colLeft="Occupation" colRight="interior designer" />
                {/************* [2] *************/}
                <IELTSInput qn="2" colLeft="Reason for visit" beforeInput=" business to buy antique" />
                <IELTSTwoCol colLeft="Length of staty" colRight="two months" />
                {/************* [3] *************/}
                <IELTSInput qn="3" colLeft="Current address" afterInput="Apartments (No 15)" />
                <IELTSTitle title="Details of theft" />
                {/************* [4] *************/}
                <IELTSInput qn="4" colLeft="items stolen" beforeInput=" – a wallet contains approximately £" />
                {/************* [5] *************/}
                <IELTSInput qn="5" colLeft="&nbsp;&nbsp;" beforeInput=" – " />
                {/************* [6] *************/}
                <IELTSInput qn="6" colLeft="Date of theft" />
                <IELTSTitle title="Possible time and place of theft" />
                {/************* [7] *************/}
                <IELTSInput qn="7" colLeft="Location" beforeInput="outside the" afterInput="am about 4 pm" />
                {/************* [8] *************/}
                <IELTSInput qn="8" colLeft="Details of suspect" beforeInput=" – some boys asked for the" afterInput="then ran off" />
                <IELTSTwoCol colLeft="&nbsp;&nbsp;" colRight=" – one had a T-shirt with a piction of tiger" />
                {/************* [9] *************/}
                <IELTSInput qn="9" colLeft="&nbsp;&nbsp;" beforeInput=" – he was about 12, slim build with" afterInput="hair" />
                {/************* [10] *************/}
                <IELTSTitle title="Crime reference number allocated" />
                <IELTSInput qn="10" colLeft="&nbsp;&nbsp;" />
              </>
            }

            {part === 2 &&
              <>
                {/* ================================================================================ [11-14] */}
                <IELTSQuestionTitle from="11" to="14" type="2" />
                {/************* [11-12] *************/}
                <IELTSMultiCheckbox
                  qn="11"
                  question="pieces of advice for the first week of an apprenticeship does the manager give?"
                  checkList={[
                    { label: 'get to know colleagues', value: "a", },
                    { label: 'learn from any mistakes', value: "b", },
                    { label: 'ask lots of questions', value: "c" },
                    { label: 'react positively to feedback', value: "d", },
                    { label: 'enjoy new challenges', value: "e", },
                  ]}
                />
                {/************* [13-14] *************/}
                <IELTSMultiCheckbox
                  qn="13"
                  question="things does the manager say mentors can help with?"
                  checkList={[
                    { label: 'confidence-building', value: "a", },
                    { label: 'making career plans', value: "b", },
                    { label: 'completing difficult tasks', value: "c" },
                    { label: 'making a weekly timetable', value: "d", },
                    { label: 'reviewing progress', value: "e", },
                  ]}
                />
                {/* ================================================================================ [15-20] */}
                <IELTSQuestionTitle from="15" to="20" type="3" />
                {/************* [15] *************/}
                <IELTSRadio
                  qn="15"
                  question="Using the internet"
                  options={options_15_20}
                />
                {/************* [16] *************/}
                <IELTSRadio
                  qn="16"
                  question="Flexible working"
                  options={options_15_20}
                />
                {/************* [17] *************/}
                <IELTSRadio
                  qn="17"
                  question="Booking holidays"
                  options={options_15_20}
                />
                {/************* [18] *************/}
                <IELTSRadio
                  qn="18"
                  question="Working overtime"
                  options={options_15_20}
                />
                {/************* [19] *************/}
                <IELTSRadio
                  qn="19"
                  question="Wearing trainers"
                  options={options_15_20}
                />
                {/************* [20] *************/}
                <IELTSRadio
                  qn="20"
                  question="Bringing food to work"
                  options={options_15_20}
                />
              </>
            }

            {part === 3 &&
              <>
                {/* ================================================================================ [21-25] */}
                <IELTSQuestionTitle from="21" to="25" type="3" />
                {/************* [21] *************/}
                <IELTSRadio
                  qn="21"
                  question="Carla and Rob were surprised to learn that coastal cities"
                  options={[
                    { label: 'contain nearly half the world’s population.', value: "a" },
                    { label: 'include most of the world’s largest cities.', value: "b" },
                    { label: 'are growing twice as fast as other cities.', value: "c" },
                  ]}
                />
                {/************* [22] *************/}
                <IELTSRadio
                  qn="22"
                  question="According to Rob, building coastal cities near to rivers"
                  options={[
                    { label: 'may bring pollution to the cities.', value: "a" },
                    { label: 'may reduce the land available for agriculture.', value: "b" },
                    { label: 'may mean the countryside is spoiled by industry.', value: "c" },
                  ]}
                />
                {/************* [23] *************/}
                <IELTSRadio
                  qn="23"
                  question="What mistake was made when building water drainage channels in Miami in the 1950s?"
                  options={[
                    { label: 'may bring pollution to the cities.', value: "a" },
                    { label: 'may reduce the land available for agriculture.', value: "b" },
                    { label: 'may mean the countryside is spoiled by industry.', value: "c" },
                  ]}
                />
                {/************* [24] *************/}
                <IELTSRadio
                  qn="24"
                  question="What do Rob and Carla think that the authorities in Miami should do immediately?"
                  options={[
                    { label: 'take measures to restore ecosystems', value: "a" },
                    { label: 'pay for a new flood prevention system', value: "b" },
                    { label: 'stop disposing of waste materials into the ocean', value: "c" },
                  ]}
                />
                {/************* [25] *************/}
                <IELTSRadio
                  qn="25"
                  question="What do they agree should be the priority for international action?"
                  options={[
                    { label: 'greater coordination of activities', value: "a" },
                    { label: 'more sharing of information', value: "b" },
                    { label: 'agreement on shared policies', value: "c" },
                  ]}
                />

                {/* ================================================================================ [26-30] */}
                <IELTSQuestionTitle from="26" to="30" type="3" />

                {/************* [26-30] *************/}
                {/* <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap" sx={{ py: 1 }}>
                  <Paper elevation={0}>
                    <Typography>
                      <strong> 26-30 </strong>
                      <Typography sx={{ px: 1 }}> What decision do the students make about each of the following parts of their presentation? </Typography>
                    </Typography>
                  </Paper>
                  <Paper elevation={0}>
                    <Stack direction="row" alignItems="center">
                    </Stack>
                  </Paper>
                </Stack> */}
                <IELTSDrag listOptions={listOptions} columnsData={columnsData} question="What decision do the students make about each of the following parts of their presentation?" />

              </>
            }

            {part === 4 &&
              <>
                {/* ================================================================================ [31-40] */}
                <IELTSQuestionTitle from="31" to="40" type="4" />
                <IELTSTitle title="CRIME REPORT FORM" isHeader />
                {/************* [31] *************/}
                <IELTSTitle title="Introduction" />
                <IELTSInput qn="31" beforeInput="More energy required because of growth in population and" />
                <IELTSTitle title="What’s needed:" />
                <Typography>● renewable energy sources</Typography>
                <Typography sx={{ mb: 2 }}>● methods that won’t create pollution</Typography>
                <IELTSTitle title="Wave energy" />
                {/************* [32] *************/}
                <IELTSInput qn="32" beforeInput="Advantage: waves provide a" afterInput="source of renewable energy" />
                <Typography>
                  Electricity can be generated using offshore or onshore systems
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Onshore systems may use a reservoir
                </Typography>
                <IELTSTitle title="Problems:" />
                {/************* [33] *************/}
                <IELTSInput qn="33" beforeInput="● waves can move in any" />
                {/************* [34] *************/}
                <IELTSInput qn="34" beforeInput="● movement of sand, etc. on the" afterInput="of the ocean may be affected" />
                <IELTSTitle title="Tidal energy" />
                {/************* [35] *************/}
                <IELTSInput qn="35" beforeInput="Tides are more" afterInput="than waves" />
                <Typography>
                  Planned tidal lagoon in Wales:
                </Typography>
                {/************* [36] *************/}
                <IELTSInput qn="36" beforeInput="● will be created in a" afterInput="at Swansea" />
                <Typography>
                  ● breakwater (dam) containing 16 turbines
                </Typography>
                <Typography>
                  ● rising tide forces water through turbines, generating electricity
                </Typography>
                {/************* [37] *************/}
                <IELTSInput qn="37" beforeInput="● stored water is released through" afterInput="at Swansea" />
                <IELTSTitle title="Advantages:" />
                <IELTSTitle title="not dependent on weather" />
                {/************* [38] *************/}
                <IELTSInput qn="38" beforeInput="● no" afterInput="is required to make it work" />
                {/************* [39] *************/}
                <IELTSInput qn="39" beforeInput="● likely to create a number of" />
                {/************* [40] *************/}
                <IELTSInput qn="40" beforeInput="● may harm fish and birds, e.g. by affecting" afterInput="and building up silt" />
                <IELTSTitle title="Ocean thermal energy conversion:" />
                <Typography>
                  Uses a difference in temperature between the surface and lower levels
                </Typography>
                <Typography>
                  Water brought to the surface in a pipe
                </Typography>
              </>
            }
          </>
        }
      </div>
      <IELTSPartNavigation part={part} />
    </div>
  );
};

export default index;