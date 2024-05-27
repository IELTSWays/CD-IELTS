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

import DND_17_20 from './DND_17_20'

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
    if (currentQuestion == 29 || currentQuestion == 31) {
      dispatch(setCurrentQuestion(+currentQuestion - 2))
    }
    else {
      dispatch(setCurrentQuestion(+currentQuestion - 1))
    }
  }

  const handleNext = () => {
    if (currentQuestion == 27 || currentQuestion == 29) {
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
                <IELTSTitle title="Alex’s Training" isHeader />
                {/************* [0] *************/}
                <Typography className='italic'>Example</Typography>
                <IELTSInput qn="0" beforeInput="Alex complete his training in" disabled placeholder="2014" />
                <IELTSTitle title="About the applicant:" />
                {/************* [1] *************/}
                <IELTSInput qn="1" beforeInput="●   At first, Alex did his training in the" afterInput="department." />
                {/************* [2] *************/}
                <IELTSInput qn="2" beforeInput="●   Alex didn’t have a qualification from school in" afterInput="skills." />
                {/************* [3] *************/}
                <IELTSInput qn="3" beforeInput="●   Age of other trainees: the youngest was" />
                {/************* [4] *************/}
                <IELTSInput qn="4" beforeInput="●   Age of other trainees: the youngest was" />
                <IELTSTitle title="Benefits of doing training at JPNW:" />
                <Typography>
                  ●   Lots of opportunities because of the size of the organisation.
                </Typography>
                {/************* [5] *************/}
                <IELTSInput qn="5" beforeInput="●   Trainees receive the same amount of" afterInput="as permanent staff." />
                <Typography>
                  ●   The training experience increases people’s confidence a lot.
                </Typography>
                {/************* [6] *************/}
                <IELTSInput qn="6" beforeInput="●   Trainees go to" afterInput="one day per month." />
                {/************* [7] *************/}
                <IELTSInput qn="7" beforeInput="●   The company is in a convenient " />
                <IELTSTitle title="Advice for interview:" />
                {/************* [8] *************/}
                <IELTSInput qn="8" beforeInput="●   Don’t wear" />
                {/************* [9] *************/}
                <IELTSInput qn="9" beforeInput="●   Don’t be" />
                {/************* [10] *************/}
                <IELTSInput qn="10" beforeInput="●   Make sure you" />
              </>
            }

            {part === 2 &&
              <>
                {/* ================================================================================ [11-16] */}
                <IELTSQuestionTitle from="11" to="16" type="16" />
                <strong>The Snow Centre</strong>

                {/************* [11] *************/}
                <IELTSRadio
                  qn="11"
                  question="Annie recommends that when cross-country skiing, the visitors should"
                  options={[
                    { label: 'get away from the regular trails.', value: "a" },
                    { label: 'stop to enjoy views of the scenery.', value: "b" },
                    { label: 'go at a slow speed at the beginning.', value: "c" },
                  ]}
                />
                {/************* [12] *************/}
                <IELTSRadio
                  qn="12"
                  question="What does Annie tell the group about this afternoon’s dog-sled trip?"
                  options={[
                    { label: 'Those who want to can take part in a race.', value: "a" },
                    { label: 'Anyone has the chance to drive a team of dogs.', value: "b" },
                    { label: 'One group member will be chosen to lead the trail.', value: "c" },
                  ]}
                />
                {/************* [13] *************/}
                <IELTSRadio
                  qn="13"
                  question="What does Annie say about the team relay event?"
                  options={[
                    { label: 'All participants receive a medal.', value: "a" },
                    { label: 'The course is 4 km long.', value: "b" },
                    { label: 'Each team is led by a teacher.', value: "c" },
                  ]}
                />
                {/************* [14] *************/}
                <IELTSRadio
                  qn="14"
                  question="On the snow-shoe trip, the visitors will"
                  options={[
                    { label: 'visit an old gold mine.', value: "a" },
                    { label: 'learn about unusual flowers.', value: "b" },
                    { label: 'climb to the top of a mountain.', value: "c" },
                  ]}
                />
                {/************* [15] *************/}
                <IELTSRadio
                  qn="15"
                  question="The cost of accommodation in the mountain hut includes"
                  options={[
                    { label: 'a supply of drinking water.', value: "a" },
                    { label: 'transport of visitors’ luggage.', value: "b" },
                    { label: 'cooked meals.', value: "c" },
                  ]}
                />
                {/************* [16] *************/}
                <IELTSRadio
                  qn="16"
                  question="If there is a storm while the visitors are in the hut, they should"
                  options={[
                    { label: 'contact the bus driver.', value: "a" },
                    { label: 'wait until the weather improves.', value: "b" },
                    { label: 'use the emergency locator beacon.', value: "c" },
                  ]}
                />

                {/* ================================================================================ [17-20] */}
                <IELTSQuestionTitle
                  from="17"
                  to="20"
                  title="What information does Annie give about skiing on each of the following mountain trails?"
                  numberOfAnswers="four"
                  alphabet="f"
                  type="200"
                />
                {/************* [17-20] *************/}
                <DND_17_20 />
              </>
            }

            {part === 3 &&
              <>
                {/* ================================================================================ [21-26] */}
                <IELTSQuestionTitle from="21" to="26" type="16" />
                <strong>Labels giving nutritional information on food packaging</strong>

                {/************* [21] *************/}
                <IELTSRadio
                  qn="21"
                  question="What was Jack’s attitude to nutritional food labels before this project?"
                  options={[
                    { label: 'He didn’t read everything on them.', value: "a" },
                    { label: 'He didn’t think they were important.', value: "b" },
                    { label: 'He thought they were too complicated.', value: "c" },
                  ]}
                />
                {/************* [22] *************/}
                <IELTSRadio
                  qn="22"
                  question="Alice says that before doing this project,"
                  options={[
                    { label: 'she was unaware of what certain foods contained.', value: "a" },
                    { label: 'she was too lazy to read food labels.', value: "b" },
                    { label: 'she was only interested in the number of calories.', value: "c" },
                  ]}
                />
                {/************* [23] *************/}
                <IELTSRadio
                  qn="23"
                  question="When discussing supermarket brands of pizza, Jack agrees with Alice that"
                  options={[
                    { label: 'the list of ingredients is shocking.', value: "a" },
                    { label: 'he will hesitate before buying pizza again.', value: "b" },
                    { label: 'the nutritional label is misleading.', value: "c" },
                  ]}
                />
                {/************* [24] *************/}
                <IELTSRadio
                  qn="24"
                  question="Jack prefers the daily value system to other labelling systems because it is"
                  options={[
                    { label: 'more accessible.', value: "a" },
                    { label: 'more logical.', value: "b" },
                    { label: 'more comprehensive.', value: "c" },
                  ]}
                />
                {/************* [25] *************/}
                <IELTSRadio
                  qn="25"
                  question="What surprised both students about one flavour of crisps?"
                  options={[
                    { label: 'The percentage of artificial additives given was incorrect.', value: "a" },
                    { label: 'The products did not contain any meat.', value: "b" },
                    { label: 'The labels did not list all the ingredients.', value: "c" },
                  ]}
                />
                {/************* [26] *************/}
                <IELTSRadio
                  qn="26"
                  question="What do the students think about research into the impact of nutritional food labelling?"
                  options={[
                    { label: 'It did not produce clear results.', value: "a" },
                    { label: 'It focused on the wrong people.', value: "b" },
                    { label: 'It made unrealistic recommendations.', value: "c" },
                  ]}
                />
                {/* ================================================================================ [27-28] */}
                <IELTSQuestionTitle from="27" to="28" type="15" />
                {/************* [27-28] *************/}
                <IELTSMultiCheckbox
                  qn="27"
                  question="Which TWO things surprised the students about the traffic-light system for nutritional labels?"
                  checkList={[
                    { label: 'its widespread use', value: "a", },
                    { label: 'the fact that it is voluntary for supermarkets', value: "b", },
                    { label: 'how little research was done before its introduction', value: "c", },
                    { label: 'its unpopularity with food manufacturers', value: "d", },
                    { label: 'the way that certain colours are used', value: "e", },
                  ]}
                />
                {/* ================================================================================ [29-30] */}
                <IELTSQuestionTitle from="29" to="30" type="15" />
                {/************* [29-30] *************/}
                <IELTSMultiCheckbox
                  qn="29"
                  question="Which TWO things are true about the participants in the study on the traffic-light system?"
                  checkList={[
                    { label: 'They had low literacy levels.', value: "a", },
                    { label: 'They were regular consumers of packaged food.', value: "b", },
                    { label: 'They were selected randomly.', value: "c", },
                    { label: 'They were from all socio-economic groups.', value: "d", },
                    { label: 'They were interviewed face-to-face.', value: "e", },
                  ]}
                />
              </>
            }

            {part === 4 &&
              <>
                {/* ================================================================================ [31-40] */}
                <IELTSQuestionTitle from="31" to="40" type="1" />
                <IELTSTitle title="The history of coffee" isHeader />
                <IELTSTitle title="Coffee in the Arab world" />
                <Typography>
                  ●   These was small-scale trade in wild coffee from Ethiopia.
                </Typography>
                <Typography>
                  ●   1522: Coffee was approved in the Ottoman court as a type of medicine.
                </Typography>
                {/************* [31] *************/}
                <IELTSInput qn="31" beforeInput="●   1623: In Constantinople, the ruler ordered the" afterInput="of every coffee house." />
                <IELTSTitle title="Coffee arrives in Europe (17th century)" />
                {/************* [32] *************/}
                <IELTSInput qn="32" beforeInput="●   Coffee shops were compared to" afterInput="." />
                {/************* [33] *************/}
                <IELTSInput qn="33" beforeInput="●   They played an important part in social and" afterInput="changes." />
                <IELTSTitle title="Coffee and European colonization" />
                <Typography>
                  ●   European powers established coffee plantations in their colonies.
                </Typography>
                {/************* [34] *************/}
                <IELTSInput qn="34" beforeInput="●   Types of coffee were often named according to the" afterInput="they came from." />
                {/************* [35] *************/}
                <IELTSInput qn="35" beforeInput="●   In Brazil and the Caribbean, most cultivation depended on" afterInput="." />
                {/************* [36] *************/}
                <IELTSInput qn="36" beforeInput="●   In Java, coffee was used as a form of" afterInput="." />
                {/************* [37] *************/}
                <IELTSInput qn="37" beforeInput="●   Coffee became almost as important as" afterInput="." />
                {/************* [38] *************/}
                <IELTSInput qn="38" beforeInput="●   The move towards the consumption of" afterInput="in Britain did not also take place in the USA." />
                <IELTSTitle title="Coffee in the 19th century" />
                {/************* [39] *************/}
                <IELTSInput qn="39" beforeInput="●   Prices dropped because of improvements in" afterInput="." />
                {/************* [40] *************/}
                <IELTSInput qn="40" beforeInput="●   Industrial workers found coffee helped them to work at" afterInput="." />
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