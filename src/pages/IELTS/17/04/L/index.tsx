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
                <IELTSQuestionTitle from="1" to="10" type="1" />
                <IELTSTitle title="Easy Life Cleaning Services" isHeader />
                <strong> Basic cleaning package offered </strong>
                <Typography> ●   Cleaning all surfaces </Typography>
                {/************* [1] *************/}
                <IELTSInput qn="1" beforeInput="●   Cleaning the" afterInput="throughout the apartment" />
                <Typography> ●   Cleaning shower, sinks, toilet etc. </Typography>
                <strong> Additional services agreed </strong>
                <Typography> ●   Every week </Typography>
                {/************* [2] *************/}
                <IELTSInput qn="2" beforeInput="&nbsp;&nbsp; –  Cleaning the" />
                <Typography> &nbsp;&nbsp; –  Ironing clothes </Typography>
                {/************* [3] *************/}
                <IELTSInput qn="3" beforeInput="&nbsp;&nbsp; –" afterInput="only" />
                <Typography> ●   Every month </Typography>
                {/************* [4] *************/}
                <IELTSInput qn="4" beforeInput="&nbsp;&nbsp; –  Cleaning all the" afterInput="from the inside" />
                {/************* [5] *************/}
                <IELTSInput qn="5" beforeInput="&nbsp;&nbsp; –  Washing down the" />
                <strong> Other possibilities </strong>
                {/************* [6] *************/}
                <IELTSInput qn="6" beforeInput="●   They can organise a plumber or an" afterInput="if necessary." />
                {/************* [7] *************/}
                <IELTSInput on="7" beforeInput="●   A special cleaning service is available for customers who are allergic to" />
                <strong> Information on the cleaners </strong>
                {/************* [8] *************/}
                <IELTSInput qn="8" beforeInput="●   Before being hired, all cleaners have a background check carried out by the" />
                <Typography> ●   References are required. </Typography>
                {/************* [9] *************/}
                <IELTSInput qn="9" beforeInput="●   All cleaners are given" afterInput="for two weeks." />
                {/************* [10] *************/}
                <IELTSInput qn="10" beforeInput="●   Customers send a" afterInput="after each visit." />
                <Typography> ●   Usually, each customer has one regular cleaner. </Typography>
              </>

            }

            {part === 2 &&
              <>
                {/* ================================================================================ [11-14] */}
                <IELTSQuestionTitle from="11" to="14" type="16" />
                {/************* [11] *************/}
                <IELTSRadio
                  qn="11"
                  question="Many hotel managers are unaware that their staff often leave because of"
                  options={[
                    { label: 'a lack of training.', value: "a" },
                    { label: 'long hours.', value: "b" },
                    { label: 'low pay.', value: "c" },
                  ]}
                />
                {/************* [12] *************/}
                <IELTSRadio
                  qn="12"
                  question="What is the impact of high staff turnover on managers?"
                  options={[
                    { label: 'an increased workload', value: "a" },
                    { label: 'low morale', value: "b" },
                    { label: 'an inability to meet targets', value: "c" },
                  ]}
                />
                {/************* [13] *************/}
                <IELTSRadio
                  qn="13"
                  question="What mistake should managers always avoid?"
                  options={[
                    { label: 'failing to treat staff equally', value: "a" },
                    { label: 'reorganising shifts without warning', value: "b" },
                    { label: 'neglecting to have enough staff during busy periods', value: "c" },
                  ]}
                />

                {/************* [14] *************/}
                <IELTSRadio
                  qn="14"
                  question="What unexpected benefit did Dunwich Hotel notice after improving staff retention rates?"
                  options={[
                    { label: 'a fall in customer complaints', value: "a" },
                    { label: 'an increase in loyalty club membership', value: "b" },
                    { label: 'a rise in spending per customer', value: "c" },
                  ]}
                />

                {/* ================================================================================ [15-20] */}
                <IELTSQuestionTitle from="15" to="20" type="201" title="Which way of reducing staff turnover was used in each of the following hotels?" />
                {/************* [15-20] *************/}
                <IELTSTableOptionsLabel
                  questions={
                    [
                      { id: 15, title: 'The Sun Club' },
                      { id: 16, title: 'The Portland' },
                      { id: 17, title: 'Bluewater Hotels' },
                      { id: 18, title: 'Pentlow Hotels' },
                      { id: 19, title: 'Green Planet' },
                      { id: 20, title: 'The Amesburyللل' },
                    ]
                  }
                  topLabels={[
                    { title: "improving relationships and teamwork" },
                    { title: "offering incentives and financial benefits" },
                    { title: "providing career opportunities" },
                  ]
                  }
                  options={
                    [
                      { label: 'A', value: "a", },
                      { label: 'B', value: "b", },
                      { label: 'C', value: "c", },
                    ]
                  }
                />
              </>
            }

            {part === 3 &&
              <>
                {/* ================================================================================ [21-22] */}
                <IELTSQuestionTitle from="21" to="22" type="101" />
                {/************* [21-22] *************/}
                <IELTSMultiCheckbox
                  qn="21"
                  question="Which TWO points do Thomas and Jeanne make about Thomas’s sporting activities at school?"
                  checkList={[
                    { label: 'He should have felt more positive about them.', value: "a", },
                    { label: 'The training was too challenging for him.', value: "b", },
                    { label: 'He could have worked harder at them.', value: "c", },
                    { label: 'His parents were disappointed in him.', value: "d", },
                    { label: 'His fellow students admired him.', value: "e", },
                  ]}
                />

                {/* ================================================================================ [23-24] */}
                <IELTSQuestionTitle from="23" to="24" type="101" />
                {/************* [23-24] *************/}
                <IELTSMultiCheckbox
                  qn="23"
                  question="Which TWO feelings did Thomas experience when he was in Kenya?"
                  checkList={[
                    { label: 'It started recently.', value: "a", },
                    { label: 'More children attend after school than before school.', value: "b", },
                    { label: 'An average of 50 children attend in the mornings.', value: "c", },
                    { label: 'A child cannot attend both the before and after school sessions.', value: "d", },
                    { label: 'The maximum number of children who can attend is 70.', value: "e", },
                  ]}
                />
                {/* ================================================================================ [25-30] */}
                <IELTSQuestionTitle
                  from="25"
                  to="30"
                  title="What comment do the students make about the development of each of the following items of sporting equipment?"
                  numberOfAnswers="six"
                  alphabet="h"
                  type="200"
                />
                <DND_25_30/>
              </>
            }

            {part === 4 &&
              <>
                {/* ================================================================================ [31-40] */}
                <IELTSQuestionTitle from="31" to="40" type="1" />
                <IELTSTitle title="Maple syrup" isHeader />
                <IELTSTitle title="What is maple syrup?" />
                <Typography>
                  ●   made from the sap of the maple tree
                </Typography>
                <Typography>
                  ●   added to food or used in cooking
                </Typography>
                {/************* [31] *************/}
                <IELTSInput qn="31" beforeInput="●   colour described as" />
                {/************* [32] *************/}
                <IELTSInput qn="32" beforeInput="●   very" afterInput="compared to refined sugar" />
                <IELTSTitle title="The maple tree" />
                <Typography>
                  ●   has many species
                </Typography>
                <Typography>
                  ●   needs sunny days and cool nights
                </Typography>
                <Typography>
                  ●   maple leaf has been on the Canadian flag since 1964
                </Typography>
                <Typography>
                  ●   needs moist soil but does not need fertiliser as well
                </Typography>
                {/************* [33] *************/}
                <IELTSInput qn="33" beforeInput="●   best growing conditions and" afterInput="are in Canada and North America" />
                <IELTSTitle title="Early maple sugar producers" />
                <Typography>
                  ●   made holes in the tree trunks
                </Typography>
                {/************* [34] *************/}
                <IELTSInput qn="34" beforeInput="●   used hot" afterInput="to heat the sap" />
                <Typography>
                  ●   used tree bark to make containers for collection
                </Typography>
                <Typography>
                  ●   sweetened food and drink with sugar
                </Typography>
                <IELTSTitle title="Today’s maple syrup" />
                {/************* [35] *************/}
                <IELTSInput qn="35" beforeInput="●   Tree trunks may not have the correct" afterInput="until they have been growing for 40 years." />
                <Typography>
                  ●   The changing temperature and movement of water within the tree produces the sap.
                </Typography>
                <IELTSTitle title="The production" />
                {/************* [36] *************/}
                <IELTSInput qn="36" beforeInput="●   A tap drilled into the trunk and a" afterInput="carries the sap into a bucket." />
                {/************* [37] *************/}
                <IELTSInput qn="37" beforeInput="●   Large pans of sap called evaporators are heated by means of a" afterInput="." />
                {/************* [38] *************/}
                <IELTSInput qn="38" beforeInput="●   A lot of" afterInput="is produced during the evaporation process." />
                {/************* [39] *************/}
                <IELTSInput qn="39" beforeInput="●   ‘Sugar sand’ is removed because it makes the syrup look" afterInput="and affects the taste." />
                <Typography>
                  ●   The syrup is ready for use.
                </Typography>
                {/************* [40] *************/}
                <IELTSInput qn="40" beforeInput="●   A huge quantity of sap is needed to make a" afterInput="of maple syrup." />
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