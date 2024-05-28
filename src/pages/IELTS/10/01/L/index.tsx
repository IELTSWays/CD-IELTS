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
import IELTSTableOptionsLabel from '@/components/IELTS/QuestionTypes/IELTSTableOptionsLabel'

import useGetAnswer from '@/services/Requests/useGetAnswer';

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
                {/* ================================================================================ [01-07] */}
                <IELTSQuestionTitle from="1" to="10" type="1" />
                <IELTSTitle title="SELF-DRIVE TOURS IN THE USA" isHeader />
                {/************* [0] *************/}
                <Typography className='italic'>Example</Typography>
                <IELTSTwoCol colLeft="Name:" colRight="Andrea" disabled placeholder="Brown" colLeftStrong />
                {/************* [1] *************/}
                <IELTSInput qn="1" colLeft="Address:" beforeInput="24" afterInput="Road" colLeftStrong />
                <IELTSTwoCol colLeft="Postcode:" colRight="BH5 2OP" colLeftStrong />
                <IELTSTwoCol colLeft="Phone:" colRight="(mobile) 077 8664 3091" colLeftStrong />
                {/************* [2] *************/}
                <IELTSInput qn="2" colLeft="Heard about company from:" colLeftStrong />
                <IELTSTitle title="Possible self-drive tours" />
                <IELTSTitle title="Trip One" />
                {/************* [3] *************/}
                <IELTSInput qn="3" beforeInput="●   Los Angeles: customer wants to visit some" afterInput="parks with her children" />
                {/************* [4] *************/}
                <IELTSInput qn="4" beforeInput="●   Yosemite Park: customer wants to stay in a lodge, not a" />
                <IELTSTitle title="Trip Two" />
                {/************* [5] *************/}
                <IELTSInput qn="5" beforeInput="●   Customer wants to see the " afterInput="on the way to Cambria" />
                <Typography>
                  ●   At Santa Monica: not interested in shopping
                </Typography>
                {/************* [6] *************/}
                <IELTSInput qn="6" beforeInput="●   At San Diego, wants to spend time on the" />

                <Typography>7 - 10, Table</Typography>
              </>
            }

            {part === 2 &&
              <>
                {/* ================================================================================ [11-12] */}
                <IELTSQuestionTitle from="11" to="12" type="101" />
                {/************* [11-12] *************/}
                <IELTSMultiCheckbox
                  qn="11"
                  question="Which TWO facilities at the leisure club have recently been improved?"
                  checkList={[
                    { label: 'the gym', value: "a", },
                    { label: 'the tracks', value: "b", },
                    { label: 'the indoor pool', value: "c", },
                    { label: 'the outdoor pool', value: "d", },
                    { label: 'the sports training for children', value: "e", },
                  ]}
                />

                {/* ================================================================================ [13-20] */}
                <IELTSQuestionTitle from="13" to="20" type="202" />
                <IELTSTitle title="Joining the leisure club" isHeader />
                <Typography className='italic'>Personal Assessment</Typography>
                {/************* [13] *************/}
                <IELTSInput qn="13" beforeInput="● New members should describe any" />
                {/************* [14] *************/}
                <IELTSInput qn="14" beforeInput="● The" afterInput="will be explained to you before you use the equipment." />
                {/************* [5] *************/}
                <IELTSInput qn="15" beforeInput="● You will be given a six-week" />
                <Typography className='italic'>Types of membership</Typography>
                {/************* [16] *************/}
                <IELTSInput qn="16" beforeInput="● There is a compulsory £90" afterInput="fee for members." />
                {/************* [17] *************/}
                <IELTSInput qn="17" beforeInput="● Gold members are given" afterInput="to all the LP clubs." />
                {/************* [18] *************/}
                <IELTSInput qn="18" beforeInput="● Premier members are given priority during" afterInput="hours." />
                {/************* [19] *************/}
                <IELTSInput qn="19" beforeInput="● Premier members can bring some" afterInput="every month." />
                {/************* [20] *************/}
                <IELTSInput qn="20" beforeInput="● Members should always take their" afterInput="with them." />
              </>
            }

            {part === 3 &&
              <>
                {/* ================================================================================ [21-25] */}
                <IELTSQuestionTitle from="21" to="25" type="16" />
                <strong>Global Design Competition</strong>
                {/************* [21] *************/}
                <IELTSRadio
                  qn="21"
                  question="Students entering the design competition have to"
                  options={[
                    { label: 'produce an energy-efficient design.', value: "a" },
                    { label: 'adapt an existing energy-saving appliance.', value: "b" },
                    { label: 'develop a new use for current technology.', value: "c" },
                  ]}
                />
                {/************* [22] *************/}
                <IELTSRadio
                  qn="12"
                  question="John chose a dishwasher because he wanted to make dishwashers"
                  options={[
                    { label: 'more appealing.', value: "a" },
                    { label: 'more common.', value: "b" },
                    { label: 'more economical.', value: "c" },
                  ]}
                />
                {/************* [23] *************/}
                <IELTSRadio
                  qn="23"
                  question="The stone in John’s ‘Rockpool’ design is used"
                  options={[
                    { label: 'for decoration.', value: "a" },
                    { label: 'to switch it on.', value: "b" },
                    { label: 'to stop water escaping.', value: "c" },
                  ]}
                />
                {/************* [24] *************/}
                <IELTSRadio
                  qn="24"
                  question="In the holding chamber, the carbon dioxide"
                  options={[
                    { label: 'changes back to a gas.', value: "a" },
                    { label: 'dries the dishes.', value: "b" },
                    { label: 'is allowed to cool.', value: "c" },
                  ]}
                />
                {/************* [25] *************/}
                <IELTSRadio
                  qn="25"
                  question="At the end of the cleaning process, the carbon dioxide"
                  options={[
                    { label: 'is released into the air.', value: "a" },
                    { label: 'is disposed of with the waste.', value: "b" },
                    { label: 'is collected ready to be re-used.', value: "c" },
                  ]}
                />

                {/* ================================================================================ [26-30] */}
                <IELTSQuestionTitle from="26" to="30" type="4" />
                {/************* [26] *************/}
                <IELTSInput qn="26" beforeInput="●  John needs help preparing for his" />
                {/************* [27] *************/}
                <IELTSInput qn="27" beforeInput="● The professor advises John to make a" afterInput="of his design." />
                {/************* [28] *************/}
                <IELTSInput qn="28" beforeInput="● John’s main problem is getting good quality" />
                {/************* [29] *************/}
                <IELTSInput qn="29" beforeInput="● The professor suggests John apply for a" />
                {/************* [30] *************/}
                <IELTSInput qn="30" beforeInput="● The professor will check the" afterInput="information in John’s written report." />
              </>
            }

            {part === 4 &&
              <>
                {/* ================================================================================ [31-40] */}
                <IELTSQuestionTitle from="31" to="40" type="4" />
                <IELTSTitle title="THE SPIRIT BEAR" isHeader />
                <IELTSTitle title="General facts" />
                <Typography>
                  ●   It is a white bear belonging to the black bear family.
                </Typography>
                {/************* [31] *************/}
                <IELTSInput qn="31" beforeInput="●   Its colour comes from an uncommon" afterInput="." />
                {/************* [32] *************/}
                <IELTSInput qn="32" beforeInput="●   Local people believe that it has unusual" afterInput="." />
                {/************* [33] *************/}
                <IELTSInput qn="33" beforeInput="●   They protect the bear from" afterInput="." />
                <IELTSTitle title="Habitat" />
                <Typography>
                  ●   The bear’s relationship with the forest is complex.
                </Typography>
                {/************* [34] *************/}
                <IELTSInput qn="34" beforeInput="●   Tree roots stop" afterInput="along salmon streams." />
                <Typography>
                  ●   The bears’ feeding habits provide nutrients for forest vegetation.
                </Typography>
                {/************* [35] *************/}
                <IELTSInput qn="35" beforeInput="●   It is currently found on a small number of" afterInput="." />
                <IELTSTitle title="Threats" />
                {/************* [36] *************/}
                <IELTSInput qn="36" beforeInput="●   Habitat is being lost due to deforestation and construction of" afterInput="by logging companies." />
                {/************* [37] *************/}
                <IELTSInput qn="37" beforeInput="●   Unrestricted" afterInput="is affecting the salmon supply." />
                {/************* [38] *************/}
                <IELTSInput qn="38" beforeInput="●   The bears’ existence is also threatened by their low rate of" afterInput="." />
                <IELTSTitle title="Going forward" />
                <Typography>
                  ●   Interested parties are working together.
                </Typography>
                {/************* [39] *************/}
                <IELTSInput qn="39" beforeInput="●   Logging companies must improve their" afterInput="of logging." />
                {/************* [40] *************/}
                <IELTSInput qn="40" beforeInput="●   Maintenance and" afterInput="of the spirit bears’ territory is needed." />
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