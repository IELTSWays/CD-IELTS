import React from 'react';
import { useState, useEffect } from 'react'

import { useQuery } from "@tanstack/react-query";
import axiosInstance from '@/services/API'

import Typography from '@mui/material/Typography';

import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion } from '@/store/slices/user/userSlice'

import IELTSParts from '@/components/IELTS/IELTSParts';
import IELTSTitle from '@/components/IELTS/IELTSTitle';
import IELTSArrows from '@/components/IELTS/IELTSArrows';
import IELTSInput from '@/components/IELTS/QuestionTypes/IELTSInput';
import IELTSRadio from '@/components/IELTS/QuestionTypes/IELTSRadio';
import IELTSTableOptionsLabel from '@/components/IELTS/QuestionTypes/IELTSTableOptionsLabel';
import IELTSQuestionTitle from '@/components/IELTS/IELTSQuestionTitle';
import IELTSPartNavigation from '@/components/IELTS/IELTSPartNavigation';
import useGetAnswer from '@/services/Requests/useGetAnswer';

import DND_16_20 from './DND_16_20'

const index = () => {
  const dispatch = useAppDispatch()

  const fontSize = useAppSelector((state: any) => state.user.fontSize)
  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state: any) => state.user.currentQuestion)

  const [test_id, setTest_id] = useState<any>('')

  const { refetch: refetchGetAnswer, data: isLoading, isSuccess } = useGetAnswer()

  const postAnswer = useQuery({
    enabled: false,
    queryKey: ['postAnswer'],
    queryFn: async () => {
      const response = await axiosInstance.post(`exam/answer/${localStorage.getItem('test_id')}`, {
        "test_done": false,
        "confirm": true,
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
    localStorage.getItem('test_id') && refetchGetAnswer()
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
    dispatch(setCurrentQuestion(+currentQuestion - 1))
  }

  const handleNext = () => {
    dispatch(setCurrentQuestion(+currentQuestion + 1))
  }

  useEffect(() => {
    if (currentQuestion == 11 || currentQuestion == 21 || currentQuestion == 31 || currentQuestion == 101) {
      window.scrollTo(0, 0)
    }
  }, [currentQuestion])

  return (
    <div id={localStorage.getItem('test_skill')}>
      <IELTSParts part={part} skill={localStorage.getItem('test_skill')} />

      <div className={`ielts-container full-w ${fontSize}`} id="ielts-list-text-input">
        <IELTSArrows handlePrevious={handlePrevious} handleNext={handleNext} />

        {isLoading && <div> LOADING... </div>}
        {isSuccess &&
          <>
            {part === 1 &&
              <>
                {/* ================================================================================ [01-06] */}
                <IELTSQuestionTitle from="1" to="6" type="16" />
                <strong>Free activities in the Burnham area</strong>
                {/************* [0] *************/}
                <Typography className='italic'>Example</Typography>
                ....

                {/************* [1] *************/}
                <IELTSRadio
                  qn="1"
                  question="The ‘Family Welcome’ event in the art gallery begins at"
                  options={[
                    { label: '10 am.', value: "a" },
                    { label: '10.30 am.', value: "b" },
                    { label: '2 pm.', value: "c" },
                  ]}
                />

                {/************* [2] *************/}
                <IELTSRadio
                  qn="2"
                  question="The film that is now shown in the ‘Family Welcome’ event is about"
                  options={[
                    { label: 'sculpture.', value: "a" },
                    { label: 'painting.', value: "b" },
                    { label: 'ceramics.', value: "c" },
                  ]}
                />

                {/************* [3] *************/}
                <IELTSRadio
                  qn="3"
                  question="When do most of the free concerts take place?"
                  options={[
                    { label: 'in the morning.', value: "a" },
                    { label: 'at lunchtime.', value: "b" },
                    { label: 'in the evening.', value: "c" },
                  ]}
                />

                {/************* [4] *************/}
                <IELTSRadio
                  qn="4"
                  question="Where will the 4 pm concert of Latin American music take place?"
                  options={[
                    { label: 'in a museum.', value: "a" },
                    { label: 'in a theatre.', value: "b" },
                    { label: 'in a library.', value: "c" },
                  ]}
                />

                {/************* [5] *************/}
                <IELTSRadio
                  qn="5"
                  question="The boat race begins at"
                  options={[
                    { label: 'Summer Pool.', value: "a" },
                    { label: 'Charlesworth Bridge.', value: "b" },
                    { label: 'Offord Marina.', value: "c" },
                  ]}
                />

                {/************* [6] *************/}
                <IELTSRadio
                  qn="6"
                  question="One of the boat race teams"
                  options={[
                    { label: 'won a regional competition earlier this year.', value: "a" },
                    { label: 'has represented the region in a national competition.', value: "b" },
                    { label: 'has won several regional competitions.', value: "c" },
                  ]}
                />

                {/* ================================================================================ [07-10] */}
                <IELTSQuestionTitle from="7" to="10" type="1" />
                <IELTSTitle title="Paxton Nature Reserve" isHeader />
                {/************* [7] *************/}
                <IELTSInput qn="7" beforeInput="Paxton is a good place for seeing rare" afterInput="all year round." />
                {/************* [8] *************/}
                <IELTSInput qn="8" beforeInput="This is a particularly good time for seeing certain unusual " />
                {/************* [9] *************/}
                <IELTSInput qn="9" beforeInput="Visitors will be able to learn about" afterInput="and then collect some." />
                {/************* [10] *************/}
                <IELTSInput qn="10" beforeInput="Part of the" afterInput="has been made suitable for swimming." />
              </>
            }

            {part === 2 &&
              <>
                {/* ================================================================================ [11-15] */}
                <IELTSQuestionTitle from="11" to="15" type="16" />
                <strong>Changes in Barford over the last 50 years</strong>

                {/************* [11] *************/}
                <IELTSRadio
                  qn="11"
                  question="In Shona’s opinion, why do fewer people use buses in Barford these days?"
                  options={[
                    { label: 'The buses are old and uncomfortable.', value: "a" },
                    { label: 'Fares have gone up too much.', value: "b" },
                    { label: 'There are not so many bus routes.', value: "c" },
                  ]}
                />

                {/************* [12] *************/}
                <IELTSRadio
                  qn="12"
                  question="What change in the road network is known to have benefited the town most?"
                  options={[
                    { label: 'the construction of a bypass.', value: "a" },
                    { label: 'the development of cycle paths.', value: "b" },
                    { label: 'the banning of cars from certain streets.', value: "c" },
                  ]}
                />

                {/************* [13] *************/}
                <IELTSRadio
                  qn="13"
                  question="What is the problem affecting shopping in the town centre?"
                  options={[
                    { label: 'lack of parking spaces.', value: "a" },
                    { label: 'lack of major retailers.', value: "b" },
                    { label: 'lack of restaurants and cafés.', value: "c" },
                  ]}
                />

                {/************* [14] *************/}
                <IELTSRadio
                  qn="14"
                  question="What does Shona say about medical facilities in Barford?"
                  options={[
                    { label: 'There is no hospital.', value: "a" },
                    { label: 'New medical practices are planned.', value: "b" },
                    { label: 'The number of dentists is too low.', value: "c" },
                  ]}
                />

                {/************* [15] *************/}
                <IELTSRadio
                  qn="15"
                  question="The largest number of people are employed in"
                  options={[
                    { label: 'manufacturing.', value: "a" },
                    { label: 'services.', value: "b" },
                    { label: 'education.', value: "c" },
                  ]}
                />

                {/* ================================================================================ [16-20] */}
                <IELTSQuestionTitle
                  from="16"
                  to="20"
                  title="What is planned for each of the following facilities?"
                  numberOfAnswers="five"
                  alphabet="g"
                  type="200"
                />
                <DND_16_20/>
              </>
            }

            {part === 3 &&
              <>
                {/* ================================================================================ [21-26] */}
                <strong> 21 - 26 - Table </strong>
                {/* ================================================================================ [27-30] */}
                <IELTSQuestionTitle
                  from="27"
                  to="30"
                  title="Who is going to write each of the following parts of the report?"
                  alphabet="d"
                  type="204"
                />
                {/************* [27-30] *************/}
                <IELTSTableOptionsLabel
                  questions={
                    [
                      { id: 27, title: 'how they planned the project' },
                      { id: 28, title: 'how they had ideas for their stories' },
                      { id: 29, title: 'an interpretation of their stories' },
                      { id: 30, title: 'comments on the illustrations' },
                    ]
                  }
                  topLabels={[
                    { title: "Helen only" },
                    { title: "Jeremy only" },
                    { title: "both Helen and Jeremy" },
                    { title: "neither Helen nor Jeremy" },
                  ]
                  }
                  options={
                    [
                      { label: 'A', value: "a", },
                      { label: 'B', value: "b", },
                      { label: 'C', value: "c", },
                      { label: 'D', value: "d", },
                    ]
                  }
                />
              </>
            }

            {part === 4 &&
              <>
                {/* ================================================================================ [31-40] */}
                <IELTSQuestionTitle from="31" to="40" type="1" />
                <IELTSTitle title="ETHNOGRAPHY IN BUSINESS" isHeader />
                <Typography>
                  Ethnography: research which explores human cultures
                </Typography>
                <Typography>
                  It can be used in business:
                </Typography>
                {/************* [31] *************/}
                <IELTSInput qn="31" beforeInput="●   to investigate customer needs and" />
                <Typography>
                  ●   to help companies develop new designs
                </Typography>
                <IELTSTitle title="Examples of ethnographic research in business" />
                <Typography>
                  Kitchen equipment
                </Typography>
                {/************* [32] *************/}
                <IELTSInput qn="32" beforeInput="●   Researchers found that cooks could not easily see the" afterInput="in measuring cups." />
                <Typography>
                  Cell phones
                </Typography>
                <Typography>
                  ●   In Uganda, customers paid to use the cell phones of entrepreneurs.
                </Typography>
                {/************* [33] *************/}
                <IELTSInput qn="33" beforeInput="●   These customers wanted to check the" afterInput="used." />
                <Typography>
                  Computer companies
                </Typography>
                {/************* [34] *************/}
                <IELTSInput qn="34" beforeInput="●   There was a need to develop " afterInput="to improve communication between system administrators and colleagues." />
                <Typography>
                  Hospitals
                </Typography>
                {/************* [35] *************/}
                <IELTSInput qn="35" beforeInput="●   Nurses needed to access information about" afterInput="in different parts of the hospital." />
                <Typography>
                  Airlines
                </Typography>
                {/************* [36] *************/}
                <IELTSInput qn="36" beforeInput="●   Respondents recorded information about their" afterInput="while travelling." />
                <IELTSTitle title="Principles of ethnographic research in business" />
                <Typography>
                  ●   The researcher does not start off with a hypothesis.
                </Typography>
                {/************* [37] *************/}
                <IELTSInput qn="37" beforeInput="●   Participants may be selected by criteria such as " afterInput="or product used." />
                {/************* [38] *************/}
                <IELTSInput qn="38" beforeInput="●   The participants must feel" afterInput="about taking part in the research." />
                {/************* [39] *************/}
                <IELTSInput qn="39" beforeInput="●   There is usually direct" afterInput="of the participants." />
                <Typography>
                  ●   The interview is guided by the participant.
                </Typography>
                {/************* [40] *************/}
                <IELTSInput qn="40" beforeInput="●   A lot of time is needed for the " afterInput="of the data." />
                <Typography>
                  ●   Researchers look for a meaningful pattern in the data.
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