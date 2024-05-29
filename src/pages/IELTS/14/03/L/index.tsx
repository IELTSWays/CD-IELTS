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
import IELTSTableOptions from '@/components/IELTS/QuestionTypes/IELTSTableOptions';
import DND_15_20 from './DND_15_20'
import DND_27_30 from './DND_27_30'

import useGetAnswer from '@/services/Requests/useGetAnswer';

const index = () => {
  const dispatch = useAppDispatch()

  const fontSize = useAppSelector((state: any) => state.user.fontSize)
  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state: any) => state.user.currentQuestion)

  const [test_id, setTest_id] = useState<any>('')

  const { refetch: refetchGetAnswer, data: dataGetAnswer, isLoading, isSuccess } = useGetAnswer()

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
    if (currentQuestion == 15 || currentQuestion == 13 || currentQuestion == 21 || currentQuestion == 23) {
      dispatch(setCurrentQuestion(+currentQuestion - 2))
    }
    else {
      dispatch(setCurrentQuestion(+currentQuestion - 1))
    }
  }

  const handleNext = () => {
    if (currentQuestion == 11 || currentQuestion == 13 || currentQuestion == 19 || currentQuestion == 21) {
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
                <IELTSTitle title="Flanders Conference Hotel" isHeader />
                {/************* [0] *************/}
                <Typography className='italic'>Example</Typography>
                <IELTSInput qn="0" beforeInput="Customer Services Manager:" disabled placeholder="Angela" />
                <IELTSTitle title="Date available" />
                <Typography>
                  ● weekend beginning February 4th
                </Typography>
                {/************* [1] *************/}
                <IELTSTitle title="Conference facilities" />
                <IELTSInput qn="1" beforeInput="● the" afterInput="room for talks" />
                {/************* [2] *************/}
                <IELTSInput qn="2" beforeInput="&nbsp; &nbsp;(projector and" afterInput="available)" />
                {/************* [3] *************/}
                <IELTSInput qn="3" beforeInput="● area for coffee and an" />
                {/************* [4] *************/}
                <IELTSInput qn="4" beforeInput="● free" afterInput="throughout" />
                {/************* [5] *************/}
                <IELTSInput qn="5" beforeInput="● a standard buffet lunch costs" afterInput="including breakfast." />
                {/************* [6] *************/}
                <IELTSTitle title="Accommodation" />
                <IELTSInput qn="6" beforeInput="● Rooms will cost $" afterInput="including breakfast." />
                {/************* [7] *************/}
                <IELTSTitle title="Other facilities" />
                <IELTSInput qn="7" beforeInput="● The hotel also has a spa and rooftop" />
                {/************* [8] *************/}
                <IELTSInput qn="8" beforeInput="● There’s a free shuttle service to the" />
                {/************* [9] *************/}
                <IELTSTitle title="Location" />
                <IELTSInput qn="9" beforeInput="● Wilby Street (quite near the" afterInput=")" />
                {/************* [10] *************/}
                <IELTSInput qn="10" beforeInput="● near to restaurants and many" />
              </>
            }

            {part === 2 &&
              <>
                {/* ================================================================================ [11-12] */}
                <IELTSQuestionTitle from="11" to="12" type="2" />
                {/************* [11-12] *************/}
                <div id="q-101">
                  <IELTSMultiCheckbox
                    qn="11"
                    question="Which TWO activities that volunteers do are mentioned?"
                    checkList={[
                      { label: 'decorating', value: "a", },
                      { label: 'cleaning', value: "b", },
                      { label: 'delivering meals', value: "c", },
                      { label: 'shopping', value: "d", },
                      { label: 'childcare', value: "e", },
                    ]}
                  />
                </div>
                {/* ================================================================================ [13-14] */}
                <IELTSQuestionTitle from="13" to="14" type="2" />
                {/************* [13-14] *************/}
                <IELTSMultiCheckbox
                  qn="13"
                  question="Which TWO ways that volunteers can benefit from volunteering are mentioned?"
                  checkList={[
                    { label: 'learning how to be part of a team', value: "a", },
                    { label: 'having a sense of purpose', value: "b", },
                    { label: 'realising how lucky they are', value: "c", },
                    { label: 'improved ability at time management', value: "d", },
                    { label: 'boosting their employment prospects', value: "e", },
                  ]}
                />
                {/* ================================================================================ [15-20] */}
                <IELTSQuestionTitle from="15" to="20" type="3" />
                <Typography>
                  What has each of the following volunteers helped someone to do?
                </Typography>
                <DND_15_20 />
              </>
            }

            {part === 3 &&
              <>
                {/* ================================================================================ [21-26] */}
                <IELTSQuestionTitle from="21" to="24" type="4" />
                <IELTSTitle title="Background on school marching band" />
                {/************* [21] *************/}
                <IELTSInput qn="21" beforeInput="It consists of around" afterInput="students." />
                {/************* [22] *************/}
                <IELTSInput qn="22" beforeInput="It is due to play in a" afterInput="band competition." />
                {/************* [23] *************/}
                <IELTSInput qn="23" beforeInput="It has been invited to play in the town’s" />
                {/************* [24] *************/}
                <IELTSInput qn="24" beforeInput="They have listened to a talk by a" />
                {/************* [25] *************/}
                <IELTSInput qn="25" beforeInput="Joe will discuss a" afterInput="with the band." />
                {/************* [26] *************/}
                <IELTSInput qn="26" beforeInput="Joe hopes the band will attend a" afterInput="next month." />
                {/* ================================================================================ [27-30] */}
                <IELTSQuestionTitle from="25" to="30" type="3" />
                <Typography>
                  What problem does Joe mention in connection with each of the following band members?
                </Typography>
                <DND_27_30 />
              </>
            }

            {part === 4 &&
              <>
                {/* ================================================================================ [31-40] */}
                <IELTSQuestionTitle from="31" to="40" type="1" />
                <IELTSTitle title="Concerts in university arts festival" isHeader />
                {/************* [31] *************/}
                <IELTSTitle title="Concert 1" />
                <Typography>
                  ● Australian composer: Liza Lim
                </Typography>
                <IELTSInput qn="31" beforeInput="● studied piano and" afterInput="before turning to composition" />
                {/************* [32] *************/}
                <Typography>
                  ● performers and festivals around the world have given her a lot of commissions
                </Typography>
                <IELTSInput qn="32" beforeInput="● compositions show a great deal of" afterInput="and are drawn from various cultural sources" />
                {/************* [33] *************/}
                <IELTSInput qn="33" beforeInput="● her music is very expressive and also" />
                {/************* [34] *************/}
                <IELTSInput qn="34" beforeInput="● festival will include her" afterInput="called The Oresteia" />
                {/************* [35] *************/}
                <IELTSInput qn="35" beforeInput="● Lim described the sounds in The Oresteia as" />
                <Typography>
                  ● British composers: Ralph Vaughan Williams, Frederick Delius
                </Typography>
                {/************* [36] *************/}
                <IELTSTitle title="Concert 2" />
                <Typography>
                  ● British composers: Benjamin Britten, Judith Weir
                </Typography>
                <Typography>
                  ● Australian composer: Ross Edwards
                </Typography>
                <Typography>
                  ● festival will include The Tower of Remoteness, inspired by nature
                </Typography>
                <IELTSInput qn="36" beforeInput="● The Tower of Remoteness is performed by piano and" />
                {/************* [37] *************/}
                <Typography>
                  ● compositions include music for children
                </Typography>
                <IELTSInput qn="37" beforeInput="● celebrates Australia’s cultural" />
                {/************* [38] *************/}
                <IELTSTitle title="Concert 3" />
                <Typography>
                  ● Australian composer: Carl Vine
                </Typography>
                <Typography>
                  ● played cornet then piano
                </Typography>
                <IELTSInput qn="38" beforeInput="● studied" afterInput="before studying music" />
                <Typography>
                  ● worked in Sydney as a pianist and composer
                </Typography>
                {/************* [39] *************/}
                <IELTSInput qn="39" beforeInput="● became well known as composer of music for" />
                {/************* [40] *************/}
                <IELTSInput qn="40" beforeInput="● festival will include his music for the 1996" />
                <Typography>
                  ● British composers: Edward Elgar, Thomas Adès
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
    </div>
  );
};

export default index;