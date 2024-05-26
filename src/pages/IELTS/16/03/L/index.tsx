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

import DND_15_20 from './DND_15_20'

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
    if (currentQuestion == 12 || currentQuestion == 15 || currentQuestion == 23 || currentQuestion == 25) {
      dispatch(setCurrentQuestion(+currentQuestion - 2))
    }
    else {
      dispatch(setCurrentQuestion(+currentQuestion - 1))
    }
  }

  const handleNext = () => {
    if (currentQuestion == 11 || currentQuestion == 13 || currentQuestion == 21 || currentQuestion == 23) {
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
                <IELTSTitle title="JUNIOR CYCLE CAMP" isHeader />
                {/************* [1] *************/}
                <IELTSTitle title="The course focuses on skills and safety" />
                <Typography>
                  ● Charlie would be placed in Level 5.
                </Typography>
                <IELTSInput qn="1" beforeInput="● First of all, children at this level are taken to practise in a" />
                <IELTSTitle title="Instructors" />
                {/************* [2] *************/}
                <IELTSInput qn="2" beforeInput="● Instructors wear" afterInput="shirts." />
                {/************* [3] *************/}
                <IELTSInput qn="3" beforeInput="●   A" afterInput="is required and training is given." />
                <IELTSTitle title="Classes" />
                <Typography>
                  ● The size of the classes is limited.
                </Typography>
                {/************* [4] *************/}
                <IELTSInput qn="4" beforeInput="●   There are quiet times during the morning for a" afterInput="or a game." />
                {/************* [5] *************/}
                <IELTSInput qn="5" beforeInput="●   Classes are held even if there is" afterInput="." />
                <IELTSTitle title="What to bring" />
                <Typography>
                  ● a change of clothing
                </Typography>
                {/************* [6] *************/}
                <IELTSInput qn="6" beforeInput="●   a" />
                <Typography>
                  ●   shoes (not sandals)
                </Typography>
                {/************* [7] *************/}
                <IELTSInput qn="7" beforeInput="●   Charlie’s" />
                <IELTSTitle title="Day 1" />
                <Typography>
                  ●   Charlie should arrive at 9.20 am on the first day.
                </Typography>
                {/************* [8] *************/}
                <IELTSInput an="8" beforeInput="●   Before the class, his" afterInput="will be checked." />
                {/************* [9] *************/}
                <IELTSInput qn="9" beforeInput="●   He should then go to the" afterInput="to meet his class instructor." />
                {/************* [10] *************/}
                <IELTSTitle title="Cost" />
                <IELTSInput qn="10" beforeInput="●   The course costs $" afterInput="per week." />
              </>
            }

            {part === 2 &&
              <>
                {/* ================================================================================ [11-12] */}
                <IELTSQuestionTitle from="11" to="12" type="101" />
                {/************* [11-12] *************/}
                <IELTSMultiCheckbox
                  qn="11"
                  question="According to Megan, what are the TWO main advantages of working in the agriculture and horticulture sectors?"
                  checkList={[
                    { label: 'the active lifestyle', value: "a", },
                    { label: 'the above-average salaries', value: "b", },
                    { label: 'the flexible working opportunities', value: "c", },
                    { label: 'the opportunities for overseas travel', value: "d", },
                    { label: 'the chance to be in a natural environment', value: "e", },
                  ]}
                />
                {/* ================================================================================ [13-14] */}
                <IELTSQuestionTitle from="13" to="14" type="101" />
                {/************* [13-14] *************/}
                <IELTSMultiCheckbox
                  qn="13"
                  question="Which TWO of the following are likely to be disadvantages for people working outdoors?"
                  checkList={[
                    { label: 'the increasing risk of accidents', value: "a", },
                    { label: 'being in a very quiet location', value: "b", },
                    { label: 'difficult weather conditions at times', value: "c", },
                    { label: 'the cost of housing', value: "d", },
                    { label: 'the level of physical fitness required', value: "e", },
                  ]}
                />
                {/* ================================================================================ [15-20] */}
                <IELTSQuestionTitle from="15" to="20" type="102" />
                {/************* [15-20] *************/}
                <DND_15_20/>
              </>
            }

            {part === 3 &&
              <>
                {/* ================================================================================ [21-22] */}
                <IELTSQuestionTitle from="21" to="22" type="15" />
                {/************* [21-22] *************/}
                <IELTSMultiCheckbox
                  qn="21"
                  question="Which TWO points does Adam make about his experiment on artificial sweeteners?"
                  checkList={[
                    { label: 'The results were what he had predicted.', value: "a", },
                    { label: 'The experiment was simple to set up', value: "b", },
                    { label: 'A large sample of people was tested.', value: "c", },
                    { label: 'The subjects were unaware of what they were drinking.', value: "d", },
                    { label: 'The test was repeated several times for each person.', value: "e", },
                  ]}
                />
                {/* ================================================================================ [23-24] */}
                <IELTSQuestionTitle from="23" to="24" type="15" />
                {/************* [21-22] *************/}
                <IELTSMultiCheckbox
                  qn="23"
                  question="Which TWO problems did Rosie have when measuring the fat content of nuts?"
                  checkList={[
                    { label: 'She used the wrong sort of nuts.', value: "a", },
                    { label: 'She used an unsuitable chemical.', value: "b", },
                    { label: 'She did not grind the nuts finely enough.', value: "c", },
                    { label: 'The information on the nut package was incorrect.', value: "d", },
                    { label: 'The weighing scales may have been unsuitable.', value: "e", },
                  ]}
                />
                {/* ================================================================================ [25-30] */}
                <IELTSQuestionTitle from="25" to="30" type="16" />
                {/************* [25] *************/}
                <IELTSRadio
                  qn="25"
                  question="Adam suggests that restaurants could reduce obesity if their menus"
                  options={[
                    { label: 'offered fewer options.', value: "a" },
                    { label: 'had more low-calorie foods.', value: "b" },
                    { label: 'were organised in a particular way.', value: "c" },
                  ]}
                />
                {/************* [26] *************/}
                <IELTSRadio
                  qn="26"
                  question="The students agree that food manufacturers deliberately"
                  options={[
                    { label: 'make calorie counts hard to understand.', value: "a" },
                    { label: 'fail to provide accurate calorie counts.', value: "b" },
                    { label: 'use ineffective methods to reduce calories.', value: "c" },
                  ]}
                />
                {/************* [27] *************/}
                <IELTSRadio
                  qn="27"
                  question="What does Rosie say about levels of exercise in England?"
                  options={[
                    { label: 'The amount recommended is much too low.', value: "a" },
                    { label: 'Most people overestimate how much they do.', value: "b" },
                    { label: 'Women now exercise more than they used to.', value: "c" },
                  ]}
                />
                {/************* [28] *************/}
                <IELTSRadio
                  qn="28"
                  question="Adam refers to the location and width of stairs in a train station to illustrate"
                  options={[
                    { label: 'practical changes that can influence people’s behaviour.', value: "a" },
                    { label: 'methods of helping people who have mobility problems.', value: "b" },
                    { label: 'ways of preventing accidents by controlling crowd movement.', value: "c" },
                  ]}
                />
                {/************* [29] *************/}
                <IELTSRadio
                  qn="29"
                  question="What do the students agree about including reference to exercise in their presentation?"
                  options={[
                    { label: 'They should probably leave it out.', value: "a" },
                    { label: 'They need to do more research on it.', value: "b" },
                    { label: 'They should discuss this with their tutor.', value: "c" },
                  ]}
                />
                {/************* [30] *************/}
                <IELTSRadio
                  qn="30"
                  question="What are the students going to do next for their presentation?"
                  options={[
                    { label: 'prepare some slides for it', value: "a" },
                    { label: 'find out how long they have for it', value: "b" },
                    { label: 'decide on its content and organisation', value: "c" },
                  ]}
                />
              </>
            }

            {part === 4 &&
              <>
                {/* ================================================================================ [31-40] */}
                <IELTSQuestionTitle from="31" to="40" type="4" />
                <IELTSTitle title="Hand knitting" isHeader />
                <IELTSTitle title="Interest in knitting" />
                <Typography>
                  ●   Knitting has a long history around the world.
                </Typography>
                {/************* [31] *************/}
                <IELTSInput qn="31" beforeInput="●   We imagine someone like a" afterInput="knitting." />
                {/************* [32] *************/}
                <IELTSInput qn="32" beforeInput="●   A" afterInput="ago, knitting was expected to disappear." />
                <Typography>
                  ●   The number of knitting classes is now increasing.
                </Typography>
                {/************* [33] *************/}
                <IELTSInput qn="33" beforeInput="●   People are buying more" afterInput="for knitting nowadays." />
                <IELTSTitle title="Benefits of knitting" />
                {/************* [34] *************/}
                <IELTSInput qn="34" beforeInput="●   gives support in times of" afterInput="difficulty" />
                {/************* [35] *************/}
                <IELTSInput qn="35" beforeInput="●   requires only" afterInput="skills and little money to start" />
                <Typography>
                  ●   reduces stress in a busy life
                </Typography>
                <IELTSTitle title="Early knitting" />
                {/************* [36] *************/}
                <Typography>
                  ●   The origins are not known.
                </Typography>
                <IELTSInput qn="36" beforeInput="●   Findings show early knitted items to" afterInput="in shape." />
                {/************* [37] *************/}
                <IELTSInput qn="37" beforeInput="●   The first needles were made of natural materials such as wood and" afterInput="." />
                {/************* [38] *************/}
                <IELTSInput qn="38" beforeInput="●   Early yarns felt" afterInput="to touch." />
                <Typography>
                  ●   Wool became the most popular yarn for spinning.
                </Typography>
                {/************* [39] *************/}
                <IELTSInput qn="39" beforeInput="●   Geographical areas had their own" afterInput="of knitting." />
                {/************* [40] *************/}
                <IELTSInput qn="40" beforeInput="●   Everyday tasks like looking after" afterInput="were done while knitting." />
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