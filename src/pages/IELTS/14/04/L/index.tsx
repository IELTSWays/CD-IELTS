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
import DND_08_10 from './DND_08_10'
import DND_11_16 from './DND_11_16'
import DND_26_30 from './DND_26_30'

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
    if (currentQuestion == 19 || currentQuestion == 21) {
      dispatch(setCurrentQuestion(+currentQuestion - 2))
    }
    else {
      dispatch(setCurrentQuestion(+currentQuestion - 1))
    }
  }

  const handleNext = () => {
    if (currentQuestion == 17 || currentQuestion == 19) {
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
                <IELTSQuestionTitle from="1" to="7" type="1" />
                <IELTSTitle title="Enquiry about booking hotel room for event" isHeader />
                {/************* [0] *************/}
                <Typography className='italic'>Example</Typography>
                <IELTSInput qn="0" beforeInput="Andrew is the" afterInput="Manager" disabled placeholder="Angela" />
                <IELTSTitle title="Rooms" />
                <Typography>
                  Adelphi Room
                </Typography>
                {/************* [1] *************/}
                <IELTSInput qn="1" beforeInput="number of people who can sit down to eat:" />
                <Typography>
                  has a gallery suitable for musicians
                </Typography>
                {/************* [2] *************/}
                <IELTSInput qn="2" beforeInput="can go out and see the" afterInput="in pots on the terrace" />
                {/************* [3] *************/}
                <IELTSInput qn="3" beforeInput="terrace has a view of a group of" />
                {/************* [4] *************/}
                <Typography>
                  Carlton Room
                </Typography>
                <Typography>
                  number of people who can sit down to eat: 110
                </Typography>
                <IELTSInput qn="4" beforeInput="has a" />
                <Typography>
                  View of the lake
                </Typography>
                {/************* [5] *************/}
                <IELTSTitle title="Options" />
                <Typography>
                  Master of Ceremonies:
                </Typography>
                <IELTSInput qn="5" beforeInput="can give a" afterInput="while people are eating" />
                {/************* [6] *************/}
                <IELTSInput qn="6" beforeInput="will provide" afterInput="if there are any problems" />
                {/************* [7] *************/}
                <Typography>
                  Accommodation:
                </Typography>
                <IELTSInput qn="7" beforeInput="in the hotel rooms or" />
                {/* ================================================================================ [08-10] */}
                <IELTSQuestionTitle from="8" to="10" type="13" />
                {/************* [08-10] *************/}
                <DND_08_10 />
              </>
            }

            {part === 2 &&
              <>
                {/* ================================================================================ [11-16] */}
                <IELTSQuestionTitle from="11" to="16" type="14" />
                {/************* [11-16] *************/}
                <div id="q-101" className="mb-20">
                  <DND_11_16 />
                </div>
                {/* ================================================================================ [17-18] */}
                <IELTSQuestionTitle from="17" to="18" type="15" />
                {/************* [17-18] *************/}
                <IELTSMultiCheckbox
                  qn="17"
                  question="Which TWO things does the speaker say about the attraction called Musical Favourites?"
                  checkList={[
                    { label: 'You pay extra for drinks.', value: "a", },
                    { label: 'You must book it in advance.', value: "b", },
                    { label: 'You get a reduction if you buy two tickets.', value: "c", },
                    { label: 'You can meet the performers.', value: "d", },
                    { label: 'You can take part in the show.', value: "e", },
                  ]}
                />
                {/* ================================================================================ [19-20] */}
                <IELTSQuestionTitle from="19" to="20" type="15" />
                {/************* [19-20] *************/}
                <IELTSMultiCheckbox
                  qn="19"
                  question="Which TWO things does the speaker say about the Castle Feast?"
                  checkList={[
                    { label: 'Visitors can dance after the meal.', value: "a", },
                    { label: 'There is a choice of food.', value: "b", },
                    { label: 'Visitors wear historical costume.', value: "c", },
                    { label: 'Knives and forks are not used.', value: "d", },
                    { label: 'The entertainment includes horse races.', value: "e", },
                  ]}
                />
              </>
            }

            {part === 3 &&
              <>
                {/* ================================================================================ [21-25] */}
                <IELTSQuestionTitle from="21" to="25" type="16" />
                {/************* [21] *************/}
                <div id="q-20">
                  <IELTSRadio
                    qn="21"
                    question="What does Trevor find interesting about the purpose of children’s literature?"
                    options={[
                      { label: 'A the fact that authors may not realise what values they’re teaching', value: "a" },
                      { label: 'the fact that literature can be entertaining and educational at the same time', value: "b" },
                      { label: 'the fact that adults expect children to imitate characters in literature', value: "c" },
                    ]}
                  />
                </div>
                {/************* [22] *************/}
                <IELTSRadio
                  qn="22"
                  question="Trevor says the module about the purpose of children’s literature made him"
                  options={[
                    { label: 'analyse some of the stories that his niece reads.', value: "a" },
                    { label: 'wonder how far popularity reflects good qualify.', value: "b" },
                    { label: 'decide to start writing some children’s stories.', value: "c" },
                  ]}
                />
                {/************* [23] *************/}
                <IELTSRadio
                  qn="23"
                  question="Stephanie is interested in the Pictures module because"
                  options={[
                    { label: 'she intends to become an illustrator.', value: "a" },
                    { label: 'she can remember beautiful illustrations from her childhood.', value: "b" },
                    { label: 'she believes illustrations are more important than words.', value: "c" },
                  ]}
                />
                {/************* [24] *************/}
                <IELTSRadio
                  qn="24"
                  question="Trevor and Stephanie agree that comics"
                  options={[
                    { label: 'are inferior to books.', value: "a" },
                    { label: 'have the potential for being useful.', value: "b" },
                    { label: 'discourage children from using their imagination.', value: "c" },
                  ]}
                />
                {/************* [25] *************/}
                <IELTSRadio
                  qn="25"
                  question="With regard to books aimed at only boys or only girls, Trevor was surprised"
                  options={[
                    { label: 'how long the distinction had gone unquestioned.', value: "a" },
                    { label: 'how few books were aimed at both girls and boys.', value: "b" },
                    { label: 'how many children enjoyed books intended for the opposite sex.', value: "c" },
                  ]}
                />
                {/* ================================================================================ [26-30] */}
                <IELTSQuestionTitle from="26" to="30" type="17" />
                {/************* [26-30] *************/}
                <DND_26_30/>
              </>
            }

            {part === 4 &&
              <>
                {/* ================================================================================ [31-40] */}
                <IELTSQuestionTitle from="31" to="40" type="1" />
                <IELTSTitle title="The hunt for sunken settlements and ancient shipwrecks" isHeader />
                <IELTSTitle title="ATLIT-YAM" />
                <Typography>
                  ● was a village on coast of eastern Mediterranean
                </Typography>
                <Typography>
                  ● thrived until about 7,000 BC
                </Typography>
                <Typography>
                  ● stones homes had a courtyard
                </Typography>
                {/************* [31] *************/}
                <IELTSInput qn="31" beforeInput="● had a semicircle of large stones round a" />
                {/************* [32] *************/}
                <Typography>
                  ● cause of destruction unknown – now under the sea
                </Typography>
                <Typography>
                  ● biggest settlement from the prehistoric period found on the seabed
                </Typography>
                {/************* [32] *************/}
                <IELTSInput qn="32" beforeInput="● research carried out into structures," afterInput="and human remains" />
                <IELTSTitle title="TRADITIOINAL AUTONOMOUS UNDERWATER VEHICLES (AUVs)" />
                {/************* [33] *************/}
                <IELTSInput qn="33" beforeInput="● used in the oil industry, e.g. to make" />
                {/************* [34] *************/}
                <IELTSInput qn="34" beforeInput="● problems: they were expensive and" />
                <IELTSTitle title="LATEST AUVs" />
                <Typography>
                  ● much easier to use, relatively cheap, sophisticated
                </Typography>
                {/************* [35] *************/}
                <IELTSTitle title="Tests:" />
                <IELTSInput qn="35" beforeInput="● Marzamemi, Sicily: found ancient Roman ships carrying architectural elements made of" />
                {/************* [36] *************/}
                <IELTSTitle title="Underwater internet:" />
                <IELTSInput qn="36" beforeInput=" ● " afterInput="is used for short distance communication, , acoustic waves for long distance" />
                <Typography>
                  ● plans for communication with researchers by satellite
                </Typography>
                {/************* [37] *************/}
                <IELTSInput qn="37" beforeInput="● AUV can send data to another AUV that has better" afterInput="for example" />
                {/************* [38] *************/}
                <IELTSTitle title="Planned research in Gulf of Baratti:" />
                <Typography>
                  ● to find out more about wrecks of ancient Roman ships, including
                </Typography>
                <IELTSInput qn="38" beforeInput="–  one carrying" afterInput="supplies" />
                {/************* [39] *************/}
                <IELTSInput qn="39" beforeInput="tables may have been used for cleaning the" />
                {/************* [40] *************/}
                <IELTSInput qn="40" beforeInput="–  others carrying containers of olive oil or" />
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