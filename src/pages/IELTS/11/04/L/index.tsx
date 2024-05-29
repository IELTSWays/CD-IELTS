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
import IELTSMultiCheckbox from '@/components/IELTS/QuestionTypes/IELTSMultiCheckbox';
import IELTSQuestionTitle from '@/components/IELTS/IELTSQuestionTitle';
import IELTSPartNavigation from '@/components/IELTS/IELTSPartNavigation';
import IELTSTableOptionsLabel from '@/components/IELTS/QuestionTypes/IELTSTableOptionsLabel';
import useGetAnswer from '@/services/Requests/useGetAnswer';

import DND_11_16 from './DND_11_16'

import img_question_17_20 from '@/assets/images/ielts/B11LT4-Q17-20.png'

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
    if (currentQuestion == 23 || currentQuestion == 25 || currentQuestion == 27) {
      dispatch(setCurrentQuestion(+currentQuestion - 2))
    }
    else {
      dispatch(setCurrentQuestion(+currentQuestion - 1))
    }
  }

  const handleNext = () => {
    if (currentQuestion == 21 || currentQuestion == 23 || currentQuestion == 25) {
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
                <strong> 1 - 7 - Table </strong>

                {/* ================================================================================ [08-10] */}
                <IELTSQuestionTitle
                  from="8"
                  to="10"
                  title="Who is each play suitable for?"
                  type="201"
                />
                {/************* [8-10] *************/}
                <IELTSTableOptionsLabel
                  questions={
                    [
                      { id: 8, title: 'The Mystery of Muldoon' },
                      { id: 9, title: 'Fire and Flood' },
                      { id: 10, title: 'Silly Sailor' },
                    ]
                  }
                  topLabels={[
                    { title: "mainly for children" },
                    { title: "mainly for adults" },
                    { title: "suitable for people of all ages" },
                  ]
                  }
                  options={
                    [
                      { label: 'A', value: "a", },
                      { label: 'B', value: "b", },
                      { label: 'C', value: "c", },
                      { label: 'D', value: "d", },
                    ]
                  }
                />
              </>
            }

            {part === 2 &&
              <>
                {/* ================================================================================ [11-16] */}
                <IELTSQuestionTitle
                  from="11"
                  to="16"
                  title="What does the speaker say about each of the following collections?"
                  numberOfAnswers="six"
                  alphabet="g"
                  type="200"
                />
                {/************* [16-20] *************/}
                <DND_11_16 />

                {/* ================================================================================ [17-20] */}
                <div style={{ marginTop: '150px' }}>
                  <IELTSQuestionTitle
                    from="17"
                    to="20"
                    alphabet="h"
                    type="203"
                  />
                </div>
                {/************* [17-20] *************/}
                <div className="d-flex">
                  <img src={img_question_17_20} width="650" />
                  <IELTSTableOptions
                    questions={[
                      { id: 17, title: 'restaurant' },
                      { id: 18, title: 'café' },
                      { id: 19, title: 'baby-changing facilities' },
                      { id: 20, title: 'cloakroom' }
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
                      ]
                    }
                  />
                </div>
              </>
            }

            {part === 3 &&
              <>
                {/* ================================================================================ [21-22] */}
                <IELTSQuestionTitle from="21" to="22" type="15" />
                {/************* [21-22] *************/}
                <IELTSMultiCheckbox
                  qn="21"
                  question="Which TWO characteristics were shared by the subjects of Joanna’s psychology study?"
                  checkList={[
                    { label: 'They had all won prizes for their music.', value: "a", },
                    { label: 'They had all made music recordings.', value: "b", },
                    { label: 'They were all under 27 years old.', value: "c", },
                    { label: 'They had all toured internationally.', value: "d", },
                    { label: 'They all played a string instrument.', value: "e", },
                  ]}
                />
                {/* ================================================================================ [23-24] */}
                <IELTSQuestionTitle from="23" to="24" type="15" />
                {/************* [23-24] *************/}
                <IELTSMultiCheckbox
                  qn="23"
                  question="Which TWO points does Joanna make about her use of telephone interviews?"
                  checkList={[
                    { label: 'It meant rich data could be collected.', value: "a", },
                    { label: 'It allowed the involvement of top performers.', value: "b", },
                    { label: 'It led to a stressful atmosphere at times.', value: "c", },
                    { label: 'It meant interview times had to be limited.', value: "d", },
                    { label: 'It caused some technical problems.', value: "e", },
                  ]}
                />

                {/* ================================================================================ [25-26] */}
                <IELTSQuestionTitle from="25" to="26" type="15" />
                {/************* [25-26] *************/}
                <IELTSMultiCheckbox
                  qn="25"
                  question="Which TWO topics did Joanna originally intend to investigate in her research?"
                  checkList={[
                    { label: 'regulations concerning concert dress', value: "a", },
                    { label: 'audience reactions to the dress of performers', value: "b", },
                    { label: 'changes in performer attitudes to concert dress', value: "c", },
                    { label: 'how choice of dress relates to performer roles', value: "d", },
                    { label: 'links between musical instrument and dress choice', value: "e", },
                  ]}
                />

                {/* ================================================================================ [27-30] */}
                <IELTSQuestionTitle from="27" to="30" type="16" />
                {/************* [27] *************/}
                <IELTSRadio
                  qn="27"
                  question="Joanna concentrated on women performers because"
                  options={[
                    { label: 'women are more influenced by fashion.', value: "a" },
                    { label: 'women’s dress has led to more controversy.', value: "b" },
                    { label: 'women’s code of dress is less strict than men’s.', value: "c" },
                  ]}
                />

                {/************* [28] *************/}
                <IELTSRadio
                  qn="28"
                  question="Mike Frost’s article suggests that in popular music, women’s dress is affected by"
                  options={[
                    { label: 'their wish to be taken seriously.', value: "a" },
                    { label: 'their tendency to copy each other.', value: "b" },
                    { label: 'their reaction to the masculine nature of the music.', value: "c" },
                  ]}
                />

                {/************* [29] *************/}
                <IELTSRadio
                  qn="29"
                  question="What did Joanna’s subjects say about the audience at a performance?"
                  options={[
                    { label: 'The musicians’ choice of clothing is linked to respect for the audience.', value: "a" },
                    { label: 'The clothing should not distract the audience from the music.', value: "b" },
                    { label: 'The audience should make the effort to dress appropriately.', value: "c" },
                  ]}
                />

                {/************* [30] *************/}
                <IELTSRadio
                  qn="30"
                  question="According to the speakers, musicians could learn from sports scientists about"
                  options={[
                    { label: 'the importance of clothing for physical freedom.', value: "a" },
                    { label: 'the part played by clothing in improving performance.', value: "b" },
                    { label: 'the way clothing may protect against physical injury.', value: "c" },
                  ]}
                />
              </>
            }

            {part === 4 &&
              <>
                {/* ================================================================================ [31-40] */}
                <IELTSQuestionTitle from="31" to="40" type="1" />
                <IELTSTitle title="The use of soil to reduce carbon dioxide (CO2) in the atmosphere" isHeader />
                <IELTSTitle title="Rattan Lal:" />
                <Typography>
                  ●   Claims that 13% of CO2 in the atmosphere could be absorbed by agricultural soils
                </Typography>
                {/************* [31] *************/}
                <IELTSInput qn="31" beforeInput="●   Erosion is more likely in soil that is" />
                {/************* [32] *************/}
                <IELTSInput qn="32" beforeInput="●   Lai found soil in Africa that was very" />
                <Typography>
                  ●   It was suggested that carbon from soil was entering the atmosphere
                </Typography>
                <IELTSTitle title="Soil and carbon:" />
                {/************* [33] *************/}
                <IELTSInput qn="33" beforeInput="●   plants turn CO2 from the air into carbon-based substances such as" />
                {/************* [34] *************/}
                <IELTSInput qn="34" beforeInput="●   some CO2 moves from the" afterInput="of plants to microbes in the soil" />
                <Typography>
                  ●   carbon was lost from the soil when agriculture was invented
                </Typography>
                <IELTSTitle title="Regenerative agriculture:" />
                {/************* [35] *************/}
                <IELTSInput qn="35" beforeInput="●   uses established practices to make sure soil remains fertile and" />
                {/************* [36] *************/}
                <IELTSTitle title="Underwater internet:" />
                <IELTSInput qn="36" beforeInput="●   e.g. through year-round planting and increasing the" afterInput="of plants that are grown" />
                <IELTSTitle title="California study:" />
                {/************* [37] *************/}
                <IELTSInput qn="37" beforeInput="●   taking place on a big" afterInput="farm" />
                {/************* [38] *************/}
                <IELTSInput qn="38" beforeInput="●   uses compost made from waste from agriculture and" />
                <IELTSTitle title="Australia study:" />
                {/************* [39] *************/}
                <IELTSInput qn="39" beforeInput="●   aims to increase soil carbon by using" afterInput="that are always green" />
                <IELTSTitle title="Future developments may include:" />
                <Typography>
                  ●   reducing the amount of fertilizer used in farming
                </Typography>
                {/************* [40] *************/}
                <IELTSInput qn="40" beforeInput="●   giving farmers" afterInput="for carbon storage, as well as their produce" />
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