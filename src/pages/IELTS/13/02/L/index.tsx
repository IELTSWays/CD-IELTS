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
import IELTSMultiCheckbox from '@/components/IELTS/QuestionTypes/IELTSMultiCheckbox';
import IELTSQuestionTitle from '@/components/IELTS/IELTSQuestionTitle';
import IELTSPartNavigation from '@/components/IELTS/IELTSPartNavigation';

import useGetAnswer from '@/services/Requests/useGetAnswer';

import DND_26_30 from './DND_26_30'

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
    if (currentQuestion == 19 || currentQuestion == 21) {
      dispatch(setCurrentQuestion(+currentQuestion - 2))
    }
    else {
      dispatch(setCurrentQuestion(+currentQuestion - 1))
    }
  }

  const handleNext = () => {
    if (currentQuestion == 17 || currentQuestion == 19) {
      dispatch(setCurrentQuestion(+currentQuestion + 2))
    }
    else {
      dispatch(setCurrentQuestion(+currentQuestion + 1))
    }
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
                {/* ================================================================================ [01-10] */}
                <IELTSQuestionTitle from="1" to="10" type="1" />
                <IELTSTitle title="South City Cycling Club" isHeader />
                {/************* [0] *************/}
                <Typography className='italic'>Example</Typography>
                <IELTSInput qn="0" beforeInput="Name of club secretary: Jim" disabled placeholder="Hunter" />
                <IELTSTitle title="Membership" />
                {/************* [1] *************/}
                <IELTSInput qn="1" beforeInput="●   Full membership costs $260; this covers cycling and" afterInput="all over Australia" />
                <Typography>
                  ●   Recreational membership costs $108
                </Typography>
                {/************* [2] *************/}
                <IELTSInput qn="2" beforeInput="●   Cost of membership includes the club fee and" />
                {/************* [3] *************/}
                <IELTSInput qn="3" beforeInput="●   The club kit is made by a company called" />
                <IELTSTitle title="Training rides" />
                <Typography>
                  ●   Chance to improve cycling skills and fitness
                </Typography>
                {/************* [4] *************/}
                <IELTSInput qn="4" beforeInput="●   Level B: speed about" afterInput="kph" />
                <Typography>
                  ●   Weekly sessions
                </Typography>
                {/************* [5] *************/}
                <IELTSInput qn="5" beforeInput="     –  Tuesdays at 5.30 am, meet at the" />
                {/************* [6] *************/}
                <IELTSTitle title="Accommodation" />
                <IELTSInput qn="6" beforeInput="     –  Thursdays at 5.30 am, meet at the entrance to the" />
                <IELTSTitle title="Further information" />
                <Typography>
                  ●   Rides are about an hour and a half
                </Typography>
                {/************* [7] *************/}
                <IELTSInput qn="7" beforeInput="●   Members often have" afterInput="together afterwards" />
                {/************* [8] *************/}
                <IELTSInput qn="8" beforeInput="●   There is not always a" afterInput="with the group on these rides" />
                {/************* [9] *************/}
                <IELTSInput qn="9" beforeInput="●   Check and print the" afterInput="on the website beforehand" />
                {/************* [10] *************/}
                <IELTSInput qn="10" beforeInput="●   Bikes must have" />
              </>
            }

            {part === 2 &&
              <>
                {/* ================================================================================ [11-16] */}
                <IELTSQuestionTitle from="11" to="16" type="16" />
                <strong>Information on company volunteering projects</strong>

                {/************* [11] *************/}
                <IELTSRadio
                  qn="11"
                  question="How much time for volunteering does the company allow per employee?"
                  options={[
                    { label: 'two hours per week', value: "a" },
                    { label: 'one day per month', value: "b" },
                    { label: '8 hours per year', value: "c" },
                  ]}
                />
                {/************* [12] *************/}
                <IELTSRadio
                  qn="12"
                  question="In feedback almost all employees said that volunteering improved their"
                  options={[
                    { label: 'chances of promotion.', value: "a" },
                    { label: 'job satisfaction.', value: "b" },
                    { label: 'relationships with colleagues.', value: "c" },
                  ]}
                />
                {/************* [13] *************/}
                <IELTSRadio
                  qn="13"
                  question="Last year some staff helped unemployed people with their"
                  options={[
                    { label: 'literacy skills.', value: "a" },
                    { label: 'job applications.', value: "b" },
                    { label: 'communication skills.', value: "c" },
                  ]}
                />
                {/************* [14] *************/}
                <IELTSRadio
                  qn="14"
                  question="This year the company will start a new volunteering project with a local"
                  options={[
                    { label: 'school.', value: "a" },
                    { label: 'park.', value: "b" },
                    { label: 'charity.', value: "c" },
                  ]}
                />
                {/************* [15] *************/}
                <IELTSRadio
                  qn="15"
                  question="Where will the Digital Inclusion Day be held?"
                  options={[
                    { label: 'at the company’s training facility', value: "a" },
                    { label: 'at a college', value: "b" },
                    { label: 'in a community centre', value: "c" },
                  ]}
                />
                {/************* [16] *************/}
                <IELTSRadio
                  qn="16"
                  question="What should staff do if they want to take part in the Digital Inclusion Day?"
                  options={[
                    { label: 'fill in a form', value: "a" },
                    { label: 'attend a training workshop', value: "b" },
                    { label: 'get permission from their manager', value: "c" },
                  ]}
                />

                {/* ================================================================================ [17-18] */}
                <IELTSQuestionTitle from="17" to="18" type="15" />
                {/************* [17-18] *************/}
                <IELTSMultiCheckbox
                  qn="17"
                  question="What TWO things are mentioned about the participants on the last Digital Inclusion Day?"
                  checkList={[
                    { label: 'They were all over 70.', value: "a", },
                    { label: 'They never used their computer.', value: "b", },
                    { label: 'Their phones were mostly old-fashioned.', value: "c", },
                    { label: 'They only used their phones for making calls.', value: "d", },
                    { label: 'They initially showed little interest.', value: "e", },
                  ]}
                />

                {/* ================================================================================ [19-20] */}
                <IELTSQuestionTitle from="19" to="20" type="15" />
                {/************* [19-20] *************/}
                <IELTSMultiCheckbox
                  qn="19"
                  question="What TWO activities on the last Digital Inclusion Day did participants describe as useful?"
                  checkList={[
                    { label: 'learning to use tables', value: "a", },
                    { label: 'communicating with family', value: "b", },
                    { label: 'shopping online', value: "c", },
                    { label: 'playing online games', value: "d", },
                    { label: 'sending emails', value: "e", },
                  ]}
                />
              </>
            }

            {part === 3 &&
              <>
                {/* ================================================================================ [21-25] */}
                <IELTSQuestionTitle from="21" to="25" type="16" />
                <strong>Planning a presentation on nanotechnology</strong>

                {/************* [21] *************/}
                <IELTSRadio
                  qn="21"
                  question="Russ says that his difficulty in planning the presentation is due to"
                  options={[
                    { label: 'his lack of knowledge about the topic.', value: "a" },
                    { label: 'his uncertainly about what he should try to achieve.', value: "b" },
                    { label: 'the short time that he has for preparation.', value: "c" },
                  ]}
                />
                {/************* [22] *************/}
                <IELTSRadio
                  qn="22"
                  question="Russ and his tutor agree that his approach in the presentation will be"
                  options={[
                    { label: 'to concentrate on how nanotechnology is used in one field.', value: "a" },
                    { label: 'to follow the chronological development of nanotechnology.', value: "b" },
                    { label: 'to show the range of applications of nanotechnology.', value: "c" },
                  ]}
                />
                {/************* [23] *************/}
                <IELTSRadio
                  qn="23"
                  question="In connection with slides, the tutor advises Russ to"
                  options={[
                    { label: 'talk about things that he can find slides to illustrate.', value: "a" },
                    { label: 'look for slides to illustrate the points he makes.', value: "b" },
                    { label: 'consider omitting slides altogether.', value: "c" },
                  ]}
                />
                {/************* [24] *************/}
                <IELTSRadio
                  qn="24"
                  question="They both agree that the best way for Russ to start his presentation is"
                  options={[
                    { label: 'to encourage the audience to talk.', value: "a" },
                    { label: 'to explain what Russ intends to do.', value: "b" },
                    { label: 'to provide an example.', value: "c" },
                  ]}
                />
                {/************* [25] *************/}
                <IELTSRadio
                  qn="25"
                  question="What does the tutor advise Russ to do next while preparing his presentation?"
                  options={[
                    { label: 'summarise the main point he wants to make', value: "a" },
                    { label: 'read the notes he has already made', value: "b" },
                    { label: 'list the topics he wants to cover', value: "c" },
                  ]}
                />
                {/* ================================================================================ [26-30] */}
                <IELTSQuestionTitle
                  from="26"
                  to="30"
                  title="What comments do the speakers make about each of the following aspects of Russ’s previous presentation?"
                  numberOfAnswers="four"
                  alphabet="g"
                  type="200"
                />
                {/************* [26-30] *************/}
                <DND_26_30 />
              </>
            }

            {part === 4 &&
              <>
                {/* ================================================================================ [31-40] */}
                <IELTSQuestionTitle from="31" to="40" type="1" />
                <IELTSTitle title="Episodic memory" />
                {/************* [31] *************/}
                <IELTSInput qn="31" beforeInput="●   the ability to recall details, e.g. the time and" />
                {/************* [32] *************/}
                <IELTSInput qn="32" beforeInput="●   different to semantic memory – the ability to remember general information about the" />
                {/************* [33] *************/}
                <IELTSInput qn="33" beforeInput=", which does not involve recalling" afterInput="information" noDefaultSpacing />
                <IELTSTitle title="Forming episodic memories involves three steps:" />
                <IELTSTitle title="Encoding" />
                <Typography>
                  ●   involves receiving and processing information
                </Typography>
                {/************* [34] *************/}
                <IELTSInput qn="34" beforeInput="●   the more" afterInput="given to an event, the more successfully it can be encoded" />
                {/************* [35] *************/}
                <IELTSTitle title="Tests:" />
                <IELTSInput qn="35" beforeInput="●   to remember a" afterInput=", it is useful to have a strategy for encoding such information" />
                <IELTSTitle title="Consolidation" />
                <Typography>
                  ●   how memories are strengthened and stored
                </Typography>
                {/************* [36] *************/}
                <IELTSInput qn="36" beforeInput=" ● " afterInput="●   most effective when memories can be added to a" afterInput="of related information" />
                {/************* [37] *************/}
                <IELTSInput qn="37" beforeInput="●   the" afterInput="of retrieval affects the strength of memories" />
                <IELTSTitle title="Retrieval" />
                {/************* [38] *************/}
                <IELTSInput qn="38" beforeInput="●   memory retrieval often depends on using a prompt, e.g. the" afterInput="of an object near to the place where you left your car" />
                <IELTSTitle title="Episodic memory impairments" />
                <Typography>
                  ●   these affect people with a wide range of medical conditions
                </Typography>
                {/************* [39] *************/}
                <IELTSInput qn="39" beforeInput="●   games which stimulate the" afterInput="have been found to help people with schizophrenia" />
                {/************* [40] *************/}
                <IELTSInput qn="40" beforeInput="●   children with autism may have difficulty forming episodic memories – possibly because their concept of the" afterInput="may be absent" />
                <Typography>
                  ●   memory training may help autistic children develop social skills
                </Typography>
                <Typography>
                  &nbsp;&nbsp;
                </Typography>
              </>
            }
          </>
        }
      </div>
      <IELTSPartNavigation part={part} />
    </div >
  );
};

export default index;