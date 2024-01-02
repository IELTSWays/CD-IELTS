import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';
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

const IELTSReading = () => {
  const { t } = useTranslation();
  const [part, setPart] = useState(4)

  const fontSize = useAppSelector((state) => state.user.fontSize)

  const parts = [
    { title: "Part 1", description: "Listen and answer question 1-13." },
    { title: "Part 2", description: "Listen and answer question 11-20." },
    { title: "Part 3", description: "Listen and answer question 21-30." },
    { title: "Part 4", description: "Listen and answer question 31-40." },
  ]

  const q9_13 = [
    { text: "TRUE", value: "P01", selected: false },
    { text: "FALSE", value: "P02", selected: false },
    { text: "NOT GIVEN", value: "P03", selected: false },
  ];

  const q13_14 = [
    { text: t('00037'), value: "P06", selected: false },
    { text: t('00038'), value: "P07", selected: false },
    { text: t('00039'), value: "P08", selected: false },
    { text: t('00040'), value: "P09", selected: false },
    { text: t('00041'), value: "P10", selected: false }
  ];

  const q15_20 = [
    { text: t('00043'), value: "P01", selected: false },
    { text: t('00044'), value: "P02", selected: false },
    { text: t('00045'), value: "P03", selected: false },
  ];

  const q21 = [
    { text: t('00052'), value: "P01", selected: false },
    { text: t('00053'), value: "P02", selected: false },
    { text: t('00054'), value: "P03", selected: false },
  ];

  const q22 = [
    { text: t('00056'), value: "P01", selected: false },
    { text: t('00057'), value: "P02", selected: false },
    { text: t('00058'), value: "P03", selected: false },
  ];

  const q23 = [
    { text: t('00060'), value: "P01", selected: false },
    { text: t('00061'), value: "P02", selected: false },
    { text: t('00062'), value: "P03", selected: false },
  ];

  const q24 = [
    { text: t('00064'), value: "P01", selected: false },
    { text: t('00065'), value: "P02", selected: false },
    { text: t('00066'), value: "P03", selected: false },
  ];

  const q25 = [
    { text: t('00068'), value: "P01", selected: false },
    { text: t('00069'), value: "P02", selected: false },
    { text: t('00070'), value: "P03", selected: false },
  ];

  return (
    <>
      <Title title={parts[part - 1].title} description={parts[part - 1].description} />

      <div className={`ielts-contaner ${fontSize}`} id="ielts-list-text-input">

        <SplitView
          left=
          {
            <div className="left ielts-scrollbar">
              <Typography sx={{ mb: 2.5 }}>
                <h3>
                  <strong>
                    THE IMPORTANCE OF CHILDREN’S PLAY
                  </strong>
                </h3>
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                Brick by brick, six-year-old Alice is building a magical kingdom. Imagining fairy-tale turrets and fire-breathing dragons, wicked witches and gallant heroes, she’s creating an enchanting world. Although she isn’t aware of it, this fantasy is helping her take her first steps towards her capacity for creativity and so it will have important repercussions in her adult life.
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                Minutes later, Alice has abandoned the kingdom in favour of playing schools with her younger brother. When she bosses him around as his ‘teacher’, she’s practising how to regulate her emotions through pretence. Later on, when they tire of this and settle down with a board game, she’s learning about the need to follow rules and take turns with a partner.
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                ‘Play in all its rich variety is one of the highest achievements of the human species,’ says Dr David Whitebread from the Faculty of Education at the University of Cambridge, UK. ‘It underpins how we develop as intellectual, problem-solving adults and is crucial to our success as a highly adaptable species.’
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                Recognizing the importance of play is not new: over two millennia ago, the Greek philosopher Plato extolled its virtues as a means of developing skills for adult life, and ideas about play-based learning have been developing since the 19th century.
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                But we live in changing times, and Whitebread is mindful of a worldwide decline in play, pointing out that over half the people in the world now live in cities. ‘The opportunities for free play, which I experienced almost every day of my childhood, are becoming increasingly scarce,’ he says. Outdoor play is curtailed by perceptions of risk to do with traffic, as well as parents’ increased wish to protect their children from being the victims of crime, and by the emphasis on ‘earlier is better’ which is leading to greater competition in academic learning and schools.
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                International bodies like the United Nations and the European Union have begun to develop policies concerned with children’s right to play, and to consider implications for leisure facilities and educational programmes. But what they often lack is the evidence to base policies on.
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                ‘The type of play we are interested in is child-initiated, spontaneous and unpredictable – but, as soon as you ask a five-year-old “to play”, then you as the researcher have intervened,’ explains Dr Sara Baker. ‘And we want to know what the long-term impact of play is. It’s a real challenge.’
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                Dr Jenny Gibson agrees, pointing out that although some of the steps in the puzzle of how and why play is important have been looked at, there is very little data on the impact it has on the child’s later life.
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                Now, thanks to the university’s new Centre for Research on Play in Education, Development and Learning (PEDAL), Whitebread, Baker, Gibson and a team of researchers hope to provide evidence on the role played by play in how a child develops.
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                ‘A strong possibility is that play supports the early development of children’s self-control,’ explains Baker. ‘This is our ability to develop awareness of our own thinking progresses – it influences how effectively we go about undertaking challenging activities.’
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                In a study carried out by Baker with toddlers and young pre-schoolers, she found that children with greater self-control solved problems more quickly when exploring an unfamiliar set-up requiring scientific reasoning. ‘This sort of evidence makes up think that giving children the chance to play will make them more successful problem-solvers in the long run.’
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                If playful experiences do facilitate this aspect of development, say the researchers, it could be extremely significant for educational practices, because the ability to self-regulate has been shown to be a key predictor of academic performance.
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                Gibson adds: ‘Playful behavior is also an important indicator of healthy social and emotional development. In my previous research, I investigated how observing children at play can give us important clues about their well-being and can even be useful in the diagnosis of neurodevelopmental disorders like autism.’
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                Whitebread’s recent research has involved developing a play-based approach to supporting children’s writing. ‘Many primary school children find writing difficult, but we showed in a previous study that a playful stimulus was far more effective than an instructional one.’ Children wrote longer and better-structured stories when they first played with dolls representing characters in the story. In the latest study, children first created their story with Lego*, with similar results. ‘Many teachers commented that they had always previously had children saying they didn’t know what to write about. With the Lego building, however, not a single child said this through the whole year of the project.’
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                Whitebread, who directs PEDAL, trained as a primary school teacher in the early 1970s, when, as he describes, ‘the teaching of young children was largely a quiet backwater, untroubled by any serious intellectual debate or controversy.’ Now, the landscape is very different, with hotly debated topics such as school starting age.
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                ‘Somehow the importance of play has been lost in recent decades. It’s regarded as something trivial, or even as something negative that contrasts with “work”. Let’s not lose sight of its benefits, and the fundamental contributions it makes to human achievements in the arts, sciences and technology. Let’s make sure children have a rich diet of play experiences.’
              </Typography>
              <Typography sx={{ mb: 1.5 }} className="ielts-paragraph">
                * Lego: coloured plastic building blocks and other pieces that can be joined together
              </Typography>
            </div>
          }
          right=
          {
            <div className="right ielts-scrollbar">
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
            </div>
          }
        />
      </div>

    </>
  );
};

export default IELTSReading;