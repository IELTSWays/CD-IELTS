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
import IELTSTableOptionsLabel from '@/components/IELTS/QuestionTypes/IELTSTableOptionsLabel';
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
    if (currentQuestion == 13) {
      dispatch(setCurrentQuestion(+currentQuestion - 2))
    }
    else {
      dispatch(setCurrentQuestion(+currentQuestion - 1))
    }
  }

  const handleNext = () => {
    if (currentQuestion == 11) {
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
                <IELTSTitle title="Early Learning Childcare Centre" isHeader />
                <IELTSTitle title="Enrolment Form" isHeader />
                {/************* [0] *************/}
                <Typography className='italic'>Example</Typography>
                <IELTSInput qn="0" beforeInput="Parent or guardian: Carol" disabled placeholder="Smith" />
                <IELTSTitle title="Personal Details" />
                {/************* [1] *************/}
                <IELTSInput qn="1" beforeInput="Age:" />
                {/************* [2] *************/}
                <IELTSInput qn="8" beforeInput="Address:" afterInput="Road, Woodside, 4032" />
                <Typography>
                  Phone: 3345 9865
                </Typography>
                <IELTSTitle title="Childcare Information" />
                {/************* [3] *************/}
                <IELTSInput qn="3" beforeInput="Days enrolled for: Monday and" />
                {/************* [4] *************/}
                <IELTSInput qn="4" beforeInput="Start time:" afterInput="am" />
                {/************* [5] *************/}
                <IELTSInput qn="5" beforeInput="Childcare group: the" afterInput="group" />
                {/************* [6] *************/}
                <IELTSTitle title="Which meal/s are required each day? " />
                {/************* [7] *************/}
                <IELTSInput on="7" beforeInput="Medical conditions: needs " />
                {/************* [8] *************/}
                <IELTSInput an="8" beforeInput="Emergency contact: Jenny" afterInput="Phone: 3346 7523" />
                {/************* [9] *************/}
                <IELTSInput qn="9" beforeInput="Relationship to child:" />
                {/************* [10] *************/}
                <IELTSTitle title="Fees" />
                <IELTSInput qn="10" beforeInput="Will pay each " />
              </>
            }

            {part === 2 &&
              <>
                {/* ================================================================================ [11-12] */}
                <IELTSQuestionTitle from="11" to="12" type="15" />
                {/************* [11-12] *************/}
                <IELTSMultiCheckbox
                  qn="11"
                  question="Which TWO things does Alice say about the Dolphin Conservation Trust?"
                  checkList={[
                    { label: 'Children make up most of the membership.', value: "a", },
                    { label: 'It’s the country’s largest conservation organisation.', value: "b", },
                    { label: 'It helps finance campaigns for changes in fishing practices.', value: "c", },
                    { label: 'It employs several dolphin experts full-time.', value: "d", },
                    { label: 'Volunteers help in various ways.', value: "e", },
                  ]}
                />

                {/* ================================================================================ [13-15] */}
                <IELTSQuestionTitle from="13" to="15" type="16" />
                {/************* [13] *************/}
                <IELTSRadio
                  qn="13"
                  question="Why is Alice so pleased the Trust has won the Charity Commission award?"
                  options={[
                    { label: 'It has brought in extra money.', value: "a" },
                    { label: 'It made the work of the trust better known.', value: "b" },
                    { label: 'It has attracted more members.', value: "c" },
                  ]}
                />

                {/************* [14] *************/}
                <IELTSRadio
                  qn="14"
                  question="Alice says oil exploration causes problems to dolphins because of"
                  options={[
                    { label: 'noise.', value: "a" },
                    { label: 'oil leaks.', value: "b" },
                    { label: 'movement of ships', value: "c" },
                  ]}
                />

                {/************* [15] *************/}
                <IELTSRadio
                  qn="15"
                  question="Alice became interested in dolphins when"
                  options={[
                    { label: 'she saw one swimming near her home.', value: "a" },
                    { label: 'she heard a speaker at her school.', value: "b" },
                    { label: 'she read a book about them.', value: "c" },
                  ]}
                />

                {/* ================================================================================ [16-20] */}
                <IELTSQuestionTitle
                  from="16"
                  to="20"
                  title="Which feature is related to each of the following areas of the world represented in the playground?"
                  type="201"
                />
                {/************* [16-20] *************/}
                <IELTSTableOptionsLabel
                  questions={
                    [
                      { id: 16, title: 'It has not been seen this year.' },
                      { id: 17, title: 'It is photographed more than the others.' },
                      { id: 18, title: 'It is always very energetic.' },
                      { id: 19, title: 'It is the newest one in the scheme' },
                      { id: 20, title: 'It has an unusual shape.' },
                    ]
                  }
                  topLabels={[
                    { title: "Moondancer" },
                    { title: "Echo" },
                    { title: "Kiwi" },
                    { title: "Samson" },
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

            {part === 3 &&
              <>
                {/* ================================================================================ [21-25] */}
                <IELTSQuestionTitle from="21" to="25" type="16" />
                <strong>Theatre Studies Course</strong>
                {/************* [21] *************/}
                <IELTSRadio
                  qn="21"
                  question="What helped Rob to prepare to play the character of a doctor?"
                  options={[
                    { label: 'the stories his grandfather told him', value: "a" },
                    { label: 'the times when he watched his grandfather working', value: "b" },
                    { label: 'the way he imagined his grandfather at work', value: "c" },
                  ]}
                />
                {/************* [22] *************/}
                <IELTSRadio
                  qn="22"
                  question="In the play’s first scene, the boredom of village life was suggested by"
                  options={[
                    { label: 'repetition of words and phrases.', value: "a" },
                    { label: 'scenery painted in dull colours.', value: "b" },
                    { label: 'long pauses within conversations.', value: "c" },
                  ]}
                />
                {/************* [23] *************/}
                <IELTSRadio
                  qn="23"
                  question="What has Rob learned about himself through working in a group?"
                  options={[
                    { label: 'He likes to have clear guidelines.', value: "a" },
                    { label: 'He copes well with stress.', value: "b" },
                    { label: 'He thinks he is a good leader.', value: "c" },
                  ]}
                />
                {/************* [24] *************/}
                <IELTSRadio
                  qn="24"
                  question="To support the production, research material was used which described"
                  options={[
                    { label: 'political developments.', value: "a" },
                    { label: 'changing social attitudes.', value: "b" },
                    { label: 'economic transformations.', value: "c" },
                  ]}
                />
                {/************* [25] *************/}
                <IELTSRadio
                  qn="25"
                  question="What problem did the students overcome in the final rehearsal?"
                  options={[
                    { label: 'one person forgetting their words', value: "a" },
                    { label: 'an equipment failure', value: "b" },
                    { label: 'the injury of one character', value: "c" },
                  ]}
                />
                {/* ================================================================================ [26-30] */}
                <IELTSQuestionTitle
                  from="16"
                  to="20"
                  title="What information is given about each of the following activities on offer?"
                  numberOfAnswers="five"
                  alphabet="g"
                  type="200"
                />
                {/************* [16-20] *************/}
                <DND_26_30 />
              </>
            }

            {part === 4 &&
              <>
                <IELTSQuestionTitle from="31" to="40" type="1" />
                <IELTSTitle title="Self-regulatory focus theory’ and leadership" isHeader />
                <IELTSTitle title="Self-regulatory focus theory" />
                <Typography>
                  People’s focus is to approach pleasure or avoid pain
                </Typography>
                {/************* [31] *************/}
                <IELTSInput qn="31" beforeInput="Promotion goals focus on" />
                {/************* [32] *************/}
                <Typography>
                  Prevention goals emphasise avoiding punishment
                </Typography>
                <Typography>
                  Factors that affect people’s focus
                </Typography>
                <IELTSTitle title="The Chronic Factor" />
                {/************* [32] *************/}
                <IELTSInput qn="32" beforeInput="●   comes from one’s" />
                {/************* [33] *************/}
                <IELTSInput qn="33" beforeInput="The" afterInput="Factor" />
                {/************* [34] *************/}
                <IELTSInput qn="34" beforeInput="●   we are more likely to focus on promotion goals when with a" />
                <Typography>
                  ●   we are more likely to focus on prevention goals with our boss
                </Typography>
                {/************* [35] *************/}
                <IELTSTitle title="How people’s focus affects them" />
                <IELTSInput qn="35" beforeInput="Promotion Focus: People think about an ideal version of themselves, their" afterInput="and their gains." />
                <Typography>
                  Prevention Focus: People think about their ‘ought’ self and their obligations
                </Typography>
                <IELTSTitle title="Leaders" />
                {/************* [36] *************/}
                <IELTSInput qn="36" beforeInput="Leadership behaviour and" afterInput="affects people’s focus" />
                <IELTSTitle title="Transformational Leaders:" />
                {/************* [37] *************/}
                <IELTSInput qn="37" beforeInput="●   pay special attention to the" afterInput="of their followers" />
                {/************* [38] *************/}
                <IELTSInput qn="38" beforeInput="●   passionately communicate a clear" />
                <Typography>
                  ●   inspire promotion focus in followers
                </Typography>
                <IELTSTitle title="Transactional Leaders:" />
                {/************* [39] *************/}
                <IELTSInput qn="39" beforeInput="●   create" afterInput="to make expectations clear" />
                <Typography>
                  ●   emphasise the results of a mistake
                </Typography>
                <Typography>
                  ●   inspire prevention focus in followers
                </Typography>
                <IELTSTitle title="Conclusion" />
                {/************* [40] *************/}
                <IELTSInput qn="40" beforeInput="Promotion Focus is good for jobs requiring" />
                <Typography>
                  Prevention Focus is good for work such as a surgeon
                </Typography>
                <Typography>
                  Leaders’ actions affect which focus people use
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