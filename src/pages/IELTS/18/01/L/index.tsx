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
    if (currentQuestion == 17 || currentQuestion == 29 || currentQuestion == 31) {
      dispatch(setCurrentQuestion(+currentQuestion - 2))
    }
    else {
      dispatch(setCurrentQuestion(+currentQuestion - 1))
    }
  }

  const handleNext = () => {
    if (currentQuestion == 14 || currentQuestion == 27 || currentQuestion == 29) {
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
                <IELTSQuestionTitle from="1" to="10" type="1" />
                <IELTSTitle title="Transport survey" isHeader />
                <Typography> <strong> Name:  </strong> Sadie Jones </Typography>
                <Typography> <strong> Year of birth:  </strong> 1991 </Typography>
                {/************* [1] *************/}
                <IELTSInput qn="1" beforeInput="Postcode:" beforeInputStrong />
                <strong> Travelling by bus </strong>
                {/************* [2] *************/}
                <IELTSInput qn="2" beforeInput="Date of bus journey:" />
                {/************* [3] *************/}
                <IELTSInput qn="3" beforeInput="&nbsp;&nbsp;–" afterInput="Reason for trip:   shopping and visit to the" />
                {/************* [4] *************/}
                <IELTSInput qn="4" beforeInput="Travelled by bus because cost of" afterInput="too high" />
                {/************* [5] *************/}
                <IELTSInput qn="5" beforeInput="Got on bus at" afterInput="Street" />
                <Typography> Complaints about bus service: </Typography>
                {/************* [6] *************/}
                <IELTSInput qn="6" beforeInput="&nbsp;&nbsp;–   bus today was" />
                {/************* [7] *************/}
                <IELTSInput qn="7" beforeInput="&nbsp;&nbsp;–   frequency of buses in the" />
                <strong> Travelling by car </strong>
                {/************* [8] *************/}
                <IELTSInput qn="8" beforeInput="Goes to the" fterInput="by car" />
                <strong> Travelling by bicycle </strong>
                {/************* [9] *************/}
                <IELTSInput qn="9" beforeInput="Dislikes travelling by bike in the city centre because of the" />
                {/************* [10] *************/}
                <IELTSInput qn="10" beforeInput="Doesn’t own a bike because of a lack of " />
              </>
            }

            {part === 2 &&
              <>
                {/* ================================================================================ [11-13] */}
                <IELTSQuestionTitle from="11" to="13" type="16" />
                <strong> Becoming a volunteer for ACE </strong>
                {/************* [11] *************/}
                <IELTSRadio
                  qn="11"
                  question="Why does the speaker apologise about the seats?"
                  options={[
                    { label: 'They are too small.', value: "a" },
                    { label: 'There are not enough of them.', value: "b" },
                    { label: 'Some of them are very close together.', value: "c" },
                  ]}
                />
                {/************* [12] *************/}
                <IELTSRadio
                  qn="12"
                  question="What does the speaker say about the age of volunteers?"
                  options={[
                    { label: 'The age of volunteers is less important than other factors.', value: "a" },
                    { label: 'Young volunteers are less reliable than older ones.', value: "b" },
                    { label: 'Most volunteers are about 60 years old.', value: "c" },
                  ]}
                />
                {/************* [13] *************/}
                <IELTSRadio
                  qn="13"
                  question="What does the speaker say about training?"
                  options={[
                    { label: 'It is continuous.', value: "a" },
                    { label: 'It is conducted by a manager.', value: "b" },
                    { label: 'It takes place online.', value: "c" },
                  ]}
                />

                {/* ================================================================================ [14-15] */}
                <IELTSQuestionTitle from="14" to="15" type="101" />
                {/************* [14-15] *************/}
                <IELTSMultiCheckbox
                  qn="14"
                  question="Which TWO issues does the speaker ask the audience to consider before they apply to be volunteers?"
                  checkList={[
                    { label: 'their financial situation', value: "a", },
                    { label: 'their level of commitment', value: "b", },
                    { label: 'their work experience', value: "c", },
                    { label: 'their ambition', value: "d", },
                    { label: 'their availability', value: "e", },
                  ]}
                />

                {/* ================================================================================ [16-20] */}
                <IELTSQuestionTitle
                  from="16"
                  to="20"
                  title="What does the speaker suggest would be helpful for each of the following areas of voluntary work?"
                  numberOfAnswers="five"
                  alphabet="g"
                  type="200"
                />
                <DND_16_20 />
              </>
            }

            {part === 3 &&
              <>
                {/* ================================================================================ [21-26] */}
                <IELTSQuestionTitle from="21" to="26" type="16" />
                <strong> Talk on jobs in fashion design </strong>
                {/************* [21] *************/}
                <IELTSRadio
                  qn="21"
                  question="What problem did Chantal have at the start of the talk?"
                  options={[
                    { label: 'Her view of the speaker was blocked.', value: "a" },
                    { label: 'She was unable to find an empty seat.', value: "b" },
                    { label: 'The students next to her were talking.', value: "c" },
                  ]}
                />
                {/************* [22] *************/}
                <IELTSRadio
                  qn="22"
                  question="What were Hugo and Chantal surprised to hear about the job market?"
                  options={[
                    { label: 'It has become more competitive than it used to be.', value: "a" },
                    { label: 'There is more variety in it than they had realised.', value: "b" },
                    { label: 'Some areas of it are more exciting than others.', value: "c" },
                  ]}
                />
                {/************* [23] *************/}
                <IELTSRadio
                  qn="23"
                  question="Hugo and Chantal agree that the speaker’s message was"
                  options={[
                    { label: 'unfair to them at times.', value: "a" },
                    { label: 'hard for them to follow.', value: "b" },
                    { label: 'critical of the industry.', value: "c" },
                  ]}
                />
                {/************* [24] *************/}
                <IELTSRadio
                  qn="24"
                  question="What do Hugo and Chantal criticise about their school careers advice?"
                  options={[
                    { label: 'when they received the advice', value: "a" },
                    { label: 'how much advice was given', value: "b" },
                    { label: 'who gave the advice', value: "c" },
                  ]}
                />
                {/************* [25] *************/}
                <IELTSRadio
                  qn="25"
                  question="When discussing their future, Hugo and Chantal disagree on"
                  options={[
                    { label: 'which is the best career in fashion.', value: "a" },
                    { label: 'when to choose a career in fashion.', value: "b" },
                    { label: 'why they would like a career in fashion.', value: "c" },
                  ]}
                />
                {/************* [26] *************/}
                <IELTSRadio
                  qn="26"
                  question="How does Hugo feel about being an unpaid assistant?"
                  options={[
                    { label: 'He is realistic about the practice.', value: "a" },
                    { label: 'He feels the practice is dishonest.', value: "b" },
                    { label: 'He thinks others want to change the practice.', value: "c" },
                  ]}
                />
                {/* ================================================================================ [27-28] */}
                <IELTSQuestionTitle from="27" to="28" type="101" />
                {/************* [27-28] *************/}
                <IELTSMultiCheckbox
                  qn="27"
                  question="Which TWO mistakes did the speaker admit she made in her first job?"
                  checkList={[
                    { label: 'being dishonest to her employer', value: "a", },
                    { label: 'paying too much attention to how she looked', value: "b", },
                    { label: 'expecting to become well known', value: "c", },
                    { label: 'trying to earn a lot of money', value: "d", },
                    { label: 'openly disliking her client', value: "e", },
                  ]}
                />
                {/* ================================================================================ [29-30] */}
                <IELTSQuestionTitle from="29" to="30" type="101" />
                {/************* [29-30] *************/}
                <IELTSMultiCheckbox
                  qn="29"
                  question="Which TWO pieces of retail information do Hugo and Chantal agree would be useful?"
                  checkList={[
                    { label: 'the reasons people return fashion items', value: "a", },
                    { label: 'how much time people have to shop for clothes', value: "b", },
                    { label: 'fashion designs people want but can’t find', value: "c", },
                    { label: 'the best time of year for fashion buying', value: "d", },
                    { label: 'the most popular fashion sizes', value: "e", },
                  ]}
                />
              </>
            }

            {part === 4 &&
              <>
                {/* ================================================================================ [31-40] */}
                <IELTSQuestionTitle from="31" to="40" type="1" />
                <IELTSTitle title="Elephant translocation" isHeader />
                <IELTSTitle title="Reasons for overpopulation at Majete National Park" />
                <Typography>
                  ●   strict enforcement of anti-poaching laws
                </Typography>
                <Typography>
                  ●   successful breeding
                </Typography>
                <IELTSTitle title="Problems caused by elephant overpopulation" />
                <Typography>
                  ●   greater competition, causing hunger for elephants
                </Typography>
                {/************* [31] *************/}
                <IELTSInput qn="31" beforeInput="●   damage to" afterInput="in the park" />
                <IELTSTitle title="The translocation process" />
                {/************* [32] *************/}
                <IELTSInput qn="32" beforeInput="●   a suitable group of elephants from the same" afterInput="was selected" />
                {/************* [33] *************/}
                <IELTSInput qn="33" beforeInput="●   vets and park staff made use of" afterInput="to help guide the elephants into an open plain
"/>
                <Typography>
                  ●   elephants were immobilised with tranquilisers
                </Typography>
                {/************* [34] *************/}
                <IELTSInput qn="34" beforeInput="&nbsp;&nbsp;–   this process had to be completed quickly to reduce" />
                {/************* [35] *************/}
                <IELTSInput qn="35" beforeInput="&nbsp;&nbsp;–   elephants had to be turned on their" afterInput="to avoid damage to their lungs" />
                {/************* [36] *************/}
                <IELTSInput qn="36" beforeInput="&nbsp;&nbsp;–   elephants’" afterInput="had to be monitored constantly" />
                <Typography>
                  –   tracking devices were fitted to the matriarchs
                </Typography>
                {/************* [37] *************/}
                <IELTSInput qn="37" beforeInput="&nbsp;&nbsp;–   data including the size of their tusks and" afterInput="was taken" />
                <Typography>
                  ●   elephants were taken by truck to their new reserve
                </Typography>
                <IELTSTitle title="Advantages of translocation at Nkhotakota Wildlife Park" />
                {/************* [38] *************/}
                <IELTSInput qn="38" beforeInput="●   " afterInput="opportunities" />
                {/************* [39] *************/}
                <IELTSInput qn="39" beforeInput="●   a reduction in the number of poachers and" />
                <Typography>
                  ●   an example of conservation that other parks can follow
                </Typography>
                {/************* [40] *************/}
                <IELTSInput qn="40" beforeInput="●   an increase in" afterInput="as a contributor to GDP" />
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