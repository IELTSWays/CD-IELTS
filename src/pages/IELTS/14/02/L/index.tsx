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
import IELTSDrag from '@/components/IELTS/QuestionTypes/IELTSDrag';
import IELTSInput from '@/components/IELTS/QuestionTypes/IELTSInput';
import IELTSRadio from '@/components/IELTS/QuestionTypes/IELTSRadio';
import IELTSTwoCol from '@/components/IELTS/QuestionTypes/IELTSTwoCol';
import IELTSQuestionTitle from '@/components/IELTS/IELTSQuestionTitle';
import IELTSPartNavigation from '@/components/IELTS/IELTSPartNavigation';
import IELTSTableOptions from '@/components/IELTS/QuestionTypes/IELTSTableOptions';
import IELTSTableOptionsLabel from '@/components/IELTS/QuestionTypes/IELTSTableOptionsLabel'
import DND from './DND'

import useGetAnswer from '@/services/Requests/useGetAnswer';

import img_question_16_20 from '@/assets/images/ielts/B14LT2-Q16-20.jpg'

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
    dispatch(setCurrentQuestion(+currentQuestion - 1))
  }

  const handleNext = () => {
    dispatch(setCurrentQuestion(+currentQuestion + 1))
  }

  useEffect(() => {
    if (currentQuestion == 11 || currentQuestion == 21 || currentQuestion == 31 || currentQuestion == 101) {
      window.scrollTo(0, 0)
    }
  }, [currentQuestion])


  const listOptions = {
    "a": { id: "a", content: "A - make it more interactive" },
    "b": { id: "b", content: "B - reduce visual input" },
    "c": { id: "c", content: "C - add personal opinions" },
    "d": { id: "d", content: "D - check the information is accurate" },
    "e": { id: "e", content: "E - contact one of the researchers" },
    "f": { id: "f", content: "F - make detailed notes" },
    "g": { id: "g", content: "G - find information online" },
    "h": { id: "h", content: "H - check timing" }
  }

  const columnsData = [
    {
      id: 25,
      title: "Introduction"
    },
    {
      id: 26,
      title: "Discovery of the mammoth tooth"
    },
    {
      id: 27,
      title: "Initial questions asked by the researchers"
    },
    {
      id: 28,
      title: "Further research carried out on the island"
    },
    {
      id: 29,
      title: "Findings and possible explanations"
    },
    {
      id: 30,
      title: "Relevance to the present day"
    }
  ];

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
                <IELTSTitle title="TOTAL HEALTH CLINIC" isHeader />
                {/************* [0] *************/}
                <IELTSTitle title="PATIENT DETAILS" />
                <IELTSTitle title="Personal information" />
                <Typography className='italic'>Example</Typography>
                <IELTSInput qn="0" colLeft="Name:" beforeInput="Julie Anne" disabled placeholder="Garcia" />
                {/************* [1] *************/}
                <IELTSInput qn="1" colLeft="Contact phone" />
                {/************* [2] *************/}
                <IELTSInput qn="2" colLeft="Date of birth" afterInput=",1992" />
                {/************* [3] *************/}
                <IELTSInput qn="3" colLeft="Occupation" beforeInput="works as a" />
                {/************* [4] *************/}
                <IELTSInput qn="4" colLeft="Insurance company" afterInput="Life Insurance" />
                {/************* [5] *************/}
                <IELTSTitle title="Details of the problem" />
                <IELTSInput qn="5" colLeft="Type of problem" beforeInput="pain in her left" />
                {/************* [6] *************/}
                <IELTSInput qn="6" colLeft="When it began" afterInput="ago" />
                <IELTSTwoCol colLeft="Action already taken" colRight="has taken painkillers and applied ice" />
                {/************* [7] *************/}
                <IELTSTitle title="Other information" />
                <IELTSInput qn="7" colLeft="Sports played" beforeInput="belongs to a" afterInput="club" />
                {/************* [8] *************/}
                <IELTSInput qn="8" colLeft="&nbsp;&nbsp;" beforeInput="goes" afterInput="Regularly" />
                {/************* [9] *************/}
                <IELTSInput qn="9" colLeft="Medical history" beforeInput="injured her" afterInput="last year" />
                <IELTSTwoCol colLeft="&nbsp;&nbsp;" colRight="no allergies" />
                {/************* [10] *************/}
                <IELTSInput qn="10" colLeft="&nbsp;&nbsp;" beforeInput="no regular medication apart from" />
              </>
            }

            {part === 2 &&
              <>
                {/* ================================================================================ [11-15] */}
                <IELTSQuestionTitle from="11" to="15" type="3" />
                <IELTSTitle title="Visit to Branley Castle" />
                {/************* [11] *************/}
                <div id="q-101">
                  <IELTSRadio
                    qn="11"
                    question="Before Queen Elizabeth I visited the castle in 1576,"
                    options={[
                      { label: 'repairs were carried out to the quest rooms.', value: "a" },
                      { label: 'a new building was constructed for her', value: "b" },
                      { label: 'a fire damaged part of the main hall.', value: "c" },
                    ]}
                  />
                </div>
                {/************* [12] *************/}
                <IELTSRadio
                  qn="12"
                  question="In 1982, the castle was sold to"
                  options={[
                    { label: 'the government', value: "a" },
                    { label: 'the Fenys family.', value: "b" },
                    { label: 'an entertainment company.', value: "c" },
                  ]}
                />
                {/************* [13] *************/}
                <IELTSRadio
                  qn="13"
                  question="In some of the rooms, visitors can"
                  options={[
                    { label: 'speak to experts on the history of the castle.', value: "a" },
                    { label: 'interact with actors dressed as famous characters.', value: "b" },
                    { label: 'see models of historical figures moving and talking.', value: "c" },
                  ]}
                />
                {/************* [14] *************/}
                <IELTSRadio
                  qn="14"
                  question="In the castle park, visitors can"
                  options={[
                    { label: 'see an 800-year-old tree.', value: "a" },
                    { label: 'go to an art exhibition.', value: "b" },
                    { label: 'visit a small zoo.', value: "c" },
                  ]}
                />
                {/************* [15] *************/}
                <IELTSRadio
                  qn="15"
                  question="At the end of the visit, the group will have"
                  options={[
                    { label: 'afternoon tea in the conservatory.', value: "a" },
                    { label: 'the chance to meet the castle’s owners.', value: "b" },
                    { label: 'a photograph together on the Great Staircase.', value: "c" },
                  ]}
                />
                {/* ================================================================================ [16-20] */}
                <IELTSQuestionTitle from="16" to="20" type="7" />
                <div className="d-flex">
                  <img src={img_question_16_20} width="650" />
                  <IELTSTableOptions
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
                      ]
                    }
                    questions={[
                      { id: 16, title: 'Starting point for walking the walls' },
                      { id: 17, title: 'Bow and arrow display' },
                      { id: 18, title: 'Hunting birds display' },
                      { id: 19, title: 'Traditional dancing' },
                      { id: 20, title: 'Shop' }
                    ]} />
                </div>
              </>
            }

            {part === 3 &&
              <>
                {/* ================================================================================ [21-24] */}
                <IELTSQuestionTitle from="21" to="24" type="3" />
                {/************* [21] *************/}
                <IELTSRadio
                  qn="21"
                  question="How will Rosie and Martin introduce their presentation?"
                  options={[
                    { label: 'with a drawing of woolly mammoths in their natural habit', value: "a" },
                    { label: 'with a timeline showing when woolly mammoths lived', value: "b" },
                    { label: 'with a video clip about woolly mammoths', value: "c" },
                  ]}
                />
                {/************* [22] *************/}
                <IELTSRadio
                  qn="22"
                  question="What was surprising about the mammoth tooth found by Russell Graham?"
                  options={[
                    { label: 'It was still embedded in the mammoth’s jawbone.', value: "a" },
                    { label: 'It was from an unknown species of mammoth.', value: "b" },
                    { label: 'It was not as old as mammoth remains from elsewhere.', value: "c" },
                  ]}
                />
                {/************* [23] *************/}
                <IELTSRadio
                  qn="23"
                  question="The students will use an animated diagram to demonstrate how the mammoths"
                  options={[
                    { label: 'became isolated on the island.', value: "a" },
                    { label: 'spread from the island to other areas.', value: "b" },
                    { label: 'coexisted with other animals on the island.', value: "c" },
                  ]}
                />
                {/************* [24] *************/}
                <IELTSRadio
                  qn="24"
                  question="According to Martin, what is unusual about the date of the mammoths’ extinction on the island?"
                  options={[
                    { label: 'how exact it is', value: "a" },
                    { label: 'how early it is', value: "b" },
                    { label: 'show it was established', value: "c" },
                  ]}
                />
                {/* ================================================================================ [25-30] */}
                <IELTSQuestionTitle from="25" to="30" type="3" />
                {/************* [25-30] *************/}
                {/* <IELTSDrag listOptions={listOptions}
                columnsData={columnsData} question="What decision do the students make about each of the following parts of their presentation?" /> */}
                {/* <IELTSTableOptionsLabel
                  questions={
                    [
                      { id: 25, title: 'Introduction' },
                      { id: 26, title: 'Discovery of the mammoth tooth' },
                      { id: 27, title: 'Initial questions asked by the researchers' },
                      { id: 28, title: 'Further research carried out on the island' },
                      { id: 29, title: 'Findings and possible explanations' },
                      { id: 30, title: 'Relevance to the present day' },
                    ]
                  }
                  topLabels={[
                    { title: "make it more interactive" },
                    { title: "reduce visual input" },
                    { title: "add personal opinions" },
                    { title: "contact one of the researchers" },
                    { title: "make detailed notes" },
                    { title: "find information online" },
                    { title: "check timing" },
                    { title: "organise the content more clearly" },
                  ]
                  }
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
                    ]
                  }
                /> */}
                <DND />
              </>
            }

            {part === 4 &&
              <>
                {/* ================================================================================ [31-40] */}
                <IELTSQuestionTitle from="31" to="40" type="4" />
                <IELTSTitle title="The history of weather forecasting" isHeader />
                {/************* [31] *************/}
                <IELTSTitle title="Ancient cultures" />
                <Typography>
                  ● many cultures believed that floods and other disasters were involved in the creation of the world
                </Typography>
                <IELTSInput qn="31" beforeInput="● many cultures invented" afterInput="and other ceremonies to make the weather gods friendly" />
                {/************* [32] *************/}
                <IELTSInput qn="32" beforeInput="● people needed to observe and interpret the sky to ensure their" />
                {/************* [33] *************/}
                <IELTSInput qn="33" beforeInput="● around 650 BC, Babylonians started forecasting, using weather phenomena such as" />
                {/************* [34] *************/}
                <IELTSInput qn="34" beforeInput="● by 300 BC, the Chinese had a calendar made up of a number of" afterInput="connected with the weather" />
                {/************* [35] *************/}
                <IELTSTitle title="Ancient Greeks" />
                <Typography>
                  ● a more scientific approach
                </Typography>
                <Typography>
                  ● Aristotle tried to explain the formation of various weather phenomena
                </Typography>
                <IELTSInput qn="35" beforeInput="● Aristotle also described haloes and" />
                {/************* [36] *************/}
                <IELTSTitle title="Middle Ages" />
                <Typography>
                  ● Aristotle’s work considered accurate
                </Typography>
                <IELTSInput qn="36" beforeInput="● many proverbs, e.g. about the significance of the colour of the" afterInput="passed on accurate information." />
                {/************* [37] *************/}
                <IELTSTitle title="15th-19th centuries" />
                <IELTSInput qn="37" beforeInput="● 15th century: scientists recognised value of" afterInput="for the first time" />
                {/************* [38] *************/}
                <IELTSInput qn="38" beforeInput="● Galileo invented the" />
                <Typography>
                  ● Pascal showed relationship between atmospheric pressure and altitude
                </Typography>
                <Typography>
                  ● from the 17th century, scientists could measure atmospheric pressure and temperature
                </Typography>
                {/************* [39] *************/}
                <IELTSInput qn="39" beforeInput="● 18th century: Franklin identified the movement of" />
                {/************* [40] *************/}
                <IELTSInput qn="40" beforeInput="● 19th century: data from different locations could be sent to the same place by " />
                <Typography>
                  &nbsp;&nbsp;
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