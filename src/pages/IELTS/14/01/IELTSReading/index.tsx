import { useState } from 'react'
// mtu
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// mtu
// store
import { useAppSelector } from '@/store/hooks'
// store
import { SplitView } from "@/components/IELTS/SplitView";

import Title from '@/components/IELTS/Title';
import QRadio from '@/components/IELTS/QRadio';
import QTextInput from '@/components/IELTS/QTextInput';
import QMultiCheckBox from '@/components/IELTS/QMultiCheckBox';
import AnswersTable from './AnswersTable';

import Text1 from './Text1';
import Text2 from './Text2';
import Text3 from './Text3';

const index = () => {
  const [part, setPart] = useState(2)

  const fontSize = useAppSelector((state) => state.user.fontSize)

  const parts = [
    { title: "Part 1", description: "Read the text and answer questions 1-13." },
    { title: "Part 2", description: "Read the text and answer questions 13-20." },
    { title: "Part 3", description: "Read the text and answer questions 21-40." },
  ]

  const q9_13 = [
    { text: "TRUE", value: "P01", selected: false },
    { text: "FALSE", value: "P02", selected: false },
    { text: "NOT GIVEN", value: "P03", selected: false },
  ];

  const q19_20 = [
    {
      text: "It was initially opposed by a government department.",
      value: "P06",
      selected: false
    },
    {
      text: "It failed when a partner in the scheme withdrew support.",
      value: "P07",
      selected: false
    },
    {
      text: "It aimed to be more successful than the Copenhagen scheme.",
      value: "P08",
      selected: false
    },
    {
      text: "It was made possible by a change in people’s attitudes.",
      value: "P09",
      selected: false
    },
    {
      text: "It attracted interest from a range of bike designers.",
      value: "P10",
      selected: false
    }
  ];

  const q21_22 = [
    {
      text: "The majority of residents would like to prevent all cars from entering the city.",
      value: "P11",
      selected: false
    },
    {
      text: "There is little likelihood of the city having another bike-sharing scheme.",
      value: "P12",
      selected: false
    },
    {
      text: "More trips in the city are made by bike than by any other form of transport.",
      value: "P13",
      selected: false
    },
    {
      text: "A bike-sharing scheme would benefit residents who use public transport.",
      value: "P14",
      selected: false
    },
    {
      text: "The city has a reputation as a place that welcomes cyclists.",
      value: "P15",
      selected: false
    }
  ];

  return (
    <>
      <Title title={parts[part - 1].title} description={parts[part - 1].description} />

      <div className={`ielts-contaner ${fontSize}`} id="ielts-list-text-input">

        <SplitView
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
                  <Box>
                    <Typography>
                      <h3> Questions 1 - 8 </h3>
                    </Typography>
                    <Typography sx={{ my: 1.5 }}>
                      Complete the notes below.
                    </Typography>
                    <Typography className='italic'>
                      Choose
                      <Typography sx={{ px: 1 }}> <strong className='uppercase'> ONE WORD ONLY </strong> </Typography>
                      from the passage for each answer.
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 3 }}>
                    <Typography align="left" sx={{ py: 2 }}>
                      <h3>Children’s play</h3>
                    </Typography>

                    <section>
                      <Box sx={{ px: 1 }}>
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                          <Paper elevation={0}>
                            <Typography><strong>Uses of children’s play</strong></Typography>
                          </Paper>
                        </Stack>
                      </Box>

                      {/************************* [1] *************************/}
                      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                        <Paper elevation={0} sx={{ width: '15px' }}>
                          <Typography>●</Typography>
                        </Paper>
                        <Paper elevation={0}>
                          <Stack direction="row" alignItems="center">
                            <Typography sx={{ pr: 1 }}>
                              building a ‘magical kingdom’ may help develop
                            </Typography>
                            <QTextInput number="1" />
                          </Stack>
                        </Paper>
                      </Stack>

                      {/************************* [2] *************************/}
                      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                        <Paper elevation={0} sx={{ width: '15px' }}>
                          <Typography>●</Typography>
                        </Paper>
                        <Paper elevation={0}>
                          <Stack direction="row" alignItems="center">
                            <Typography sx={{ pr: 1 }}>
                              board games involve
                            </Typography>
                            <QTextInput number="2" />
                            <Typography sx={{ pl: 1 }}>
                              and turn-taking
                            </Typography>
                          </Stack>
                        </Paper>
                      </Stack>
                    </section>

                    <section>
                      <Box sx={{ px: 1 }}>
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                          <Paper elevation={0}>
                            <Typography><strong>Recent changes affecting children’s play</strong></Typography>
                          </Paper>
                        </Stack>
                      </Box>

                      {/************************* [3] *************************/}
                      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                        <Paper elevation={0} sx={{ width: '15px' }}>
                          <Typography>●</Typography>
                        </Paper>
                        <Paper elevation={0}>
                          <Stack direction="row" alignItems="center">
                            <Typography sx={{ pr: 1 }}>
                              population of
                            </Typography>
                            <QTextInput number="3" />
                            <Typography sx={{ pl: 1 }}>
                              have grown
                            </Typography>
                          </Stack>
                        </Paper>
                      </Stack>

                      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                        <Paper elevation={0} sx={{ width: '15px' }}>
                          <Typography>●</Typography>
                        </Paper>
                        <Paper elevation={0}>
                          <Stack direction="row" alignItems="center">
                            <Typography sx={{ pr: 1 }}>
                              opportunities for free play are limited due to
                            </Typography>
                          </Stack>
                        </Paper>
                      </Stack>

                      {/************************* [4] *************************/}
                      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                        <Paper elevation={0} sx={{ width: '15px' }}>
                          <Typography> </Typography>
                        </Paper>
                        <Paper elevation={0}>
                          <Stack direction="row" alignItems="center">
                            <Stack direction="row" alignItems="center">
                              <Typography sx={{ pr: 1 }}>
                                — fear of
                              </Typography>
                              <QTextInput number="4" />
                            </Stack>
                          </Stack>
                        </Paper>
                      </Stack>

                      {/************************* [5] *************************/}
                      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                        <Paper elevation={0} sx={{ width: '15px' }}>
                          <Typography> </Typography>
                        </Paper>
                        <Paper elevation={0}>
                          <Stack direction="row" alignItems="center">
                            <Stack direction="row" alignItems="center">
                              <Typography sx={{ pr: 1 }}>
                                — fear of
                              </Typography>
                              <QTextInput number="5" />
                            </Stack>
                          </Stack>
                        </Paper>
                      </Stack>

                      {/************************* [6] *************************/}
                      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                        <Paper elevation={0} sx={{ width: '15px' }}>
                          <Typography> </Typography>
                        </Paper>
                        <Paper elevation={0}>
                          <Stack direction="row" alignItems="center">
                            <Typography sx={{ pr: 1 }}>
                              — increased
                            </Typography>
                            <QTextInput number="6" />
                            <Typography sx={{ pl: 1 }}>
                              in schools
                            </Typography>
                          </Stack>
                        </Paper>
                      </Stack>
                    </section>

                    <section>
                      <Box sx={{ px: 1 }}>
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                          <Paper elevation={0}>
                            <Typography><strong>International policies on children’s play</strong></Typography>
                          </Paper>
                        </Stack>
                      </Box>

                      {/************************* [7] *************************/}
                      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                        <Paper elevation={0} sx={{ width: '15px' }}>
                          <Typography>●</Typography>
                        </Paper>
                        <Paper elevation={0}>
                          <Stack direction="row" alignItems="center">
                            <Typography sx={{ pr: 1 }}>
                              it is difficult to find
                            </Typography>
                            <QTextInput number="7" />
                            <Typography sx={{ pl: 1 }}>
                              to support new policies
                            </Typography>
                          </Stack>
                        </Paper>
                      </Stack>

                      {/************************* [8] *************************/}
                      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                        <Paper elevation={0} sx={{ width: '15px' }}>
                          <Typography>●</Typography>
                        </Paper>
                        <Paper elevation={0}>
                          <Stack direction="row" alignItems="center">
                            <Typography sx={{ pr: 1 }}>
                              research needs to study the impact of play on the rest of the child’s
                            </Typography>
                            <QTextInput number="8" />
                          </Stack>
                        </Paper>
                      </Stack>
                    </section>

                    <Box sx={{ py: 1 }}>
                      <Typography>
                        <h3> Questions 9 - 13 </h3>
                      </Typography>
                      <Typography sx={{ my: 1.5 }}>
                        Do the following statements agree with the information given in Reading Passage 1?
                      </Typography>
                      <Typography>
                        Choose
                        <Typography sx={{ px: 1 }}> <strong className='uppercase'> true </strong> </Typography>
                        if the statement agrees with the information,
                      </Typography>
                      <Typography>
                        Choose
                        <Typography sx={{ px: 1 }}> <strong className='uppercase'> false </strong> </Typography>
                        if the statement contradicts the information, or
                        <Typography sx={{ px: 1 }}> <strong className='uppercase'> not given </strong> </Typography>
                        if there is no information on this
                      </Typography>
                    </Box>

                    <section>
                      <Box sx={{ p: 1 }}>
                        {/************************* [9] *************************/}
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap" sx={{ py: 1 }}>
                          <Paper elevation={0}>
                            <Typography>
                              <strong> 9 </strong>
                              <Typography sx={{ px: 1 }}>
                                Children with good self-control are known to be likely to do well at school later on.
                              </Typography>
                            </Typography>
                          </Paper>
                          <Paper elevation={0}>
                            <Stack direction="row" alignItems="center">
                              <QRadio options={q9_13} />
                            </Stack>
                          </Paper>
                        </Stack>
                        {/************************* [10] *************************/}
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap" sx={{ py: 1 }}>
                          <Paper elevation={0}>
                            <Typography>
                              <strong> 10 </strong>
                              <Typography sx={{ px: 1 }}>
                                The way a child plays may provide information about possible medical problems.
                              </Typography>
                            </Typography>
                          </Paper>
                          <Paper elevation={0}>
                            <Stack direction="row" alignItems="center">
                              <QRadio options={q9_13} />
                            </Stack>
                          </Paper>
                        </Stack>
                        {/************************* [11] *************************/}
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap" sx={{ py: 1 }}>
                          <Paper elevation={0}>
                            <Typography>
                              <strong> 11 </strong>
                              <Typography sx={{ px: 1 }}>
                                Playing with dolls was found to benefit girls’ writing more than boys’ writing.
                              </Typography>
                            </Typography>
                          </Paper>
                          <Paper elevation={0}>
                            <Stack direction="row" alignItems="center">
                              <QRadio options={q9_13} />
                            </Stack>
                          </Paper>
                        </Stack>
                        {/************************* [12] *************************/}
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap" sx={{ py: 1 }}>
                          <Paper elevation={0}>
                            <Typography>
                              <strong> 12 </strong>
                              <Typography sx={{ px: 1 }}>
                                Children had problems thinking up ideas when they first created the story with Lego.
                              </Typography>
                            </Typography>
                          </Paper>
                          <Paper elevation={0}>
                            <Stack direction="row" alignItems="center">
                              <QRadio options={q9_13} />
                            </Stack>
                          </Paper>
                        </Stack>
                        {/************************* [13] *************************/}
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap" sx={{ py: 1 }}>
                          <Paper elevation={0}>
                            <Typography>
                              <strong> 13 </strong>
                              <Typography sx={{ px: 1 }}>
                                People nowadays regard children’s play as less significant than they did in the past.
                              </Typography>
                            </Typography>
                          </Paper>
                          <Paper elevation={0}>
                            <Stack direction="row" alignItems="center">
                              <QRadio options={q9_13} />
                            </Stack>
                          </Paper>
                        </Stack>
                      </Box>
                    </section>
                  </Box>
                </>
              }
              {part === 2 &&
                <>
                  <Box>
                    <Typography>
                      <h3> Questions 14 - 18 </h3>
                    </Typography>
                    <Typography>
                      The text has seven paragraphs,
                      <Typography sx={{ px: 1 }}> <strong className='uppercase'> A-G </strong>. </Typography>
                      Which paragraph contains the following information?
                    </Typography>
                  </Box>

                  {/************************* [14-18] *************************/}
                  <Box sx={{ mt: 3 }}>
                    <AnswersTable />
                  </Box>

                  <Box sx={{ mt: 3 }}>
                    <Typography>
                      <h3> Questions 19 - 22 </h3>
                    </Typography>
                    <Typography>
                      Choose
                      <Typography sx={{ px: 1 }}> <strong className='uppercase'>two</strong> </Typography>
                      corrent answers
                    </Typography>
                  </Box>
                  <Box sx={{ p: 1 }}>
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap" sx={{ py: 1 }}>
                      {/************************* [19-20] *************************/}
                      <Paper elevation={0}>
                        <Typography>
                          <strong> 19 - 20 </strong>
                          <Typography sx={{ px: 1 }}> Which </Typography>
                          <strong className='uppercase'> two </strong>
                          <Typography sx={{ pl: 1 }}> of the following statements are made in the text about the Amsterdam bike-sharing scheme of 1999? </Typography>
                        </Typography>
                      </Paper>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <QMultiCheckBox options={q19_20} />
                        </Stack>
                      </Paper>
                    </Stack>
                    {/************************* [21-22] *************************/}
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap">
                      <Paper elevation={0}>
                        <Typography>
                          <strong> 21 - 22 </strong>
                          <Typography sx={{ px: 1 }}> Which </Typography>
                          <strong className='uppercase'> two </strong>
                          <Typography sx={{ pl: 1 }}> of the following statements are made in the text about Amsterdam today? </Typography>
                        </Typography>
                      </Paper>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <QMultiCheckBox options={q21_22} />
                        </Stack>
                      </Paper>
                    </Stack>
                  </Box>

                  <Box>
                    <Typography>
                      <h3> Questions 23 - 26 </h3>
                    </Typography>
                    <Typography sx={{ my: 1.5 }}>
                      Complete the notes below.
                    </Typography>
                    <Typography className='italic'>
                      Choose
                      <Typography sx={{ px: 1 }}> <strong className='uppercase'> ONE WORD ONLY </strong> </Typography>
                      from the passage for each answer.
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 3 }}>
                    <Typography align="left" sx={{ py: 2 }}>
                      <h3>The first urban bike-sharing scheme</h3>
                    </Typography>

                    <section>
                      {/************************* [23-24-25] *************************/}
                      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                        <Paper elevation={0}>
                          <Stack direction="row" alignItems="center" sx={{ flexWrap: 'wrap' }}>
                            <Typography sx={{ pr: 1, py: 1 }}>
                              The first bike-sharing scheme was the idea of the Dutch group Provo. The people who belonged to this group were
                            </Typography>
                            <QTextInput number="23" />
                            <Typography sx={{ px: 1, py: 1 }}>
                              They were concerned about damage to the environment and about
                            </Typography>
                            <QTextInput number="24" />
                            <Typography sx={{ pr: 1, py: 1 }}>
                              and believed that the bike-sharing scheme would draw attention to these issues. As well as painting some bikes white, they handed out
                            </Typography>
                            <QTextInput number="25" />
                            <Typography sx={{ pl: 1, py: 1 }}>
                              that condemned the use of cars.
                            </Typography>
                          </Stack>
                        </Paper>
                      </Stack>

                      {/************************* [26] *************************/}
                      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                        <Paper elevation={0}>
                          <Stack direction="row" alignItems="center" sx={{ flexWrap: 'wrap' }}>
                            <Typography sx={{ pr: 1, py: 1 }}>
                              However, the scheme was not a great success: almost as quickly as Provo left the bikes around the city, the
                            </Typography>
                            <QTextInput number="26" />
                            <Typography sx={{ pl: 1, py: 1 }}>
                              Took them away. According to Schimmelpennink, the scheme was intended to be symbolic. The idea was to get people thinking about the issues.
                            </Typography>
                          </Stack>
                        </Paper>
                      </Stack>
                    </section>
                  </Box>

                </>
              }

              {part === 3 &&
                <>
                  <Box>
                    <Typography>
                      <h3> Questions 27 - 31 </h3>
                    </Typography>
                    {/* <Typography>
                      The text has seven paragraphs,
                      <Typography sx={{ px: 1 }}> <strong className='uppercase'> A-G </strong>. </Typography>
                      Which paragraph contains the following information?
                    </Typography> */}
                    <div> DROP-DOWN </div>
                  </Box>

                  <Box>
                    <Box sx={{ py: 1 }}>
                      <Typography>
                        <h3> Questions 32 - 35 </h3>
                      </Typography>
                      <Typography sx={{ my: 1.5 }}>
                        Do the following statements agree with the information given in Reading Passage 1?
                      </Typography>
                      <Typography sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        Choose
                        <Typography sx={{ px: 1 }}> <strong className='uppercase'> true </strong> </Typography>
                        if the statement agrees with the information,
                      </Typography>
                      <Typography sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        Choose
                        <Typography sx={{ px: 1 }}> <strong className='uppercase'> false </strong> </Typography>
                        if the statement contradicts the information, or
                        <Typography sx={{ px: 1 }}> <strong className='uppercase'> not given </strong> </Typography>
                        if there is no information on this
                      </Typography>
                    </Box>

                    <section>
                      <Box sx={{ p: 1 }}>
                        {/************************* [32] *************************/}
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap" sx={{ py: 1 }}>
                          <Paper elevation={0}>
                            <Typography>
                              <strong> 32 </strong>
                              <Typography sx={{ px: 1 }}>
                                One reason for high staff turnover in the hospitality industry is poor morale.
                              </Typography>
                            </Typography>
                          </Paper>
                          <Paper elevation={0}>
                            <Stack direction="row" alignItems="center">
                              <QRadio options={q9_13} />
                            </Stack>
                          </Paper>
                        </Stack>
                        {/************************* [33] *************************/}
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap" sx={{ py: 1 }}>
                          <Paper elevation={0}>
                            <Typography>
                              <strong> 33 </strong>
                              <Typography sx={{ px: 1 }}>
                                Research has shown that staff have a tendency to dislike their workplace.
                              </Typography>
                            </Typography>
                          </Paper>
                          <Paper elevation={0}>
                            <Stack direction="row" alignItems="center">
                              <QRadio options={q9_13} />
                            </Stack>
                          </Paper>
                        </Stack>
                        {/************************* [34] *************************/}
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap" sx={{ py: 1 }}>
                          <Paper elevation={0}>
                            <Typography>
                              <strong> 34 </strong>
                              <Typography sx={{ px: 1 }}>
                                An improvement in working conditions and job security makes staff satisfied with their jobs.
                              </Typography>
                            </Typography>
                          </Paper>
                          <Paper elevation={0}>
                            <Stack direction="row" alignItems="center">
                              <QRadio options={q9_13} />
                            </Stack>
                          </Paper>
                        </Stack>
                        {/************************* [35] *************************/}
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap" sx={{ py: 1 }}>
                          <Paper elevation={0}>
                            <Typography>
                              <strong> 35 </strong>
                              <Typography sx={{ px: 1 }}>
                                Staff should be allowed to choose when they take breaks during the working day.
                              </Typography>
                            </Typography>
                          </Paper>
                          <Paper elevation={0}>
                            <Stack direction="row" alignItems="center">
                              <QRadio options={q9_13} />
                            </Stack>
                          </Paper>
                        </Stack>
                      </Box>
                    </section>
                  </Box>

                  <Box>
                    <Typography>
                      <h3> Questions 36 - 40 </h3>
                    </Typography>
                    <Typography sx={{ my: 1.5 }}>
                      Complete the notes below.
                    </Typography>
                    <Typography className='italic'>
                      Choose
                      <Typography sx={{ px: 1 }}> <strong className='uppercase'> ONE WORD ONLY </strong> </Typography>
                      from the passage for each answer.
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 3 }}>
                    <Typography align="left" sx={{ py: 2 }}>
                      <h3>Fun at work</h3>
                    </Typography>

                    <section>
                      {/************************* [36-37-38-39-40] *************************/}
                      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                        <Paper elevation={0}>
                          <Stack direction="row" alignItems="center" sx={{ flexWrap: 'wrap' }}>
                            <Typography sx={{ pr: 1, py: 1 }}>
                              Tews, Michel and Stafford carried out research on staff in an American chain of
                            </Typography>
                            <QTextInput number="36" />
                            <Typography sx={{ px: 1, py: 1 }}>
                              They discovered that activities designed for staff to have fun improved their
                            </Typography>
                            <QTextInput number="37" />
                            <Typography sx={{ pr: 1, py: 1 }}>
                              , and that management involvement led to lower staff
                            </Typography>
                            <QTextInput number="38" />
                            <Typography sx={{ px: 1, py: 1 }}>
                              They also found that the activities needed to fit with both the company’s
                            </Typography>
                            <QTextInput number="39" />
                            <Typography sx={{ px: 1, py: 1 }}>
                              and the
                            </Typography>
                            <QTextInput number="40" />
                            <Typography sx={{ pr: 1, py: 1 }}>
                              Of the staff. A balance was required between a degree of freedom and maintaining work standards.
                            </Typography>
                          </Stack>
                        </Paper>
                      </Stack>
                    </section>
                  </Box>
                </>
              }
            </div>
          }
        />
        <div>
          <button onClick={() => setPart(1)}> 1 </button>
          <button onClick={() => setPart(2)}> 2 </button>
          <button onClick={() => setPart(3)}> 3 </button>
        </div>
      </div>

    </>
  );
};

export default index;