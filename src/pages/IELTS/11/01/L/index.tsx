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
import IELTSTableOptions from '@/components/IELTS/QuestionTypes/IELTSTableOptions';
import IELTSQuestionTitle from '@/components/IELTS/IELTSQuestionTitle';
import IELTSPartNavigation from '@/components/IELTS/IELTSPartNavigation';
import useGetAnswer from '@/services/Requests/useGetAnswer';

// import DND_26_30 from './DND_26_30'

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
                {/* ================================================================================ [01-10] */}
                <IELTSQuestionTitle from="1" to="10" type="1" />
                <IELTSTitle title="HIRING A PUBLIC ROOM" isHeader />
                {/************* [0] *************/}
                <Typography className='italic'>Example</Typography>
                <IELTSInput qn="0" beforeInput="●   the Main Hall – seats" disabled placeholder="200" />
                <IELTSTitle title="Room and cost" />
                {/************* [1] *************/}
                <IELTSInput qn="1" beforeInput="●   the" afterInput="Room – seats 100" />
                {/************* [2] *************/}
                <IELTSInput qn="2" beforeInput="●   Cost of Main Hall for Saturday evening: £" />
                {/************* [3] *************/}
                <IELTSInput qn="3" beforeInput="+ £250 deposit (" afterInput="payment is required)" />
                {/************* [4] *************/}
                <IELTSInput qn="4" beforeInput="●   Cost includes use of tables and chairs and also" />
                <Typography>
                  ●   Additional charge for use of the kitchen: £25
                </Typography>
                <IELTSTitle title="Before the event" />
                {/************* [5] *************/}
                <IELTSInput qn="5" beforeInput="●   Will need a" afterInput="licence" />
                {/************* [6] *************/}
                <IELTSInput qn="6" beforeInput="●   Need to contact caretaker (Mr Evans) in advance to arrange" />
                <IELTSTitle title="During the event" />
                <Typography>
                  ●   The building is no smoking
                </Typography>
                {/************* [7] *************/}
                <IELTSInput qn="7" beforeInput="●   The bank should use the" afterInput="door at the back" />
                <Typography>
                  ●   Don’t touch the system that controls the volume
                </Typography>
                <Typography>
                  ●   For microphones, contact the caretaker
                </Typography>
                <IELTSTitle title="After the event" />
                {/************* [8] *************/}
                <IELTSInput qn="8" beforeInput="●   Need to know the" afterInput="for the cleaning cupboard" />
                {/************* [9] *************/}
                <IELTSInput qn="9" beforeInput="●   The" afterInput="must be washed and rubbish placed in black bags" />
                {/************* [10] *************/}
                <IELTSInput qn="10" beforeInput="●   All" afterInput="must be taken down" />
                <Typography>
                  ●   Chairs and tables must be piled up
                </Typography>
              </>
            }

            {part === 2 &&
              <>
                {/* ================================================================================ [11-14] */}
                <IELTSQuestionTitle from="11" to="14" type="1" />
                <strong>Fiddy Working Heritage Farm</strong>
                <Typography className='italic'>Advice about visiting the farm</Typography>
                <Typography className='italic'>Visitors should</Typography>

                {/************* [11] *************/}
                <IELTSInput qn="11" beforeInput="●  take care not to harm any" />
                {/************* [12] *************/}
                <IELTSInput qn="12" beforeInput="●  not touch any" />
                {/************* [13] *************/}
                <IELTSInput qn="13" beforeInput="●   wear" />
                {/************* [14] *************/}
                <IELTSInput qn="14" beforeInput="●   not bring" afterInput=" into the farm, with certain exceptions." />

                {/* ================================================================================ [15-20] */}
                <IELTSQuestionTitle
                  from="15"
                  to="20"
                  alphabet="i"
                  type="203"
                />
                {/************* [15-20] *************/}

                <IELTSTableOptions
                  questions={[
                    { id: 15, title: 'Scarecrow' },
                    { id: 16, title: 'Maze' },
                    { id: 17, title: 'Café' },
                    { id: 18, title: 'Black Barn' },
                    { id: 19, title: 'Covered picnic area' },
                    { id: 20, title: 'Fiddy House' }
                  ]}
                  options={
                    [
                      { label: 'A', value: "a", },
                      { label: 'B', value: "b", },
                      { label: 'C', value: "c", },
                      { label: 'D', value: "d", },
                      { label: 'E', value: "e", },
                      { label: 'F', value: "f", },
                      { label: 'G', value: "g", },
                      { label: 'H', value: "h", },
                      { label: 'I', value: "i", },
                    ]
                  }
                />
              </>
            }

            {part === 3 &&
              <>
                {/* ================================================================================ [21-30] */}
                <IELTSQuestionTitle from="21" to="30" type="16" />
                <strong>Study on Gender in Physics</strong>
                {/************* [21] *************/}
                <IELTSRadio
                  qn="21"
                  question="The students in Akira Miyake’s study were all majoring in"
                  options={[
                    { label: 'physics.', value: "a" },
                    { label: 'psychology or physics.', value: "b" },
                    { label: 'science, technology, engineering or mathematics.', value: "c" },
                  ]}
                />

                {/************* [22] *************/}
                <IELTSRadio
                  qn="22"
                  question="The aim of Miyake’s study was to investigate"
                  options={[
                    { label: 'what kind of women choose to study physics.', value: "a" },
                    { label: 'a way of improving women’s performance in physics.', value: "b" },
                    { label: 'whether fewer women than men study physics at college.', value: "c" },
                  ]}
                />

                {/************* [23] *************/}
                <IELTSRadio
                  qn="23"
                  question="The female physics students were wrong to believe that"
                  options={[
                    { label: 'the teachers marked them in an unfair way.', value: "a" },
                    { label: 'the male students expected them to do badly.', value: "b" },
                    { label: 'their test results were lower than the male students’.', value: "c" },
                  ]}
                />

                {/************* [24] *************/}
                <IELTSRadio
                  qn="24"
                  question="Miyake’s team asked the students to write about"
                  options={[
                    { label: 'what they enjoyed about studying physics.', value: "a" },
                    { label: 'the successful experiences of other people.', value: "b" },
                    { label: 'something that was important to them personally.', value: "c" },
                  ]}
                />

                {/************* [25] *************/}
                <IELTSRadio
                  qn="25"
                  question="What was the aim of the writing exercise done by the subjects?"
                  options={[
                    { label: 'to reduce stress', value: "a" },
                    { label: 'to strengthen verbal ability', value: "b" },
                    { label: 'to encourage logical thinking', value: "c" },
                  ]}
                />

                {/************* [26] *************/}
                <IELTSRadio
                  qn="26"
                  question="What surprised the researchers about the study?"
                  options={[
                    { label: 'how few students managed to get A grades', value: "a" },
                    { label: 'the positive impact it had on physics results for women', value: "b" },
                    { label: 'the difference between male and female performance', value: "c" },
                  ]}
                />

                {/************* [27] *************/}
                <IELTSRadio
                  qn="27"
                  question="Greg and Lisa think Miyake’s results could have been affected by"
                  options={[
                    { label: 'the length of the writing task.', value: "a" },
                    { label: 'the number of students who took part.', value: "b" },
                    { label: 'the information the students were given.', value: "c" },
                  ]}
                />

                {/************* [28] *************/}
                <IELTSRadio
                  qn="28"
                  question="Greg and Lisa decide that in their own project, they will compare the effects of"
                  options={[
                    { label: 'two different writing tasks.', value: "a" },
                    { label: 'a writing task with an oral task.', value: "b" },
                    { label: 'two different oral tasks.', value: "c" },
                  ]}
                />

                {/************* [29] *************/}
                <IELTSRadio
                  qn="29"
                  question="The main finding of Smolinsky’s research was that class teamwork activities"
                  options={[
                    { label: 'were most effective when done by all-women groups.', value: "a" },
                    { label: 'had no effect on the performance of men or women.', value: "b" },
                    { label: 'improved the results of men more than of women.', value: "c" },
                  ]}
                />

                {/************* [30] *************/}
                <IELTSRadio
                  qn="30"
                  question="What will Lisa and Greg do next?"
                  options={[
                    { label: 'talk to a professor', value: "a" },
                    { label: 'observe a science class', value: "b" },
                    { label: 'look at the science timetable', value: "c" },
                  ]}
                />
              </>
            }

            {part === 4 &&
              <>
                {/* ================================================================================ [31-40] */}
                <IELTSQuestionTitle from="31" to="40" type="1" />
                <IELTSTitle title="Ocean Biodiversity" isHeader />
                <IELTSTitle title="Biodiversity hotspots" />
                <Typography>
                  ●   areas containing many different species
                </Typography>
                {/************* [31] *************/}
                <IELTSInput qn="31" beforeInput="●   important for locating targets for" />
                <Typography>
                  ●   at first only identified on land
                </Typography>
                <IELTSTitle title="Boris Worm, 2005" />
                <Typography>
                  ●   identified hotspots for large ocean predators, e.g. sharks
                </Typography>
                <Typography>
                  ●   found the ocean hotspots:
                </Typography>
                {/************* [32] *************/}
                <IELTSInput qn="32" beforeInput="     &nbsp;&nbsp;–   were not always rich in " />
                {/************* [33] *************/}
                <IELTSInput qn="33" beforeInput="     &nbsp;&nbsp;–   had higher temperatures at the" />
                {/************* [34] *************/}
                <IELTSInput qn="34" beforeInput="     &nbsp;&nbsp;–   had sufficient" afterInput="in the water" />
                <IELTSTitle title="Lisa Ballance, 2007" />
                {/************* [35] *************/}
                <IELTSInput qn="35" beforeInput="●   looked for hotspots for marine" />
                <Typography>
                  ●   found these were all located where ocean currents meet
                </Typography>
                <IELTSTitle title="Census of Marine Life" />
                <Typography>
                  ●   found new ocean species living:
                </Typography>
                {/************* [36] *************/}
                <IELTSInput qn="36" beforeInput="     &nbsp;&nbsp;–   under the" />
                <Typography>
                  &nbsp;&nbsp;–   near volcanoes on the ocean floor
                </Typography>
                <IELTSTitle title="Global Marine Species Assessment" />
                <Typography>
                  ●   want to list endangered ocean species, considering:
                </Typography>
                <Typography>
                  &nbsp;&nbsp;–   population size
                </Typography>
                <Typography>
                  &nbsp;&nbsp;–   geographical distribution
                </Typography>
                {/************* [37] *************/}
                <IELTSInput qn="37" beforeInput="     &nbsp;&nbsp;–   rate of" />
                <Typography>
                  ●   Aim: to assess 20,000 species and make a
                </Typography>
                {/************* [38] *************/}
                <IELTSInput qn="38" beforeInput="●   Aim: to assess 20,000 species and make a distribution" afterInput="for each one" />
                <IELTSTitle title="Recommendations to retain ocean biodiversity" />
                {/************* [39] *************/}
                <Typography>
                  ●   increase the number of ocean reserves
                </Typography>
                <IELTSInput qn="39" beforeInput="●   establish" afterInput="corridors (e.g. for turtles)" />
                <Typography>
                  ●   reduce fishing quotas
                </Typography>
                {/************* [40] *************/}
                <IELTSInput qn="40" beforeInput="●   catch fish only for the purpose of" />
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