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
import IELTSTableOptionsLabel from '@/components/IELTS/QuestionTypes/IELTSTableOptionsLabel'

import useGetAnswer from '@/services/Requests/useGetAnswer';

import DND_27_30 from './DND_27_30'

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
    if (currentQuestion == 17 || currentQuestion == 19 || currentQuestion == 21) {
      dispatch(setCurrentQuestion(+currentQuestion - 2))
    }
    else {
      dispatch(setCurrentQuestion(+currentQuestion - 1))
    }
  }

  const handleNext = () => {
    if (currentQuestion == 15 || currentQuestion == 17 || currentQuestion == 19) {
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
                <IELTSTitle title="Buckworth Conservation Group" isHeader />
                <strong> Regular activities </strong>
                <Typography> Beach </Typography>
                {/************* [1] *************/}
                <IELTSInput qn="1" beforeInput="●   making sure the beach does not have" afterInput="on it" />
                {/************* [2] *************/}
                <IELTSInput qn="2" beforeInput="●   no" />
                <Typography> Nature reserve </Typography>
                <Typography> ●   maintaining paths </Typography>
                <Typography> ●   nesting boxes for birds installed </Typography>
                {/************* [3] *************/}
                <IELTSInput qn="3" beforeInput="●   next task is taking action to attract " afterInput="to the place" />
                {/************* [4] *************/}
                <IELTSInput qn="4" beforeInput="●   identifying types of" />
                {/************* [5] *************/}
                <IELTSInput qn="5" beforeInput="●   building a new" />
                <strong> Forthcoming events </strong>
                <Typography> Saturday </Typography>
                <Typography> ●   meet at Dunsmore Beach car park</Typography>
                {/************* [6] *************/}
                <IELTSInput qn="6" beforeInput="●   walk across the sands and reach the" />
                <Typography> ●   take a picnic </Typography>
                {/************* [7] *************/}
                <IELTSTitle title="Other facilities" />
                <IELTSInput qn="7" beforeInput="●   wear appropriate" />
                <Typography> Woodwork session </Typography>
                {/************* [8] *************/}
                <IELTSInput qn="8" beforeInput="●   suitable for" afterInput="to participate in" />
                {/************* [9] *************/}
                <IELTSInput qn="9" beforeInput="●   making" afterInput="out of wood" />
                <Typography> ●   17th, from 10 a.m. to 3 p.m. </Typography>
                {/************* [10] *************/}
                <IELTSInput qn="10" beforeInput="●   cost of session (no camping): £" />
              </>
            }

            {part === 2 &&
              <>
                {/* ================================================================================ [11-14] */}
                <IELTSQuestionTitle from="11" to="14" type="16" />
                {/************* [11] *************/}
                <IELTSRadio
                  qn="11"
                  question="What is the maximum number of people who can stand on each side of the boat?"
                  options={[
                    { label: '9', value: "a" },
                    { label: '15', value: "b" },
                    { label: '18', value: "c" },
                  ]}
                />
                {/************* [12] *************/}
                <IELTSRadio
                  qn="12"
                  question="What colour are the tour boats?"
                  options={[
                    { label: 'dark red', value: "a" },
                    { label: 'jet black', value: "b" },
                    { label: 'light green', value: "c" },
                  ]}
                />
                {/************* [13] *************/}
                <IELTSRadio
                  qn="13"
                  question="Which lunchbox is suitable for someone who doesn't eat meat or fish?"
                  options={[
                    { label: 'Lunchbox 1', value: "a" },
                    { label: 'Lunchbox 2', value: "b" },
                    { label: 'Lunchbox 3', value: "c" },
                  ]}
                />
                {/************* [14] *************/}
                <IELTSRadio
                  qn="14"
                  question="What should people do with their litter?"
                  options={[
                    { label: 'take it home', value: "a" },
                    { label: 'hand it to a member of staff', value: "b" },
                    { label: 'put it in the bins provided on the boat', value: "c" },
                  ]}
                />

                {/* ================================================================================ [15-20] */}
                <IELTSQuestionTitle from="15" to="16" type="101" />
                {/************* [15-16] *************/}
                <IELTSMultiCheckbox
                  qn="15"
                  question="Which TWO features of the lighthouse does Lou mention?"
                  checkList={[
                    { label: 'why it was built', value: "a", },
                    { label: 'who built it', value: "b", },
                    { label: 'how long it took to build', value: "c", },
                    { label: 'who staffed it', value: "d", },
                    { label: 'what it was built with', value: "e", },
                  ]}
                />
                <IELTSQuestionTitle from="17" to="18" type="101" />
                {/************* [17-18] *************/}
                <IELTSMultiCheckbox
                  qn="17"
                  question="Which TWO types of creature might come close to the boat?"
                  checkList={[
                    { label: 'sea eagles', value: "a", },
                    { label: 'fur seals', value: "b", },
                    { label: 'dolphins', value: "c", },
                    { label: 'whales', value: "d", },
                    { label: 'penguins', value: "e", },
                  ]}
                />
                <IELTSQuestionTitle from="19" to="20" type="101" />
                {/************* [19-20] *************/}
                <IELTSMultiCheckbox
                  qn="19"
                  question="Which TWO types of creature might come close to the boat?"
                  checkList={[
                    { label: 'Only large tourist boats can visit them.', value: "a", },
                    { label: 'The entrances to them are often blocked.', value: "b", },
                    { label: 'It is too dangerous for individuals to go near them.', value: "c", },
                    { label: 'Someone will explain what is inside them.', value: "d", },
                    { label: 'They cannot be reached on foot.', value: "e", },
                  ]}
                />
              </>
            }

            {part === 3 &&
              <>
                {/* ================================================================================ [21-26] */}
                <strong> Work experience for veterinary science students </strong>
                <IELTSQuestionTitle from="21" to="26" type="16" />
                {/************* [21] *************/}
                <IELTSRadio
                  qn="21"
                  question="What problem did both Diana and Tim have when arranging their work experience?"
                  options={[
                    { label: 'make initial contact with suitable farms', value: "a" },
                    { label: 'organising transport to and from the farm', value: "b" },
                    { label: 'finding a placement for the required length of time', value: "c" },
                  ]}
                />
                {/************* [22] *************/}
                <IELTSRadio
                  qn="22"
                  question="Tim was pleased to be able to help"
                  options={[
                    { label: 'a lamb that had a broken leg.', value: "a" },
                    { label: 'a sheep that was having difficult giving birth.', value: "b" },
                    { label: 'a newly born lamb that was having trouble feeding.', value: "c" },
                  ]}
                />
                {/************* [23] *************/}
                <IELTSRadio
                  qn="23"
                  question="Diana says the sheep on her farm"
                  options={[
                    { label: 'were of various different varieties.', value: "a" },
                    { label: 'were mainly reared for their meat.', value: "b" },
                    { label: 'had better quality wool than sheep on the hills', value: "c" },
                  ]}
                />
                {/************* [24] *************/}
                <IELTSRadio
                  qn="24"
                  question="What did the students learn about adding supplements to chicken feed?"
                  options={[
                    { label: 'These should only be given if specially needed.', value: "a" },
                    { label: 'It is worth paying extra for the most effective ones.', value: "b" },
                    { label: 'The amount given at one time should be limited.', value: "c" },
                  ]}
                />
                {/************* [25] *************/}
                <IELTSRadio
                  qn="25"
                  question="What happened when Diana was working with dairy cows?"
                  options={[
                    { label: 'She identified some cows incorrectly.', value: "a" },
                    { label: 'She accidentally threw some milk away.', value: "b" },
                    { label: 'She made a mistake when storing milk.', value: "c" },
                  ]}
                />
                {/************* [26] *************/}
                <IELTSRadio
                  qn="26"
                  question="What did both farmers mention about vets and farming?"
                  options={[
                    { label: 'Vets are failing to cope with some aspects of animal health.', value: "a" },
                    { label: 'There needs to be a fundamental change in the training of vets.', value: "b" },
                    { label: 'Some jobs could be done by the farmer rather than by a vet.', value: "c" },
                  ]}
                />
                {/* ================================================================================ [27-30] */}
                <IELTSQuestionTitle
                  from="27"
                  to="30"
                  title="What opinion do the students give about each of the following modules on their veterinary science course?"
                  numberOfAnswers="four"
                  alphabet="f"
                  type="200"
                />
                {/************* [27-30] *************/}
                <DND_27_30 />
              </>
            }

            {part === 4 &&
              <>
                {/* ================================================================================ [31-40] */}
                <IELTSQuestionTitle from="31" to="40" type="4" />
                <IELTSTitle title="Labyrinths" isHeader />
                <IELTSTitle title="Definition" />
                <Typography>
                  ●   a winding spiral path leading to a central area
                </Typography>
                <IELTSTitle title="Labyrinths compared with mazes" />
                {/************* [31] *************/}
                <IELTSInput on="31" beforeInput="●   Mazes are a type of" />
                {/************* [32] *************/}
                <IELTSInput qn="32" beforeInput="– " afterInput="is needed to navigate through a maze" />
                <Typography>
                  ●   Labyrinths represent a journey through life
                </Typography>
                {/************* [33] *************/}
                <IELTSInput qn="33" beforeInput="    –  the word ‘maze’ is derived from a word meaning a feeling of" />
                {/************* [34] *************/}
                <IELTSInput qn="34" beforeInput="–  they have frequently been used in" afterInput="and prayer" />
                <IELTSTitle title="Early examples of the labyrinth spiral" />
                {/************* [35] *************/}
                <IELTSInput qn="35" beforeInput="●   Ancient carvings on" afterInput="have been found across many cultures" />
                <Typography>
                  ●   The Pima, a Native American tribe, wove the symbol on baskets
                </Typography>
                {/************* [36] *************/}
                <IELTSInput qn="36" beforeInput="●   Ancient Greeks used the symbol on" />
                <IELTSTitle title="Walking labyrinths" />
                {/************* [37] *************/}
                <IELTSInput qn="37" beforeInput="●   The largest surviving example of a turf labyrinth once had a big" afterInput="at its centre" />
                <IELTSTitle title="Labyrinths nowadays" />
                {/************* [38] *************/}
                <IELTSInput qn="38" beforeInput="●   Believed to have a beneficial impact on mental and physical health, e.g., walking a maze can reduce a person’s" afterInput="rate" />
                <Typography>
                  ●   Used in medical and health and fitness settings and also prisons
                </Typography>
                <Typography>
                  ●   Popular with patients, visitors and staff in hospitals
                </Typography>
                {/************* [39] *************/}
                <IELTSInput qn="39" beforeInput="    –  patients who can’t walk can use ‘finger labyrinths’ made from" />
                {/************* [40] *************/}
                <IELTSInput qn="40" beforeInput="   –  research has shown that Alzheimer’s sufferers experience less" />
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