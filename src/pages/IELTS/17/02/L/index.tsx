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
    if (currentQuestion == 23) {
      dispatch(setCurrentQuestion(+currentQuestion - 2))
    }
    else {
      dispatch(setCurrentQuestion(+currentQuestion - 1))
    }
  }

  const handleNext = () => {
    if (currentQuestion == 21) {
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
                <IELTSTitle title="Opportunities for voluntary work in Southoe village" isHeader />
                <strong> Library </strong>
                {/************* [1] *************/}
                <IELTSInput qn="1" beforeInput="●   Help with" afterInput="books (times to be arranged)" />
                {/************* [2] *************/}
                <IELTSInput qn="2" beforeInput="●   Help needed to keep " afterInput="of books up to date" />
                {/************* [3] *************/}
                <IELTSInput qn="3" beforeInput="●   Library is in the " afterInput="Room in the village hall" />
                <strong> Library </strong>
                {/************* [4] *************/}
                <IELTSInput qn="4" beforeInput="●   Help by providing" />
                {/************* [5] *************/}
                <IELTSInput qn="5" beforeInput="●   Help with hobbies such as" />
                <strong> Help for individuals needed next week </strong>
                {/************* [6] *************/}
                <IELTSInput qn="6" beforeInput="●   Taking Mrs Carroll to" />
                {/************* [7] *************/}
                <IELTSInput qn="7" beforeInput="●   Work in the" afterInput="at Mr. Selsbury’s house" />

                <h4> 8 - 10, TABLE </h4>
              </>
            }

            {part === 2 &&
              <>
                {/* ================================================================================ [11-14] */}
                <IELTSQuestionTitle from="11" to="14" type="16" />
                <strong> Oniton Hall </strong>
                {/************* [11] *************/}
                <IELTSRadio
                  qn="11"
                  question="Many past owners made changes to"
                  options={[
                    { label: 'the gardens.', value: "a" },
                    { label: 'the house.', value: "b" },
                    { label: 'the farm.', value: "c" },
                  ]}
                />
                {/************* [12] *************/}
                <IELTSRadio
                  qn="12"
                  question="Sir Edward Downes built Oniton Hall because he wanted"
                  options={[
                    { label: 'a place for discussing politics.', value: "a" },
                    { label: 'a place to display his wealth.', value: "b" },
                    { label: 'a place for artists and writers.', value: "c" },
                  ]}
                />
                {/************* [13] *************/}
                <IELTSRadio
                  qn="13"
                  question="Visitors can learn about the work of servants in the past from"
                  options={[
                    { label: 'audio guides.', value: "a" },
                    { label: 'photographs.', value: "b" },
                    { label: 'people in costume.', value: "c" },
                  ]}
                />
                {/************* [14] *************/}
                <IELTSRadio
                  qn="14"
                  question="What is new for children at Onion Hall?"
                  options={[
                    { label: 'clothes for dressing up', value: "a" },
                    { label: 'mini tractors', value: "b" },
                    { label: 'the adventure playground', value: "c" },
                  ]}
                />

                {/* ================================================================================ [15-20] */}
                <IELTSQuestionTitle
                  from="15"
                  to="20"
                  title="Which opinion do the speakers give about each of the following aspects of The Emporium’s production of Romeo and Juliet?"
                  numberOfAnswers="six"
                  alphabet="h"
                  type="200"
                />
                {/************* [15-20] *************/}
                <IELTSTableOptionsLabel
                  questions={
                    [
                      { id: 15, title: 'dairy' },
                      { id: 16, title: 'large barn' },
                      { id: 17, title: 'small barn' },
                      { id: 18, title: 'stables' },
                      { id: 19, title: 'shed' },
                      { id: 20, title: 'parkland' },
                    ]
                  }
                  topLabels={[
                    { title: "shopping" },
                    { title: "watching cows being milked" },
                    { title: "seeing old farming equipment" },
                    { title: "eating and drinking" },
                    { title: "starting a trip" },
                    { title: "seeing rare breeds of animals" },
                    { title: "helping to look after animals" },
                    { title: "using farming tools" },
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
                  question="Which TWO things do the students agree they need to include in their review of Romeo and Juliet?"
                  checkList={[
                    { label: 'analysis of the text', value: "a", },
                    { label: 'a summary of the plot', value: "b", },
                    { label: 'a description of the theatre', value: "c", },
                    { label: 'a personal reaction', value: "d", },
                    { label: 'a reference to particular scenes', value: "e", },
                  ]}
                />
                {/* ================================================================================ [23-27] */}
                <IELTSQuestionTitle
                  from="23"
                  to="27"
                  title="Which opinion do the speakers give about each of the following aspects of The Emporium’s production of Romeo and Juliet?"
                  numberOfAnswers="five"
                  alphabet="g"
                  type="200"
                />
                {/************* [23-27] *************/}
                <IELTSTableOptionsLabel
                  questions={
                    [
                      { id: 15, title: 'dairy' },
                      { id: 16, title: 'large barn' },
                      { id: 17, title: 'small barn' },
                      { id: 18, title: 'stables' },
                      { id: 19, title: 'shed' },
                      { id: 20, title: 'parkland' },
                    ]
                  }
                  topLabels={[
                    { title: "They both expected this to be more traditional." },
                    { title: "They both thought this was original." },
                    { title: "They agree this created the right atmosphere." },
                    { title: "They agree this was a major strength." },
                    { title: "They were both disappointed by this." },
                    { title: "They disagree about why this was an issue." },
                    { title: "They disagree about how this could be improved." },
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
                    ]
                  }
                />
                {/* ================================================================================ [28-30] */}
                <IELTSQuestionTitle from="28" to="30" type="16" />
                {/************* [28] *************/}
                <IELTSRadio
                  qn="28"
                  question="The students think the story of Romeo and Juliet is still relevant for young people today because"
                  options={[
                    { label: 'it illustrates how easily conflict can start.', value: "a" },
                    { label: 'it deals with problems that families experience.', value: "b" },
                    { label: 'it teaches them about relationships.', value: "c" },
                  ]}
                />
                {/************* [29] *************/}
                <IELTSRadio
                  qn="29"
                  question="The students found watching Romeo and Juliet in another language"
                  options={[
                    { label: 'frustrating.', value: "a" },
                    { label: 'demanding.', value: "b" },
                    { label: 'moving.', value: "c" },
                  ]}
                />
                {/************* [30] *************/}
                <IELTSRadio
                  qn="30"
                  question="Why do the students think Shakespeare’s plays have such international appeal?"
                  options={[
                    { label: 'The stories are exciting.', value: "a" },
                    { label: 'There are recognisable characters.', value: "b" },
                    { label: 'They can be interpreted in many ways.', value: "c" },
                  ]}
                />
              </>
            }

            {part === 4 &&
              <>
                {/* ================================================================================ [31-40] */}
                <IELTSQuestionTitle from="31" to="40" type="1" />
                <IELTSTitle title="The impact of digital technology on the Icelandic language" isHeader />
                <IELTSTitle title="The Icelandic language" />
                <Typography>
                  ●   a winding spiral path leading to a central area
                </Typography>
                <IELTSTitle title="Labyrinths compared with mazes" />
                {/************* [31] *************/}
                <IELTSInput qn="31" beforeInput="●   has approximately" afterInput="speakers" />
                {/************* [32] *************/}
                <IELTSInput qn="32" beforeInput="●   has a" afterInput="that is still growing" />
                <Typography>
                  ●   has not changed a lot over the last thousand years
                </Typography>
                {/************* [33] *************/}
                <IELTSInput qn="33" beforeInput="●   has its own words for computer-based concepts, such as web browser and" />
                {/************* [34] *************/}
                <IELTSTitle title="Young speakers" />
                <IELTSInput qn="34" beforeInput="●   are big users of digital technology, such as" />
                {/************* [35] *************/}
                <IELTSInput qn="35" beforeInput="●   are becoming " afterInput="very quickly" />
                {/************* [36] *************/}
                <IELTSInput qn="36" beforeInput="●   are having discussions using only English while they are in the" afterInput="at school" />
                {/************* [37] *************/}
                <IELTSInput qn="37" beforeInput="●   are better able to identify the content of a" afterInput="in English than Icelandic" />
                <IELTSTitle title="Technology and internet companies" />
                {/************* [38] *************/}
                <IELTSInput qn="38" beforeInput="●   write very little in Icelandic because of the small number of speakers and because of how complicated its" afterInput="is" />
                <IELTSTitle title="The Icelandic government" />
                <Typography>
                  ●   has set up a fund to support the production of more digital content in the language
                </Typography>
                <Typography>
                  ●   believes that Icelandic has a secure future
                </Typography>
                {/************* [39] *************/}
                <IELTSInput qn="39" beforeInput="●   is worried that young Icelanders may lose their" afterInput="as Icelanders" />
                {/************* [40] *************/}
                <IELTSInput qn="40" beforeInput="●   is worried about the consequences of children not being" afterInput="in either Icelandic or English" />
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