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
    if (currentQuestion == 13 || currentQuestion == 15 || currentQuestion == 17 || currentQuestion == 29 || currentQuestion == 31) {
      dispatch(setCurrentQuestion(+currentQuestion - 2))
    }
    else {
      dispatch(setCurrentQuestion(+currentQuestion - 1))
    }
  }

  const handleNext = () => {
    if (currentQuestion == 11 || currentQuestion == 13 || currentQuestion == 15 || currentQuestion == 27 || currentQuestion == 29) {
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
                <IELTSTitle title="Enquiry about joining Youth Council" isHeader />
                {/************* [0] *************/}
                <Typography className='italic'>Example</Typography>
                <IELTSInput qn="0" beforeInput="Name: Roger" disabled placeholder="Brown" />
                <Typography>
                  Age: 18
                </Typography>
                {/************* [1] *************/}
                <IELTSInput qn="1" beforeInput="Currently staying in a" afterInput="during the week" />
                {/************* [2] *************/}
                <IELTSInput qn="2" beforeInput="Postal address:17," afterInput="Street, Stamford, Lincs" />
                {/************* [3] *************/}
                <IELTSInput on="3" beforeInput="Postcode:" />
                {/************* [4] *************/}
                <IELTSInput qn="4" beforeInput="Occupation: student and part-time job as a" />
                {/************* [5] *************/}
                <IELTSInput qn="5" beforeInput="Studying" afterInput="(major subject) and history (minor subject)" />
                {/************* [6] [7]*************/}
                <IELTSInput qn="6" beforeInput="Hobbies: does a lot of" />
                <IELTSInput qn="7" beforeInput=", and is interested in the" noDefaultSpacing />
                {/************* [8] *************/}
                <IELTSInput qn="8" beforeInput="On Youth Council, wants to work with young people who are" />
                {/************* [9] *************/}
                <IELTSTitle title="Location" />
                <IELTSInput qn="9" beforeInput="Will come to talk to the Elections Officer next Monday at" afterInput="pm" />
                {/************* [10] *************/}
                <IELTSInput qn="10" beforeInput="Mobile number:" />
              </>
            }

            {part === 2 &&
              <>
                {/* ================================================================================ [11-12] */}
                <IELTSQuestionTitle from="11" to="12" type="15" />
                {/************* [11-12] *************/}
                <IELTSMultiCheckbox
                  qn="11"
                  question="Which TWO changes have been made so far during the refurbishment of the theatre?"
                  checkList={[
                    { label: 'Some rooms now have a different use.', value: "a", },
                    { label: 'A different type of seating has been installed.', value: "b", },
                    { label: 'An elevator has been installed.', value: "c", },
                    { label: 'The outside of the building has been repaired.', value: "d", },
                    { label: 'Extra seats have been added.', value: "e", },
                  ]}
                />
                {/* ================================================================================ [13-14] */}
                <IELTSQuestionTitle from="13" to="14" type="15" />
                {/************* [13-14] *************/}
                <IELTSMultiCheckbox
                  qn="13"
                  question="Which TWO facilities does the theatre currently offer to the public?"
                  checkList={[
                    { label: 'rooms for hire', value: "a", },
                    { label: 'backstage tours', value: "b", },
                    { label: 'hire of costumes', value: "c", },
                    { label: 'a bookshop', value: "d", },
                    { label: 'a café', value: "e", },
                  ]}
                />
                {/* ================================================================================ [15-16] */}
                <IELTSQuestionTitle from="15" to="16" type="15" />
                {/************* [15-16] *************/}
                <IELTSMultiCheckbox
                  qn="15"
                  question="Which TWO workshops does the theatre currently offer?"
                  checkList={[
                    { label: 'sound', value: "a", },
                    { label: 'acting', value: "b", },
                    { label: 'making puppets', value: "c", },
                    { label: 'make-up', value: "d", },
                    { label: 'lighting', value: "e", },
                  ]}
                />
                {/* ================================================================================ [17-20] */}
                <IELTSQuestionTitle
                  from="17"
                  to="20"
                  alphabet="g"
                  type="203"
                />
                {/************* [17-20] *************/}

                <IELTSTableOptions
                  questions={[
                    { id: 17, title: 'box office' },
                    { id: 18, title: 'theatre manager’s office' },
                    { id: 19, title: 'lighting box' },
                    { id: 20, title: 'artistic director’s offices' }
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
                    ]
                  }
                />
              </>
            }

            {part === 3 &&
              <>
                {/* ================================================================================ [21-26] */}
                <IELTSQuestionTitle from="21" to="26" type="16" />
                <strong>Rocky Bay field trip</strong>
                {/************* [21] *************/}
                <IELTSRadio
                  qn="21"
                  question="What do the students agree should be included in their aims?"
                  options={[
                    { label: 'factors affecting where organisms live', value: "a" },
                    { label: 'the need to preserve endangered species', value: "b" },
                    { label: 'techniques for classifying different organisms', value: "c" },
                  ]}
                />

                {/************* [22] *************/}
                <IELTSRadio
                  qn="22"
                  question="What equipment did they forget to take on the Field Trip?"
                  options={[
                    { label: 'string', value: "a" },
                    { label: 'a compass', value: "b" },
                    { label: 'a ruler', value: "c" },
                  ]}
                />

                {/************* [23] *************/}
                <IELTSRadio
                  qn="23"
                  question="In Helen’s procedure section, Colin suggests a change in"
                  options={[
                    { label: 'the order in which information is given.', value: "a" },
                    { label: 'the way the information is divided up.', value: "b" },
                    { label: 'the amount of information provided.', value: "c" },
                  ]}
                />

                {/************* [24] *************/}
                <IELTSRadio
                  qn="24"
                  question="What do they say about the method they used to measure wave speed?"
                  options={[
                    { label: 'It provided accurate results.', value: "a" },
                    { label: 'It was simple to carry out.', value: "b" },
                    { label: 'It required special equipment.', value: "c" },
                  ]}
                />

                {/************* [25] *************/}
                <IELTSRadio
                  qn="25"
                  question="What mistake did Helen make when first drawing the map?"
                  options={[
                    { label: 'She chose the wrong scale.', value: "a" },
                    { label: 'She stood in the wrong place.', value: "b" },
                    { label: 'She did it at the wrong time.', value: "c" },
                  ]}
                />

                {/************* [26] *************/}
                <IELTSRadio
                  qn="26"
                  question="What do they decide to do next with their map?"
                  options={[
                    { label: 'scan it onto a computer', value: "a" },
                    { label: 'check it using photographs', value: "b" },
                    { label: 'add information from the internet', value: "c" },
                  ]}
                />
                {/* ================================================================================ [27-28] */}
                <IELTSQuestionTitle from="27" to="28" type="15" />
                {/************* [27-28] *************/}
                <IELTSMultiCheckbox
                  qn="27"
                  question="Which TWO problems affecting organisms in the splash zone are mentioned?"
                  checkList={[
                    { label: 'lack of water', value: "a" },
                    { label: 'strong winds', value: "b" },
                    { label: 'lack of food', value: "c" },
                    { label: 'high temperatures', value: "d" },
                    { label: 'large waves', value: "e" },
                  ]}
                />

                {/* ================================================================================ [29-30] */}
                <IELTSQuestionTitle from="29" to="30" type="15" />
                {/************* [29-30] *************/}
                <IELTSMultiCheckbox
                  qn="29"
                  question="Which TWO reasons for possible error will they include in their report?"
                  checkList={[
                    { label: 'inaccurate records of the habitat of organisms', value: "a" },
                    { label: 'influence on behaviour of organisms by observer', value: "b" },
                    { label: 'incorrect identification of some organisms', value: "c" },
                    { label: 'making generalisations from a small sample', value: "d" },
                    { label: 'missing some organisms when counting', value: "e" },
                  ]}
                />

              </>
            }

            {part === 4 &&
              <>
                {/* ================================================================================ [31-40] */}
                <IELTSQuestionTitle from="31" to="40" type="1" />
                <IELTSTitle title="DESIGNING A PUBLIC BUILDING:" isHeader />
                <IELTSTitle title="THE TAYLOR CONCERT HALL" isHeader />
                <IELTSTitle title="Introduction" />
                <Typography>
                  The designer of a public building may need to consider the building’s
                </Typography>
                <Typography>
                  ●   function
                </Typography>
                {/************* [31] *************/}
                <IELTSInput on="31" beforeInput="●   physical and" afterInput="context" />
                <Typography>
                  ●   symbolic meaning
                </Typography>
                <IELTSTitle title="Location and concept of the Concert Hall" />
                {/************* [32] *************/}
                <IELTSInput qn="32" beforeInput="On the site of a disused" />
                {/************* [33] *************/}
                <IELTSInput qn="33" beforeInput="Beside a" />
                <Typography>
                  The design is based on the concept of a mystery
                </Typography>
                <IELTSTitle title="Building design" />
                {/************* [34] *************/}
                <IELTSInput qn="34" beforeInput="It’s approached by a" afterInput="for pedestrians" />
                {/************* [35] *************/}
                <IELTSInput qn="35" beforeInput="The building is the shape of a" />
                {/************* [36] *************/}
                <IELTSInput qn="36" beforeInput="One exterior wall acts as a large " />
                <Typography>
                  In the auditorium:
                </Typography>
                {/************* [37] *************/}
                <IELTSInput qn="37" beforeInput="●   the floor is built on huge pads made of" />
                {/************* [38] *************/}
                <IELTSInput qn="38" beforeInput="●   the walls are made of local wood and are" afterInput="in shape" />
                {/************* [39] *************/}
                <IELTSInput qn="39" beforeInput="●   ceiling panels and" afterInput="on walls allow adjustment of acoustics" />
                {/************* [40] *************/}
                <IELTSTitle title="Evaluation" />
                <IELTSInput qn="40" beforeInput="Some critics say the" afterInput="style of the building is inappropriate" />
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