import React from 'react';
import { useState, useEffect } from 'react'

import { useQuery } from "@tanstack/react-query";
import axiosInstance from '@/services/API'

import Typography from '@mui/material/Typography';

import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setPart, setCurrentQuestion, setAnswersAll } from '@/store/slices/user/userSlice'

import IELTSTitle from '@/components/IELTS/IELTSTitle';
import IELTSParts from '@/components/IELTS/IELTSParts';
import IELTSArrows from '@/components/IELTS/IELTSArrows';
import IELTSRadio from '@/components/IELTS/QuestionTypes/IELTSRadio';
import IELTSInput from '@/components/IELTS/QuestionTypes/IELTSInput';
import IELTSQuestionTitle from '@/components/IELTS/IELTSQuestionTitle';
import IELTSPartNavigation from '@/components/IELTS/IELTSPartNavigation/Reading';
import IELTSTableOptions from '@/components/IELTS/QuestionTypes/IELTSTableOptions';
import IELTSMultiCheckbox from '@/components/IELTS/QuestionTypes/IELTSMultiCheckbox';
import IELTSTableOptionsLabel from '@/components/IELTS/QuestionTypes/IELTSTableOptionsLabel'

import IdeClone from "@/components/IELTS/IdeClone"

import Text1 from './Text/Text1';
import Text2 from './Text/Text2';
import Text3 from './Text/Text3';

const index = () => {

  const dispatch = useAppDispatch()

  const part = useAppSelector((state) => state.user.part)
  const fontSize = useAppSelector((state) => state.user.fontSize)
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)
  const answersAll = useAppSelector((state) => state.user.answersAll)

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

  // const [part, setPart] = useState(1)

  useEffect(() => {
    test_id && getAnswer.isFetching
    test_id && postAnswer.refetch()
  }, [part])

  useEffect(() => {
    setTest_id(localStorage.getItem('test_id'))
    test_id && getAnswer.refetch()
  }, [])


  useEffect(() => {

    if (currentQuestion > 0 && currentQuestion < 14) {
      dispatch(setPart(1))
    }
    if (currentQuestion > 13 && currentQuestion < 27) {
      dispatch(setPart(2))
    }
    if (currentQuestion > 26 && currentQuestion < 41) {
      dispatch(setPart(3))
    }
  }, [currentQuestion]);

  
  const handlePrevious = () => {
    const stepBack = currentQuestion === 21 || currentQuestion === 23 ? 2 : 1;
    dispatch(setCurrentQuestion(Number(currentQuestion) - Number(stepBack)));
  };

  const handleNext = () => {
    const stepForward = currentQuestion === 19 || currentQuestion === 21 ? 2 : 1;
    dispatch(setCurrentQuestion(Number(currentQuestion) + Number(stepForward)));
  };

  const options_9_13 = [
    { label: 'TRUE', value: "a", },
    { label: 'FALSE', value: "b", },
    { label: 'NOT GIVEN', value: "c", },
  ]

  const options_32_35 = [
    { label: 'YES', value: "a", },
    { label: 'NO', value: "b", },
    { label: 'NOT GIVEN', value: "c", },
  ]

  console.log(answersAll)

  return (
    <>
      <IELTSParts part={part} skill="reading" />

      <div className={`ielts-container ${fontSize}`} id="ielts-list-text-input">
        <IELTSArrows handlePrevious={handlePrevious} handleNext={handleNext} />

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
                    {/* ================================================================================ [01-08] */}
                    <IELTSQuestionTitle from="1" to="8" type="4" />
                    <IELTSTitle title="Children’s play" isHeader />
                    <IELTSTitle title="Uses of children’s play" />
                    {/************* [1] *************/}
                    <IELTSInput qn="1" beforeInput="● building a ‘magical kingdom’ may help develop" />
                    <IELTSInput qn="3" beforeInput="● hello" afterInput="bye" />
                    {/************* [2] *************/}
                    <IELTSInput qn="2" beforeInput="● board games involve" afterInput="and turn-taking" />
                    <IELTSTitle title="Recent changes affecting children’s play" />
                    {/************* [3] *************/}
                    <IELTSInput qn="3" beforeInput="● population of" afterInput="have grown" />
                    {/************* [4] *************/}
                    <IELTSInput qn="4" beforeInput=" — fear of" />
                    {/************* [5] *************/}
                    <IELTSInput qn="5" beforeInput=" — fear of" />
                    {/************* [6] *************/}
                    <IELTSInput qn="6" beforeInput=" — increased" afterInput="in schools" />
                    <IELTSTitle title="International policies on children’s play" />
                    {/************* [7] *************/}
                    <IELTSInput qn="7" beforeInput="● it is difficult to find" afterInput="to support new policies" />
                    {/************* [8] *************/}
                    <IELTSInput qn="8" beforeInput="● research needs to study the impact of play on the rest of the child’s" />

                    {/* ================================================================================ [09-13] */}
                    <IELTSQuestionTitle from="9" to="13" type="5" />
                    {/************* [9] *************/}
                    <IELTSRadio
                      qn="9"
                      question="Children with good self-control are known to be likely to do well at school later on."
                      options={options_9_13}
                    />
                    {/************* [10] *************/}
                    <IELTSRadio
                      qn="10"
                      question="The way a child plays may provide information about possible medical problems."
                      options={options_9_13}
                    />
                    {/************* [11] *************/}
                    <IELTSRadio
                      qn="11"
                      question="Playing with dolls was found to benefit girls’ writing more than boys’ writing"
                      options={options_9_13}
                    />
                    {/************* [12] *************/}
                    <IELTSRadio
                      qn="12"
                      question="Children had problems thinking up ideas when they first created the story with Lego."
                      options={options_9_13}
                    />
                    {/************* [13] *************/}
                    <IELTSRadio
                      qn="13"
                      question="People nowadays regard children’s play as less significant than they did in the past."
                      options={options_9_13}
                    />
                  </>
                }
                {part === 2 &&
                  <>
                    {/* ================================================================================ [14-18] */}
                    <IELTSQuestionTitle from="14" to="18" type="6" />
                    {/************* [14-18] *************/}
                    <IELTSTableOptions
                      questions={[
                        { id: 14, title: 'a description of how people misused a bike-sharing scheme' },
                        { id: 15, title: 'an explanation of why a proposed bike-sharing scheme was turned down' },
                        { id: 16, title: 'a reference to a person being unable to profit their work' },
                        { id: 17, title: 'an explanation of the potential savings a bike-sharing scheme would bring' },
                        { id: 18, title: 'a reference to the problems a bike-sharing scheme was intended to solve' }
                      ]} />

                    {/* ================================================================================ [19-22] */}
                    <IELTSQuestionTitle from="19" to="22" type="2" />
                    {/************* [19-20] *************/}
                    <IELTSMultiCheckbox
                      qn="19"
                      question="the following statements are made in the text about the Amsterdam bike-sharing scheme of 1999?"
                      checkList={[
                        { label: 'It was initially opposed by a government department.', value: "a", },
                        { label: 'It failed when a partner in the scheme withdrew support.', value: "b", },
                        { label: 'It aimed to be more successful than the Copenhagen scheme.', value: "c", },
                        { label: 'It was made possible by a change in people’s attitudes.', value: "d", },
                        { label: 'It attracted interest from a range of bike designers.', value: "e", },
                      ]}
                    />
                    {/************* [21-22] *************/}
                    <IELTSMultiCheckbox
                      qn="21"
                      question="of the following statements are made in the text about Amsterdam today?"
                      checkList={[
                        { label: 'The majority of residents would like to prevent all cars from entering the city.', value: "a", },
                        { label: 'There is little likelihood of the city having another bike-sharing scheme.', value: "b", },
                        { label: 'More trips in the city are made by bike than by any other form of transport.', value: "c", },
                        { label: 'A bike-sharing scheme would benefit residents who use public transport.', value: "d", },
                        { label: 'The city has a reputation as a place that welcomes cyclists.', value: "e", },
                      ]}
                    />

                    {/* ================================================================================ [23-26] */}

                    <IELTSQuestionTitle from="23" to="26" type="4" />
                    <IELTSTitle title="he first urban bike-sharing scheme" />
                    {/************* [23] *************/}
                    <IELTSInput qn="23" beforeInput="The first bike-sharing scheme was the idea of the Dutch group Provo. The people who belonged to this group were" />
                    {/************* [24] *************/}
                    <IELTSInput qn="24" beforeInput="They were concerned about damage to the environment and about" afterInput="and believed that the bike-sharing scheme would draw attention to these issues." />
                    {/************* [25] *************/}
                    <IELTSInput qn="25" beforeInput="As well as painting some bikes white, they handed out" afterInput="that condemned the use of cars." />
                    {/************* [26] *************/}
                    <IELTSInput qn="26" beforeInput="However, the scheme was not a great success:
almost as quickly as Provo left the bikes around the city, the" afterInput="Took them away." />
                    <Typography sx={{ mb: 2 }}>
                      According to Schimmelpennink,the scheme was intended to be symbolic.The idea was to get people thinking about the issues.
                    </Typography>
                  </>
                }

                {part === 3 &&
                  <>
                    {/* ================================================================================ [27-31] */}
                    <IELTSQuestionTitle from="27" to="31" type="3" />
                    {/************* [27-31] *************/}
                    <IELTSTableOptionsLabel
                      questions={
                        [
                          { id: 27, title: 'Hotel managers need to know what would encourage good staff to remain.' },
                          { id: 28, title: 'The actions of managers may make staff feel they shouldn’t move to a different employer.' },
                          { id: 29, title: 'Little is done in the hospitality industry to help workers improve their skills.' },
                          { id: 30, title: 'Staff are less likely to change jobs if cooperation is encouraged.' },
                          { id: 31, title: 'Dissatisfaction with pay is not the only reason why hospitality workers change jobs.' }
                        ]
                      }
                      topLabels={[
                        { title: "Pfeffer" },
                        { title: "Lucas" },
                        { title: "Maroudas et al" },
                        { title: "Ng and Sorensen" },
                        { title: "provide a handout" },
                        { title: "Enz and Siguaw" },
                        { title: "Deery" },
                      ]
                      }
                    />
                    {/* ================================================================================ [32-35] */}
                    <IELTSQuestionTitle from="32" to="35" type="5" />
                    {/************* [32] *************/}
                    <IELTSRadio
                      qn="32"
                      question="One reason for high staff turnover in the hospitality industry is poor morale."
                      options={options_32_35}
                    />
                    {/************* [33] *************/}
                    <IELTSRadio
                      qn="33"
                      question="Research has shown that staff have a tendency to dislike their workplace."
                      options={options_32_35}
                    />
                    {/************* [34] *************/}
                    <IELTSRadio
                      qn="34"
                      question="An improvement in working conditions and job security makes staff satisfied with their jobs."
                      options={options_32_35}
                    />
                    {/************* [35] *************/}
                    <IELTSRadio
                      qn="35"
                      question="Staff should be allowed to choose when they take breaks during the working day"
                      options={options_32_35}
                    />
                    {/* ================================================================================ [36-40] */}
                    <IELTSQuestionTitle from="36" to="40" type="4" />
                    <IELTSTitle title="Fun at work" />
                    {/************* [36] *************/}
                    <IELTSInput qn="36" beforeInput="Tews, Michel and Stafford carried out research on staff in an American chain of" />
                    {/************* [37] *************/}
                    <IELTSInput qn="37" beforeInput="They discovered that activities designed for staff to have fun improved their" />
                    {/************* [38] *************/}
                    <IELTSInput qn="38" beforeInput=", and that management involvement led to lower staff" />
                    {/************* [39] *************/}
                    <IELTSInput qn="39" beforeInput="They also found that the activities needed to fit with both the company’s" />
                    {/************* [40] *************/}
                    <IELTSInput qn="40" beforeInput="and the" afterInput="Of the staff. A balance was required between a degree of freedom and maintaining work standards." />
                  </>
                }
              </div>
            }
          />
        }
      </div>
      <IELTSPartNavigation part={part} />
    </>
  );
};

export default index;