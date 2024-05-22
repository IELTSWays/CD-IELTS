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
import IELTSMultiCheckbox from '@/components/IELTS/QuestionTypes/IELTSMultiCheckbox';
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
                    {/* ================================================================================ [01-03] */}
                    <IELTSQuestionTitle from="1" to="3" type="10" />
                    {/************* [1-3] *************/}
                    <IELTSTableOptions
                      questions={[
                        { id: 1, title: 'information about how non-scientists’ assumptions about intelligence influence their behavior towards others' },
                        { id: 2, title: 'a reference to lack of clarity over the definition of intelligence' },
                        { id: 3, title: 'the point that a researcher’s implicit and explicit theories may be very different' },
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
                          { label: 'J', value: "j", },
                        ]
                      }
                    />
                    {/* ================================================================================ [04-06] */}
                    <IELTSQuestionTitle from="4" to="6" type="100" />
                    {/************* [4] *************/}
                    <IELTSRadio
                      qn="4"
                      question="Slow language development in children is likely to prove disappointing to their parents."
                      options = {options_T_F_NG}
                    />
                    {/************* [5] *************/}
                    <IELTSRadio
                      qn="5"
                      question="People’s expectations of what children should gain from education are universal."
                      options = {options_T_F_NG}
                    />
                    {/************* [6] *************/}
                    <IELTSRadio
                      qn="6"
                      question="Scholars may discuss theories without fully understanding each other."
                      options = {options_T_F_NG}
                    />
                    {/* ================================================================================ [07-13] */}
                    <IELTSQuestionTitle from="7" to="13" type="11" />
                    {/************* [7-13] *************/}
                    <IELTSTableOptionsLabel
                      questions={
                        [
                          { id: 7, title: 'It is desirable for the same possibilities to be open to everyone.' },
                          { id: 8, title: 'No section of society should have preferential treatment at the expense of another.' },
                          { id: 9, title: 'People should only gain benefits on the basis of what they actually achieve.' },
                          { id: 10, title: 'Variation in intelligence begins at birth.' },
                          { id: 11, title: 'The more intelligent people should be in positions of power.' },
                          { id: 12, title: 'Everyone can develop the same abilities.' },
                          { id: 13, title: 'People of low intelligence are likely to lead uncontrolled lives.' },
                        ]
                      }
                      topLabels={[
                        { title: "Hamiltonian" },
                        { title: "Jeffersonian" },
                        { title: "Jacksonian" },
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
                {part === 2 &&
                  <>
                    {/* ================================================================================ [14-20] */}
                    <IELTSQuestionTitle from="14" to="20" type="8" />
                    {/************* [14-20] *************/}
                    <div id="q-101">
                      <IELTSTableOptions
                        questions={[
                          { id: 14, title: 'mention of factors driving a renewed interest in natural medicinal compounds.' },
                          { id: 15, title: 'how recent technological advances have made insect research easier' },
                          { id: 16, title: 'examples of animals which use medicinal substances from nature' },
                          { id: 17, title: 'reasons why it is challenging to use insects in drug research' },
                          { id: 18, title: 'reference to how interest in drug research may benefit wildlife' },
                          { id: 19, title: 'a reason why nature-based medicines fell out of favour for a period' },
                          { id: 20, title: 'an example of an insect-derived medicine in use at the moment' }
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
                    </div>
                    {/* ================================================================================ [21-22] */}
                    <IELTSQuestionTitle from="21" to="22" type="2" />
                    {/************* [21-22] *************/}
                    <IELTSMultiCheckbox
                      qn="21"
                      question="Which TWO of the following make insects interesting for drug research?"
                      checkList={[
                        { label: 'the huge number of individual insects in the world', value: "a", },
                        { label: 'the variety of substances insects have developed to protect themselves', value: "b", },
                        { label: 'the potential to extract and make use of insects’ genetic codes', value: "c", },
                        { label: 'the similarities between different species of insect', value: "d", },
                        { label: 'the manageable size of most insects', value: "e", },
                      ]}
                    />
                    {/* ================================================================================ [23-26] */}
                    <IELTSQuestionTitle from="23" to="26" type="4" />
                    <IELTSTitle title="Research at Aberystwyth University" isHeader />
                    {/*********** [23] ***********/}
                    <IELTSInput qn="23" beforeInput="Ross Piper and fellow zoologists at Aberystwyth University are using their expertise in" afterInput="when undertaking bioprospecting with insects." />
                    {/*********** [24] ***********/}
                    <IELTSInput qn="24" beforeInput="They are especially interested in the compounds that insects produce to overpower and preserve their" afterInput="They are also interested in compounds which insects use to protect" />
                    {/*********** [25] ***********/}
                    <IELTSInput qn="25" beforeInput="themselves from pathogenic bacteria and fungi found in their" afterInput="Piper hopes" />
                    {/*********** [26] ***********/}
                    <IELTSInput qn="26" beforeInput="that these substances will be useful in the development of drugs such as" />

                  </>
                }

                {part === 3 &&
                  <>
                    {/* ================================================================================ [27-31] */}
                    <IELTSQuestionTitle from="27" to="31" type="12" />
                    {/************* [27-31] *************/}
                    <IELTSTableOptionsLabel
                      questions={
                        [
                          { id: 27, title: 'Play can be divided into a number of separate categories.' },
                          { id: 28, title: 'Adults’ intended goals affect how they play with children.' },
                          { id: 29, title: 'Combining work with play may be the best way for children to learn.' },
                          { id: 30, title: 'Certain elements of play are more significant than others.' },
                          { id: 31, title: 'Activities can be classified on a scale of playfulness.' },
                        ]
                      }
                      topLabels={[
                        { title: "Elkind" },
                        { title: "Miller & Almon" },
                        { title: "Rubin et al." },
                        { title: "Stuart Brown" },
                        { title: "Pellegrini" },
                        { title: "Joan Goodman" },
                        { title: "Girsch-Pasek et al." },
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
                    {/* ================================================================================ [32-36] */}
                    <IELTSQuestionTitle from="32" to="36" type="100" />
                    {/************* [32] *************/}
                    <IELTSRadio
                      qn="32"
                      question="Children need toys in order to play."
                      options = {options_T_F_NG}
                    />
                    {/************* [33] *************/}
                    <IELTSRadio
                      qn="33"
                      question="It is a mistake to treat play and learning as separate types of activities."
                      options = {options_T_F_NG}
                    />
                    {/************* [34] *************/}
                    <IELTSRadio
                      qn="34"
                      question="Play helps children to develop their artistic talents."
                      options = {options_T_F_NG}
                    />
                    {/************* [35] *************/}
                    <IELTSRadio
                      qn="35"
                      question="Researchers have agreed on a definition of play."
                      options = {options_T_F_NG}
                    />
                    {/************* [36] *************/}
                    <IELTSRadio
                      qn="36"
                      question="Work and play differ in terms of whether or not they have a target."
                      options = {options_T_F_NG}
                    />
                    {/* ================================================================================ [37-40] */}
                    <IELTSQuestionTitle from="37" to="40" type="4" />
                    <IELTSTitle title="Guided play" isHeader />
                    {/*********** [37] ***********/}
                    <IELTSInput qn="37" beforeInput="In the simplest form of guided play, an adult contributes to the environment in which the child is playing. Alternatively, an adult can play with a child and develop the play, for instance by" afterInput="the child to investigate different aspects of their game." />
                    {/*********** [38] ***********/}
                    <IELTSInput qn="38" beforeInput="IAdults can help children to learn through play, and may make the activity rather structured, but it should still be based on the child’s" afterInput="to play." />
                    {/*********** [39] ***********/}
                    <IELTSInput qn="39" beforeInput="Play without the intervention of adults gives children real" afterInput=";" />
                    {/*********** [40] ***********/}
                    <IELTSInput qn="40" beforeInput="with adults, play can be" afterInput="at particular goals. However, all forms of play should be an opportunity for children to have fun." />
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