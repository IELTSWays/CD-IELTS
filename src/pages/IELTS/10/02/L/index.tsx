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
                {/* ================================================================================ [01-10] */}
                <IELTSQuestionTitle from="1" to="10" type="1" />
                <IELTSTitle title="Transport Survey" isHeader />
                {/************* [0] *************/}
                <Typography className='italic'>Example</Typography>
                <IELTSInput qn="0" beforeInput="Travelled to town today: by" disabled placeholder="bus" />
                {/************* [1] *************/}
                <IELTSInput qn="1" beforeInput="Name: Luisa" beforeInputStrong />
                {/************* [2] *************/}
                <IELTSInput qn="2" beforeInput="Address:" afterInput="White Stone Rd" beforeInputStrong />
                <IELTSTitle title="Area: Bradfield" />
                {/************* [3] *************/}
                <IELTSInput qn="3" beforeInput="Postcard" beforeInputStrong />
                {/************* [4] *************/}
                <IELTSInput qn="4" beforeInput="Occupation:" beforeInputStrong />
                {/************* [5] *************/}
                <IELTSInput qn="5" beforeInput="Reason for visit to town: to go to the" beforeInputStrong />
                <IELTSTitle title="Suggestions for improvement:" />
                {/************* [6] *************/}
                <IELTSInput qn="6" beforeInput="● better" />
                <Typography>
                  ●   have more footpaths
                </Typography>
                {/************* [7] *************/}
                <IELTSInput qn="7" beforeInput="●   more frequent" />
                <IELTSTitle title="Things that would encourage cycling to work:" />
                {/************* [8] *************/}
                <IELTSInput qn="8" beforeInput="●   having" afterInput="parking places for bicycles" />
                {/************* [9] *************/}
                <IELTSInput qn="9" beforeInput="●   being able to use a" afterInput="at work" />
                {/************* [10] *************/}
                <IELTSInput qn="10" beforeInput="●   the opportunity to have cycling" afterInput="on busy roads" />
              </>
            }

            {part === 2 &&
              <>
                {/* ================================================================================ [11-14] */}
                <IELTSQuestionTitle from="11" to="14" type="16" />
                <strong>New city developments</strong>
                {/************* [11] *************/}
                <IELTSRadio
                  qn="11"
                  question="The idea for the two new developments in the city came from"
                  options={[
                    { label: 'local people.', value: "a" },
                    { label: 'the City Council.', value: "b" },
                    { label: 'the SWRDC.', value: "c" },
                  ]}
                />

                {/************* [12] *************/}
                <IELTSRadio
                  qn="12"
                  question="What is unusual about Brackenside pool?"
                  options={[
                    { label: 'its architectural style', value: "a" },
                    { label: 'its heating system', value: "b" },
                    { label: 'its method of water treatment', value: "c" },
                  ]}
                />

                {/************* [13] *************/}
                <IELTSRadio
                  qn="13"
                  question="Local newspapers have raised worries about"
                  options={[
                    { label: 'the late opening date.', value: "a" },
                    { label: 'the cost of the project.', value: "b" },
                    { label: 'the size of the facilities.', value: "c" },
                  ]}
                />

                {/************* [14] *************/}
                <IELTSRadio
                  qn="14"
                  question="What decision has not yet been made about the pool?"
                  options={[
                    { label: 'whose statue will be at the door', value: "a" },
                    { label: 'the exact opening times', value: "b" },
                    { label: 'who will open it', value: "c" },
                  ]}
                />
                {/* ================================================================================ [15-20] */}
                <IELTSQuestionTitle
                  from="15"
                  to="20"
                  title="Which feature is related to each of the following areas of the world represented in the playground?"
                  numberOfAnswers="six"
                  alphabet="i"
                  type="200"
                />
                {/************* [15-20] *************/}
                <DND_15_20 />
              </>
            }

            {part === 3 &&
              <>
                {/* ================================================================================ [21-22] */}
                <IELTSQuestionTitle from="21" to="22" type="15" />
                {/************* [21-22] *************/}
                <IELTSMultiCheckbox
                  qn="21"
                  question="Which TWO hobbies was Thor Heyerdahl very interested in as a youth?"
                  checkList={[
                    { label: 'camping', value: "a", },
                    { label: 'climbing', value: "b", },
                    { label: 'collecting', value: "c", },
                    { label: 'hunting', value: "d", },
                    { label: 'reading', value: "e", },
                  ]}
                />
                {/* ================================================================================ [23-24] */}
                <IELTSQuestionTitle from="23" to="24" type="15" />
                {/************* [23-24] *************/}
                <IELTSMultiCheckbox
                  qn="23"
                  question="Which do the speakers say are the TWO reasons why Heyerdahl went to live on an island?"
                  checkList={[
                    { label: 'to examine ancient carvings', value: "a", },
                    { label: 'to experience an isolated place', value: "b", },
                    { label: 'to formulate a new theory', value: "c", },
                    { label: 'to learn survival skills', value: "d", },
                    { label: 'to study the impact of an extreme environment', value: "e", },
                  ]}
                />
                {/* ================================================================================ [25-30] */}
                <IELTSQuestionTitle from="25" to="30" type="16" />
                <strong>The later life of Thor Heyerdahl</strong>
                {/************* [25] *************/}
                <IELTSRadio
                  qn="25"
                  question="According to Victor and Olivia, academics thought that Polynesian migration from the east was impossible due to"
                  options={[
                    { label: 'the fact that Eastern countries were far away.', value: "a" },
                    { label: 'the lack of materials for boat building.', value: "b" },
                    { label: 'the direction of the winds and currents', value: "c" },
                  ]}
                />
                {/************* [26] *************/}
                <IELTSRadio
                  qn="26"
                  question="Which do the speakers agree was the main reason for Heyerdahl’s raft journey?"
                  options={[
                    { label: 'to overcome a research setback', value: "a" },
                    { label: 'to demonstrate a personal quality', value: "b" },
                    { label: 'to test a new theory', value: "c" },
                  ]}
                />
                {/************* [27] *************/}
                <IELTSRadio
                  qn="27"
                  question="What was most important to Heyerdahl about his raft journey?"
                  options={[
                    { label: 'the fact that he was the first person to do it', value: "a" },
                    { label: 'the speed of crossing the Pacific', value: "b" },
                    { label: 'the use of authentic construction methods', value: "c" },
                  ]}
                />
                {/************* [28] *************/}
                <IELTSRadio
                  qn="28"
                  question="What do the students agree about including reference to exercise in their presentation?"
                  options={[
                    { label: 'to build a stone statue', value: "a" },
                    { label: 'to sail a reed boat', value: "b" },
                    { label: 'to learn the local language', value: "c" },
                  ]}
                />
                {/************* [29] *************/}
                <IELTSRadio
                  qn="29"
                  question="In Olivia’s opinion, Heyerdahl’s greatest influence was on"
                  options={[
                    { label: 'theories about Polynesian origins.', value: "a" },
                    { label: 'the development of archaeological methodology.', value: "b" },
                    { label: 'establishing archaeology as an academic subject.', value: "c" },
                  ]}
                />
                {/************* [30] *************/}
                <IELTSRadio
                  qn="30"
                  question="Which criticism do the speakers make of William Oliver’s textbook?"
                  options={[
                    { label: 'Its style is out of date.', value: "a" },
                    { label: 'Its content is over-simplified.', value: "b" },
                    { label: 'Its methodology is flawed.', value: "c" },
                  ]}
                />
              </>
            }

            {part === 4 &&
              <>
                <IELTSQuestionTitle from="31" to="40" type="1" />
                <IELTSTitle title="THE FUTURE OF MANAGEMENT" isHeader />
                <IELTSTitle title="Business markets" />
                {/************* [31] *************/}
                <IELTSInput qn="31" beforeInput="●   greater" afterInput="among companies" />
                {/************* [32] *************/}
                <IELTSInput qn="32" beforeInput="●   increase in power of large" afterInput="Companies" />
                {/************* [33] *************/}
                <IELTSInput qn="33" beforeInput="●   rising" afterInput="in certain countries" />
                <IELTSTitle title="External influences on businesses" />
                {/************* [34] *************/}
                <IELTSInput qn="34" beforeInput="●   more discussion with" afterInput="before making business decisions" />
                {/************* [35] *************/}
                <IELTSTitle title="Tests:" />
                <IELTSInput qn="35" beforeInput="●   environmental concerns which may lead to more" />
                <IELTSTitle title="Business structures" />
                {/************* [36] *************/}
                <IELTSInput qn="36" beforeInput="●   more teams will be formed to work on a particular" />
                {/************* [37] *************/}
                <IELTSInput qn="37" beforeInput="●   businesses may need to offer hours that are" afterInput=", or the chance to work remotely" />
                <IELTSTitle title=", or the chance to work remotely" />
                {/************* [38] *************/}
                <IELTSInput qn="38" beforeInput="●   increasing need for managers to provide good" />
                {/************* [39] *************/}
                <IELTSInput qn="39" beforeInput="●   changes influenced by" afterInput="taking senior roles" />
                <IELTSTitle title="Changes in the economy" />
                <Typography>
                  ●   service sector continues to be important
                </Typography>
                <Typography>
                  ●   increasing value of intellectual property
                </Typography>
                {/************* [40] *************/}
                <IELTSInput qn="40" beforeInput="●   more and more" afterInput="workers" />
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