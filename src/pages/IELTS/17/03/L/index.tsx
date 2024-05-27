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
                <IELTSTitle title="Advice on surfing holidays" isHeader />
                <strong> Jack’s advice </strong>
                {/************* [1] *************/}
                <IELTSInput qn="1" beforeInput="●   Recommends surfing for " afterInput="holidays in the summer" />
                {/************* [2] *************/}
                <IELTSInput qn="2" beforeInput="●   Need to be quite " />
                <strong> Irish surfing locations </strong>
                <Typography> ●   County Clare </Typography>
                {/************* [3] *************/}
                <IELTSInput qn="3" beforeInput="&nbsp;&nbsp; –  Lahinch has some good quality " afterInput="and surf schools" />
                <Typography> &nbsp;&nbsp; –  There are famous cliffs nearby </Typography>
                <Typography> ●   County Mayo </Typography>
                {/************* [4] *************/}
                <IELTSInput qn="4" beforeInput="&nbsp;&nbsp; –  Good surf school at" afterInput="beach" />
                {/************* [5] *************/}
                <IELTSInput qn="5" beforeInput="&nbsp;&nbsp; –  Surf camp lasts for one" />
                {/************* [6] *************/}
                <IELTSInput qn="6" beforeInput="&nbsp;&nbsp; –  Can also explore the local" afterInput="by kayak" />
                <strong> Weather </strong>
                {/************* [7] *************/}
                <IELTSInput qn="7" beforeInput="●   Best month to go:" />
                {/************* [8] *************/}
                <IELTSInput qn="8" beforeInput="●   Average temperature in summer: approx." afterInput="degrees" />
                <strong> Costs </strong>
                <Typography> ●   Equipment </Typography>
                {/************* [9] *************/}
                <IELTSInput qn="9" beforeInput="&nbsp;&nbsp; –  Wetsuit and surfboard:" afterInput="euros per day" />
                {/************* [10] *************/}
                <IELTSInput qn="10" beforeInput="&nbsp;&nbsp; –  Also advisable to hire" afterInput="for warmth" />
              </>
            }

            {part === 2 &&
              <>
                {/* ================================================================================ [11-12] */}
                <IELTSQuestionTitle from="11" to="12" type="101" />
                {/************* [11-12] *************/}
                <IELTSMultiCheckbox
                  qn="11"
                  question="Which TWO facts are given about the school’s extended hours childcare service?"
                  checkList={[
                    { label: 'It started recently.', value: "a", },
                    { label: 'More children attend after school than before school.', value: "b", },
                    { label: 'An average of 50 children attend in the mornings.', value: "c", },
                    { label: 'A child cannot attend both the before and after school sessions.', value: "d", },
                    { label: 'The maximum number of children who can attend is 70.', value: "e", },
                  ]}
                />

                {/* ================================================================================ [13-15] */}
                <IELTSQuestionTitle from="13" to="15" type="16" />
                {/************* [13] *************/}
                <IELTSRadio
                  qn="13"
                  question="How much does childcare cost for a complete afternoon session per child?"
                  options={[
                    { label: '£3.50', value: "a" },
                    { label: '£5.70', value: "b" },
                    { label: '£7.20', value: "c" },
                  ]}
                />
                {/************* [14] *************/}
                <IELTSRadio
                  qn="14"
                  question="What does the manager say about food?"
                  options={[
                    { label: 'Children with allergies should bring their own food.', value: "a" },
                    { label: 'Children may bring healthy snacks with them.', value: "b" },
                    { label: 'Children are given a proper meal at 5 p.m.', value: "c" },
                  ]}
                />
                {/************* [15] *************/}
                <IELTSRadio
                  qn="15"
                  question="What is different about arrangements in the school holidays?"
                  options={[
                    { label: 'Children from other schools can attend.', value: "a" },
                    { label: 'Older children can attend.', value: "b" },
                    { label: 'A greater number of children can attend.', value: "c" },
                  ]}
                />
                {/* ================================================================================ [16-20] */}
                <IELTSQuestionTitle
                  from="16"
                  to="20"
                  title="What information is given about each of the following activities on offer?"
                  numberOfAnswers="five"
                  alphabet="g"
                  type="200"
                />
                {/************* [16-20] *************/}
                <IELTSTableOptionsLabel
                  questions={
                    [
                      { id: 16, title: 'Spanish' },
                      { id: 17, title: 'Music' },
                      { id: 18, title: 'Painting' },
                      { id: 19, title: 'Yoga' },
                      { id: 20, title: 'Cooking' },
                    ]
                  }
                  topLabels={[
                    { title: "has limited availability" },
                    { title: "is no longer available" },
                    { title: "is for over 8s only" },
                    { title: "requires help from parents" },
                    { title: "involves an additional fee" },
                    { title: "is a new activity" },
                    { title: "was requested by children" },
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
              </>
            }

            {part === 3 &&
              <>
                {/* ================================================================================ [21-24] */}
                <IELTSQuestionTitle from="21" to="24" type="16" />
                <strong>Holly’s Work Placement Tutorial</strong>
                {/************* [21] *************/}
                <IELTSRadio
                  qn="21"
                  question="Holly has chosen the Orion Stadium placement because"
                  options={[
                    { label: 'it involves children.', value: "a" },
                    { label: 'it is outdoors.', value: "b" },
                    { label: 'it sounds like fun.', value: "c" },
                  ]}
                />
                {/************* [22] *************/}
                <IELTSRadio
                  qn="22"
                  question="Which aspect of safety does Dr Green emphasise most?"
                  options={[
                    { label: 'ensuring children stay in the stadium', value: "a" },
                    { label: 'checking the equipment children will use', value: "b" },
                    { label: 'removing obstacles in changing rooms', value: "c" },
                  ]}
                />
                {/************* [23] *************/}
                <IELTSRadio
                  qn="23"
                  question="What does Dr Green say about the spectators?"
                  options={[
                    { label: 'They can be hard to manage.', value: "a" },
                    { label: 'They make useful volunteers.', value: "b" },
                    { label: 'They shouldn’t take photographs.', value: "c" },
                  ]}
                />
                {/************* [24] *************/}
                <IELTSRadio
                  qn="24"
                  question="What has affected the schedule in the past?"
                  options={[
                    { label: 'bad weather', value: "a" },
                    { label: 'an injury', value: "b" },
                    { label: 'extra time', value: "c" },
                  ]}
                />
                {/* ================================================================================ [25-30] */}
                <IELTSQuestionTitle
                  from="25"
                  to="30"
                  title="What do Holly and her tutor agree is an important aspect of each of the following events management skills?"
                  numberOfAnswers="six"
                  alphabet="h"
                  type="200"
                />
                {/************* [25-30] *************/}
                <IELTSTableOptionsLabel
                  questions={
                    [
                      { id: 25, title: 'Communication' },
                      { id: 26, title: 'Organisation' },
                      { id: 27, title: 'Time management' },
                      { id: 28, title: 'Creativity' },
                      { id: 29, title: 'Leadership' },
                      { id: 30, title: 'Networking' },
                    ]
                  }
                  topLabels={[
                    { title: "being flexible" },
                    { title: "focusing on details" },
                    { title: "having a smart appearance" },
                    { title: "hiding your emotions" },
                    { title: "relying on experts" },
                    { title: "trusting your own views" },
                    { title: "doing one thing at a time" },
                    { title: "thinking of the future" },
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

            {part === 4 &&
              <>
                {/* ================================================================================ [31-40] */}
                <IELTSQuestionTitle from="31" to="40" type="1" />
                <IELTSTitle title="Bird Migration Theory" isHeader />
                <IELTSTitle title="Hibernation theory" />
                {/************* [31] *************/}
                <IELTSInput on="31" beforeInput="●   It was believed that birds hibernated underwater or buried themselves in " afterInput="." />
                <Typography>
                  ●   This theory was later disproved by experiments on caged birds.
                </Typography>
                <IELTSTitle title="Transmutation theory" />
                <Typography>
                  ●   Aristotle believed birds changed from one species into another in summer and winter.
                </Typography>
                {/************* [32] *************/}
                <IELTSInput qn="32" beforeInput="     &nbsp;&nbsp;–  In autumn he observed that redstarts experience the loss of" afterInput="and thought they then turned into robins." />
                {/************* [33] *************/}
                <IELTSInput qn="33" beforeInput="&nbsp;&nbsp;–  Aristotle’s assumptions were logical because the two species of birds had a similar" />
                <IELTSTitle title="17th century" />
                {/************* [34] *************/}
                <IELTSInput qn="34" beforeInput="●   Charles Morton popularised the idea that birds fly to the" afterInput="in winter." />
                <IELTSTitle title="Scientific developments" />
                {/************* [35] *************/}
                <IELTSInput qn="35" beforeInput="●   In 1822, a stork was killed in Germany which had an African spear in its" afterInput="." />
                {/************* [36] *************/}
                <IELTSInput qn="36" beforeInput="&nbsp;&nbsp;–  previously there had been no" afterInput="that storks migrate to Africal" />
                {/************* [37] *************/}
                <IELTSInput qn="37" beforeInput="●   Little was known about the" afterInput="and journeys of migrating birds until the practice of ringing was established." />
                {/************* [38] *************/}
                <IELTSInput qn="38" beforeInput="&nbsp;&nbsp;–  It was thought large birds carried small birds on some journeys because they were considered incapable of travelling across huge" afterInput="." />
                {/************* [39] *************/}
                <IELTSInput qn="39" beforeInput="&nbsp;&nbsp;–  Ringing depended on what is called the‘" afterInput="’ of dead birds." />
                {/************* [40] *************/}
                <IELTSInput qn="40" beforeInput="●   In 1931, the first" afterInput="to show the migration of European birds was printed." />
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