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
import IELTSTwoCol from '@/components/IELTS/QuestionTypes/IELTSTwoCol';
import IELTSMultiCheckbox from '@/components/IELTS/QuestionTypes/IELTSMultiCheckbox';
import IELTSQuestionTitle from '@/components/IELTS/IELTSQuestionTitle';
import IELTSPartNavigation from '@/components/IELTS/IELTSPartNavigation';

import useGetAnswer from '@/services/Requests/useGetAnswer';

import DND_25_30 from './DND_25_30'

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
    if (currentQuestion == 23 || currentQuestion == 25) {
      dispatch(setCurrentQuestion(+currentQuestion - 2))
    }
    else {
      dispatch(setCurrentQuestion(+currentQuestion - 1))
    }
  }

  const handleNext = () => {
    if (currentQuestion == 21 || currentQuestion == 23) {
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
                {/* ================================================================================ [01-06] */}
                <IELTSQuestionTitle from="1" to="6" type="1" />
                <IELTSTitle title="THORNDYKE’S BUILDERS" isHeader />
                {/************* [0] *************/}
                <Typography className='italic'>Example</Typography>
                <IELTSInput qn="0" beforeInput="Customer heard about Thorndyke’s from a" disabled placeholder="friend" />
                {/************* [1] *************/}
                <IELTSInput qn="1" colLeft="&nbsp;Name:" beforeInput="Edith" colLeftStrong />
                {/************* [2] *************/}
                <IELTSTwoCol colLeft="Address:" colRight="Flat 4," colLeftStrong />
                <IELTSInput qn="2" colLeft="&nbsp;&nbsp;&nbsp;" afterInput="Park Flats" colLeftStrong />
                {/************* [3] *************/}
                <IELTSInput qn="3" colLeft="&nbsp;&nbsp;&nbsp;" beforeInput="(Behind the" afterInput=" ) " colLeftStrong />
                <IELTSTwoCol colLeft="Phone number:" colRight="875934" colLeftStrong />
                {/************* [4] *************/}
                <IELTSInput qn="4" colLeft="Best time to contact customer: " beforeInput="during the" colLeftStrong />
                {/************* [5] *************/}
                <IELTSInput qn="5" colLeft="Where to park:" beforeInput="opposite entrance next to the" colLeftStrong />
                {/************* [6] *************/}
                <IELTSInput qn="6" beforeInput="Needs full quote showing all the jobs and the" />

                <strong> 7-10 Table </strong>
              </>
            }

            {part === 2 &&
              <>
                {/* ================================================================================ [11-15] */}
                <IELTSQuestionTitle from="11" to="15" type="16" />
                <strong>MANHAM PORT</strong>
                {/************* [11] *************/}
                <IELTSRadio
                  qn="11"
                  question="Why did a port originally develop at Manham?"
                  options={[
                    { label: 'It was safe from enemy attack.', value: "a" },
                    { label: 'It was convenient for river transport.', value: "b" },
                    { label: 'It had a good position on the sea coast.', value: "c" },
                  ]}
                />

                {/************* [12] *************/}
                <IELTSRadio
                  qn="12"
                  question="What caused Manham’s sudden expansion during the Industrial Revolution?"
                  options={[
                    { label: 'the improvement in mining techniques', value: "a" },
                    { label: 'the increase in demand for metals', value: "b" },
                    { label: 'the discovery of tin in the area', value: "c" },
                  ]}
                />

                {/************* [13] *************/}
                <IELTSRadio
                  qn="13"
                  question="Why did rocks have to be sent away from Manham to be processed?"
                  options={[
                    { label: 'shortage of fuel', value: "a" },
                    { label: 'poor transport systems', value: "b" },
                    { label: 'lack of skills among local people', value: "c" },
                  ]}
                />

                {/************* [14] *************/}
                <IELTSRadio
                  qn="14"
                  question="What happened when the port declined in the twentieth century?"
                  options={[
                    { label: 'The workers went away.', value: "a" },
                    { label: 'Traditional skills were lost.', value: "b" },
                    { label: 'Buildings were used for new purposes.', value: "c" },
                  ]}
                />

                {/************* [15] *************/}
                <IELTSRadio
                  qn="15"
                  question="What did the Manham Trust hope to do?"
                  options={[
                    { label: 'discover the location of the original port', value: "a" },
                    { label: 'provide jobs for the unemployed', value: "b" },
                    { label: 'rebuild the port complex', value: "c" },
                  ]}
                />

                <strong> 16-20 Table </strong>
              </>
            }

            {part === 3 &&
              <>
                {/* ================================================================================ [21-22] */}
                <IELTSQuestionTitle from="21" to="22" type="15" />
                {/************* [21-22] *************/}
                <IELTSMultiCheckbox
                  qn="21"
                  question="Which TWO skills did Laura improve as a result of her work placement?"
                  checkList={[
                    { label: 'communication', value: "a", },
                    { label: 'design', value: "b", },
                    { label: 'IT', value: "c", },
                    { label: 'marketing', value: "d", },
                    { label: 'organisation', value: "e", },
                  ]}
                />

                {/* ================================================================================ [23-24] */}
                <IELTSQuestionTitle from="23" to="24" type="15" />
                {/************* [23-24] *************/}
                <IELTSMultiCheckbox
                  qn="23"
                  question="Which TWO immediate benefits did the company get from Laura’s work placement?"
                  checkList={[
                    { label: 'updates for its software', value: "a", },
                    { label: 'cost savings', value: "b", },
                    { label: 'an improved image', value: "c", },
                    { label: 'new clients', value: "d", },
                    { label: 'a growth in sales', value: "e", },
                  ]}
                />

                {/* ================================================================================ [25-30] */}
                <IELTSQuestionTitle
                  from="25"
                  to="30"
                  title="What source of information should Tim use at each of the following stages of the work placement?"
                  numberOfAnswers="six"
                  alphabet="g"
                  type="200"
                />
                {/************* [25-30] *************/}
                <DND_25_30 />
              </>
            }

            {part === 4 &&
              <>
                {/* ================================================================================ [31-33] */}
                <IELTSQuestionTitle from="11" to="15" type="16" />
                <strong>Nanotechnology: technology on a small scale</strong>
                {/************* [31] *************/}
                <IELTSRadio
                  qn="31"
                  question="The speaker says that one problem with nanotechnology is that"
                  options={[
                    { label: 'it could threaten our way of life.', value: "a" },
                    { label: 'it could be used to spy on people.', value: "b" },
                    { label: 'it is misunderstood by the public.', value: "c" },
                  ]}
                />

                {/************* [32] *************/}
                <IELTSRadio
                  qn="32"
                  question="According to the speaker, some scientists believe that nono-particles"
                  options={[
                    { label: 'should be restricted to secure environments.', value: "a" },
                    { label: 'should be used with more caution.', value: "b" },
                    { label: 'should only be developed for essential products.', value: "c" },
                  ]}
                />

                {/************* [33] *************/}
                <IELTSRadio
                  qn="33"
                  question="In the speaker’s opinion, research into nanotechnology"
                  options={[
                    { label: 'has yet to win popular support.', value: "a" },
                    { label: 'could be seen as unethical.', value: "b" },
                    { label: 'ought to be continued.', value: "c" },
                  ]}
                />
                {/* ================================================================================ [34-40] */}
                <IELTSQuestionTitle from="34" to="40" type="1" />
                <IELTSTitle title="Uses of Nanotechnology" isHeader />
                <IELTSTitle title="Transport" />
                {/************* [34] *************/}
                <IELTSInput qn="34" beforeInput="● Nanotechnology could allow the development of stronger" />
                <Typography>● Planes would be much lighter in weight.</Typography>
                {/************* [35] *************/}
                <IELTSInput qn="35" beforeInput="●&nbsp;" afterInput="travel will be made available to the masses." />
                <IELTSTitle title="Technology" />
                {/************* [36] *************/}
                <IELTSInput qn="36" beforeInput="●   we are more likely to focus on promotion goals when with a" />
                {/************* [37] *************/}
                <IELTSInput qn="37" beforeInput="●&nbsp;" afterInput="Energy will become more affordable." />
                <IELTSTitle title="The Environment" />
                <Typography>● Nano-robots could rebuild the ozone layer.</Typography>
                {/************* [38] *************/}
                <IELTSInput qn="38" beforeInput="●   Pollutants such as" afterInput="could be removed from water" />
                {/************* [39] *************/}
                <IELTSInput qn="39" beforeInput="●   There will be no" afterInput="from manufacturing." />
                <IELTSTitle title="Health and Medicine" />
                <Typography>
                  ●   New methods of food production could eradicate famine.
                </Typography>
                {/************* [40] *************/}
                <IELTSInput qn="40" beforeInput="● Analysis of medical" afterInput="will be speeded up." />
                <Typography>
                  ●   Life expectancy could be increased.
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