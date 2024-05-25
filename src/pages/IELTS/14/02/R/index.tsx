import React from 'react';
import { useState, useEffect } from 'react'

// api
import { useQuery } from "@tanstack/react-query";
import axiosInstance from '@/services/API'
// api

import { Typography } from '@mui/material';

import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion, setAnswersAll } from '@/store/slices/user/userSlice'

import IELTSTitle from '@/components/IELTS/IELTSTitle';
import IELTSParts from '@/components/IELTS/IELTSParts';
import IELTSArrows from '@/components/IELTS/IELTSArrows';
import IELTSRadio from '@/components/IELTS/QuestionTypes/IELTSRadio';
import IELTSInput from '@/components/IELTS/QuestionTypes/IELTSInput';
import IELTSQuestionTitle from '@/components/IELTS/IELTSQuestionTitle';
import IELTSPartNavigation from '@/components/IELTS/IELTSPartNavigation/';
import IELTSTableOptions from '@/components/IELTS/QuestionTypes/IELTSTableOptions';
import IELTSTableOptionsLabel from '@/components/IELTS/QuestionTypes/IELTSTableOptionsLabel'

import IdeClone from "@/components/IELTS/IdeClone"

import Text1 from './Text/Text1';
import Text2 from './Text/Text2';
import Text3 from './Text/Text3';

const index = () => {

  const dispatch = useAppDispatch()

  const fontSize = useAppSelector((state) => state.user.fontSize)
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)
  const answersAll = useAppSelector((state) => state.user.answersAll)

  const [test_id, setTest_id] = useState<any>('')

  const getAnswer = useQuery({
    queryKey: ['getAnswer'],
    queryFn: async () => {
      const response = await axiosInstance.get(`exam/answer/${localStorage.getItem('test_id')}`)
      const data = await response.data.answers
      dispatch(setAnswersAll(data))
      return data
    },
  })

  const postAnswer = useQuery({
    enabled: false,
    queryKey: ['postAnswer'],
    queryFn: async () => {
      const response = await axiosInstance.post(`exam/answer/${localStorage.getItem('test_id')}`, {
        "test_done": false, "confirm": true,
        "answers": answersAll,
      })
      const data = await response.data
      return data
    },
  })

  const [part, setPart] = useState(1)

  useEffect(() => {
    test_id && getAnswer.isFetching
    test_id && postAnswer.refetch()
  }, [part])

  useEffect(() => {
    setTest_id(localStorage.getItem('test_id'))
    test_id && getAnswer.refetch()
  }, [])

  useEffect(() => {

    if (currentQuestion > 0 && currentQuestion < 14) {
      setPart(1);
    }
    if (currentQuestion > 13 && currentQuestion < 27) {
      setPart(2);
    }
    if (currentQuestion > 26 && currentQuestion < 41) {
      setPart(3)
    }
  }, [currentQuestion]);

  const handlePrevious = () => {
    dispatch(setCurrentQuestion(+currentQuestion - 1))
  }

  const handleNext = () => {
    dispatch(setCurrentQuestion(+currentQuestion + 1))
  }

  useEffect(() => {
    if (currentQuestion == 14 || currentQuestion == 27) {
      window.scrollTo(0, 0)
    }
  }, [currentQuestion])


  const options_T_F_NG = [
    { label: 'TRUE', value: "true", },
    { label: 'FALSE', value: "false", },
    { label: 'NOT GIVEN', value: "not given", },
  ]

  return (
    <>
      <IELTSParts part={part} />

      <div className={`ielts-container ${fontSize}`} id="ielts-list-text-input">

        <IELTSArrows handlePrevious={handlePrevious} handleNext={handleNext} />

        {getAnswer.isLoading && <div> LOADING... </div>}
        {getAnswer.isSuccess &&

          <IdeClone
            left=
            {
              <div className="left ielts-scrollbar">
                {part === 1 && <Text1 />}
                {part === 2 && <Text2 />}
                {part === 3 && <Text3 />}
              </div>
            }
            right=
            {
              <div className="right ielts-scrollbar">
                {part === 1 &&
                  <>
                    {/* ================================================================================ [01-08] */}
                    <IELTSQuestionTitle from="1" to="8" type="100" />
                    {/************* [1] *************/}
                    <IELTSRadio
                      qn="1"
                      question="Henderson rarely visited the area around Press estate when he was younger."
                      options={options_T_F_NG}
                    />
                    {/************* [2] *************/}
                    <IELTSRadio
                      qn="2"
                      question="Henderson pursued a business career because it was what his family wanted."
                      options={options_T_F_NG}
                    />
                    {/************* [3] *************/}
                    <IELTSRadio
                      qn="3"
                      question="Henderson and Notman were surprised by the results of their 1865 experiment."
                      options={options_T_F_NG}
                    />
                    {/************* [4] *************/}
                    <IELTSRadio
                      qn="4"
                      question="There were many similarities between Henderson’s early landscapes and those of Notman."
                      options={options_T_F_NG}
                    />
                    {/************* [5] *************/}
                    <IELTSRadio
                      qn="5"
                      question="The studio that Henderson opened in 1866 was close to his home."
                      options={options_T_F_NG}
                    />
                    {/************* [6] *************/}
                    <IELTSRadio
                      qn="6"
                      question="Henderson gave up portraiture so that he could focus on taking photographs of scenery."
                      options={options_T_F_NG}
                    />
                    {/************* [7] *************/}
                    <IELTSRadio
                      qn="7"
                      question="When Henderson began work for the Intercolonial Railway, the Montreal to Halifax line had been finished."
                      options={options_T_F_NG}
                    />
                    {/************* [8] *************/}
                    <IELTSRadio
                      qn="8"
                      question="Henderson’s last work as a photographer was with the Canadian Pacific Railway."
                      options={options_T_F_NG}
                    />
                    {/* ================================================================================ [09-13] */}
                    <IELTSQuestionTitle from="9" to="13" type="4" />
                    <IELTSTitle title="Alexander Henderson" isHeader />
                    <IELTSTitle title="Early life" />
                    {/*********** [9] ***********/}
                    <IELTSInput qn="9" beforeInput="● was born in Scotland in 1831 – father was a" />
                    <Typography>● trained as an accountant, emigrated to Canada in 1855</Typography>
                    {/*********** [10] ***********/}
                    <IELTSTitle title="Start of a photographic career" isHeader />
                    <Typography>● opened up a photographic studio in 1866</Typography>
                    <Typography>● took photos of city life, but preferred landscape photography" </Typography>
                    <IELTSInput qn="10" beforeInput="● people bought Henderson’s photos because photography took up considerable time and the" afterInput="was heavy" />
                    {/*********** [11] ***********/}
                    <IELTSInput qn="11" beforeInput="● the photographs Henderson sold were" afterInput="or souvenirs" />
                    {/*********** [12] ***********/}
                    <IELTSTitle title="Travelling as a professional photographer" isHeader />
                    <Typography>● travelled widely in Quebec and Ontario in 1870s and 1880s</Typography>
                    <IELTSInput qn="12" beforeInput="● took many trips along eastern rivers in a" />
                    <Typography>● worked for Canadian railways between 1875 and 1897</Typography>
                    {/*********** [13] ***********/}
                    <IELTSInput qn="13" beforeInput="● worked for CPR in 1885 and photographed the" afterInput="and the railway at Rogers Pass" />
                  </>
                }
                {part === 2 &&
                  <>
                    {/* ================================================================================ [14-18] */}
                    <IELTSQuestionTitle from="14" to="18" type="8" />
                    {/************* [14-18] *************/}
                    <IELTSTableOptions
                      questions={[
                        { id: 14, title: 'why some people avoided hospitals in the 19th century' },
                        { id: 15, title: 'a suggestion that the popularity of tall buildings is linked to prestige' },
                        { id: 16, title: 'a comparison between the circulation of air in a 19th-century building and modern standards' },
                        { id: 17, title: 'how Short tested the circulation of air in a 19th-century building' },
                        { id: 18, title: 'an implication that advertising led to the large increase in the use of air conditioning' }
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
                    {/* ================================================================================ [19-26] */}
                    <IELTSQuestionTitle from="19" to="26" type="4" />
                    <IELTSTitle title="Ventilation in 19th-century hospital wards" isHeader />
                    {/************* [19] *************/}
                    <IELTSInput qn="19" beforeInput="Professor Alan Short examined the work of John Shaw Billings, who influenced the architectural" afterInput="of hospitals to ensure they had good ventilation." />
                    {/************* [20] *************/}
                    <IELTSInput qn="20" beforeInput="He calculated that" />
                    {/************* [21] *************/}
                    <IELTSInput qn="21" beforeInput="in the air coming from patients suffering form" afterInput="would not have harmed other patients" />
                    {/************* [22] *************/}
                    <IELTSInput qn="22" beforeInput="He also found that the air in" afterInput="In hospitals could change as often as in a modern operating theatre," />
                    {/************* [23] *************/}
                    <IELTSInput qn="23" beforeInput="He suggests that energy use could be reduced by locating more patients in" afterInput="areas." />
                    {/************* [24] *************/}
                    <IELTSInput qn="24" beforeInput="A major reason for improving ventilation in 19th-century hospitals was the demand from the" afterInput="or protection against bad air," />
                    {/************* [25] *************/}
                    <IELTSInput qn="25" beforeInput="known as" afterInput="These were blamed for the spread of disease for hundreds of years," />
                    {/************* [26] *************/}
                    <IELTSInput qn="26" beforeInput="including epidemics of" afterInput="in London and Paris in the middle of the 19th century." />
                  </>
                }

                {part === 3 &&
                  <>
                    {/* ================================================================================ [27-31] */}
                    <IELTSQuestionTitle from="27" to="34" type="9" />
                    {/************* [27-31] *************/}
                    <IELTSTableOptionsLabel
                      questions={
                        [
                          { id: 27, title: 'Section A' },
                          { id: 28, title: 'Section B' },
                          { id: 29, title: 'Section C' },
                          { id: 30, title: 'Section D' },
                          { id: 31, title: 'Section E' },
                          { id: 32, title: 'Section F' },
                          { id: 33, title: 'Section G' },
                          { id: 34, title: 'Section H' }
                        ]
                      }
                      topLabels={[
                        { title: "Complaints about the impact of a certain approach" },
                        { title: "Fundamental beliefs that are in fact incorrect" },
                        { title: "Early recommendations concerning business activities" },
                        { title: "Organisations that put a new approach into practice" },
                        { title: "Companies that have suffered from changing their approach" },
                        { title: "What people are increasingly expected to do" },
                        { title: "How to achieve outcomes that are currently impossible" },
                        { title: "Neither approach guarantees continuous improvement" },
                        { title: "Evidence that a certain approach can have more disadvantages that advantages" },
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
                          { label: 'I', value: "i", },
                        ]
                      }
                    />
                    {/* ================================================================================ [35-37] */}
                    <IELTSQuestionTitle from="35" to="37" type="4" />
                    {/************* [35] *************/}
                    <IELTSInput qn="35" beforeInput="Numerous training sessions are aimed at people who feel they are not" afterInput="enough." />
                    {/************* [36] *************/}
                    <IELTSInput qn="36" beforeInput="Being organised appeals to people who regard themselves as" />
                    {/************* [37] *************/}
                    <IELTSInput qn="37" beforeInput="Many people feel" afterInput="with aspects of their work." />
                    {/* ================================================================================ [38-40] */}
                    <IELTSQuestionTitle from="38" to="40" type="100" />
                    {/************* [38] *************/}
                    <IELTSRadio
                      qn="38"
                      question="Both businesses and people aim at order without really considering its value."
                      options={options_T_F_NG}
                    />
                    {/************* [39] *************/}
                    <IELTSRadio
                      qn="39"
                      question="Innovation is most successful if the people involved have distinct roles."
                      options={options_T_F_NG}
                    />
                    {/************* [40] *************/}
                    <IELTSRadio
                      qn="40"
                      question="Google was inspired to adopt flexibility by the success of General Electric."
                      options={options_T_F_NG}
                    />
                  </>
                }
              </div>
            }
          />
        }
      </div>
      <IELTSPartNavigation part={part} />
    </>
  );
};

export default index;


