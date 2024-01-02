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
import Title from '@/components/IELTS/Title';
import QRadio from '@/components/IELTS/QRadio';
import QTextInput from '@/components/IELTS/QTextInput';
import QMultiCheckBox from '@/components/IELTS/QMultiCheckBox';
import DND from '@/pages/IELTS/14/01/DragDrop';

const IELTSListening = () => {
  const { t } = useTranslation();
  const [part, setPart] = useState(3)

  const fontSize = useAppSelector((state) => state.user.fontSize)

  const parts = [
    { title: "Part 1", description: "Listen and answer question 1-13." },
    { title: "Part 2", description: "Listen and answer question 11-20." },
    { title: "Part 3", description: "Listen and answer question 21-30." },
    { title: "Part 4", description: "Listen and answer question 31-40." },
  ]

  const q11_12 = [
    { text: t('00030'), value: "P01", selected: false },
    { text: t('00031'), value: "P02", selected: false },
    { text: t('00032'), value: "P03", selected: false },
    { text: t('00033'), value: "P04", selected: false },
    { text: t('00034'), value: "P05", selected: false }
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

      <div className={`ielts-contaner full-w ${fontSize}`} id="ielts-list-text-input">

        {part === 1 &&
          <>
            <Box>
              <Typography>
                <h3> Questions 1 - 10 </h3>
              </Typography>
              <Typography sx={{ my: 1.5 }}>
                Complete the notes.
              </Typography>
              <Typography className='italic'>
                Write
                <Typography sx={{ px: 1 }}> <strong className='uppercase'> one word and/or a number </strong> </Typography>
                for each answer.
              </Typography>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Typography align="center" sx={{ py: 2 }}>
                <h3 className='uppercase'>CRIME REPORT FORM</h3>
              </Typography>
              <div>
                <Box sx={{ p: 1 }}>
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                    <Paper elevation={0} sx={{ width: '200px' }}>
                      <Typography><strong>Type of crime:</strong></Typography>
                    </Paper>
                    <Paper elevation={0}>theft</Paper>
                  </Stack>
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                    <Paper elevation={0}>
                      <Typography><strong>Personal information</strong></Typography>
                    </Paper>
                  </Stack>
                </Box>
                <Box sx={{ p: 1 }}>
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                    <Paper elevation={0} sx={{ width: '200px' }}>
                      <Typography className='italic'>Example</Typography>
                    </Paper>
                    <Paper elevation={0}></Paper>
                  </Stack>
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center' }}>
                    <Paper elevation={0} sx={{ width: '200px' }}>
                      <Typography>Name:</Typography>
                    </Paper>
                    <Paper elevation={0}>
                      <Stack direction="row" alignItems="center">
                        <Typography sx={{ pr: 1 }}>Louise </Typography>
                        <QTextInput init="Taylor" disabled="true" />
                      </Stack>
                    </Paper>
                  </Stack>
                </Box>
                <Box sx={{ p: 1 }}>
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                    <Paper elevation={0} sx={{ width: '200px' }}>
                      <Typography>{t('00001')}</Typography>
                    </Paper>
                    <Paper elevation={0}>
                      <Stack direction="row" alignItems="center">
                        <QTextInput number="1" />
                      </Stack>
                    </Paper>
                  </Stack>
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                    <Paper elevation={0} sx={{ width: '200px' }}>
                      <Typography>{t('00002')}</Typography>
                    </Paper>
                    <Paper elevation={0}>
                      <Paper elevation={0}>
                        <Typography>{t('00003')}</Typography>
                      </Paper>
                    </Paper>
                  </Stack>
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                    <Paper elevation={0} sx={{ width: '200px' }}>
                      <Typography>{t('00004')}</Typography>
                    </Paper>
                    <Paper elevation={0}>
                      <Paper elevation={0}>
                        <Typography>{t('00005')}</Typography>
                      </Paper>
                    </Paper>
                  </Stack>
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                    <Paper elevation={0} sx={{ width: '200px' }}>
                      <Typography>{t('00006')}</Typography>
                    </Paper>
                    <Paper elevation={0}>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <Typography sx={{ pr: 1 }}> {t('00007')} </Typography>
                          <Typography sx={{ pr: 1 }}> ({t('00008')} </Typography>
                          <QTextInput number="2" />)
                        </Stack>
                      </Paper>
                    </Paper>
                  </Stack>
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                    <Paper elevation={0} sx={{ width: '200px' }}>
                      <Typography>{t('00009')}</Typography>
                    </Paper>
                    <Paper elevation={0}>
                      <Paper elevation={0}>
                        <Typography>{t('00010')}</Typography>
                      </Paper>
                    </Paper>
                  </Stack>

                  <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                    <Paper elevation={0} sx={{ width: '200px' }}>
                      <Typography>{t('00011')}</Typography>
                    </Paper>
                    <Paper elevation={0}>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <QTextInput number="3" />
                          <Typography sx={{ pl: 1 }}> {t('00012')} </Typography>
                        </Stack>
                      </Paper>
                    </Paper>
                  </Stack>
                </Box>
                <Box sx={{ p: 1 }}>
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                    <Paper elevation={0}>
                      <Typography><strong>{t('00013')} </strong></Typography>
                    </Paper>
                    <Paper elevation={0}></Paper>
                  </Stack>
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                    <Paper elevation={0} sx={{ width: '200px' }}>
                      <Typography>{t('00014')}</Typography>
                    </Paper>
                    <Paper elevation={0}>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <Typography sx={{ pr: 1 }}> – </Typography>
                          <Typography sx={{ pr: 1 }}> {t('00015')} </Typography>
                          <Typography sx={{ pr: 1 }}>£</Typography> <QTextInput number="4" />
                        </Stack>
                      </Paper>
                    </Paper>
                  </Stack>

                  <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                    <Paper elevation={0} sx={{ width: '200px' }}>
                    </Paper>
                    <Paper elevation={0}>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <Typography sx={{ pr: 1 }}> – </Typography>
                          <QTextInput number="5" />
                        </Stack>
                      </Paper>
                    </Paper>
                  </Stack>
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                    <Paper elevation={0} sx={{ width: '200px' }}>
                      <Typography> {t('00016')} </Typography>
                    </Paper>
                    <Paper elevation={0}>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <QTextInput number="6" />
                        </Stack>
                      </Paper>
                    </Paper>
                  </Stack>
                </Box>
                <Box sx={{ p: 1 }}>
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                    <Paper elevation={0}>
                      <Typography><strong>{t('00017')}</strong></Typography>
                    </Paper>
                    <Paper elevation={0}></Paper>
                  </Stack>

                  <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                    <Paper elevation={0} sx={{ width: '200px' }}>
                      <Typography>{t('00018')}</Typography>
                    </Paper>
                    <Paper elevation={0}>
                      <Stack direction="row" alignItems="center">
                        <Typography sx={{ pr: 1 }}> {t('00019')} </Typography>
                        <QTextInput number="7" />
                        <Typography sx={{ pl: 1 }}> {t('00020')} </Typography>
                      </Stack>
                    </Paper>
                  </Stack>

                  <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                    <Paper elevation={0} sx={{ width: '200px' }}>
                      <Typography>{t('00021')}</Typography>
                    </Paper>
                    <Paper elevation={0}>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <Typography sx={{ pr: 1 }}> – </Typography>
                          <Typography sx={{ pr: 1 }}> {t('00022')} </Typography>
                          <QTextInput number="8" />
                          <Typography sx={{ pl: 1 }}> {t('00023')} </Typography>
                        </Stack>
                      </Paper>
                    </Paper>
                  </Stack>

                  <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                    <Paper elevation={0} sx={{ width: '200px' }}>
                    </Paper>
                    <Paper elevation={0}>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <Typography sx={{ pr: 1 }}> – </Typography>
                          <Typography sx={{ pr: 1 }}> {t('00024')} </Typography>
                        </Stack>
                      </Paper>
                    </Paper>
                  </Stack>

                  <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                    <Paper elevation={0} sx={{ width: '200px' }}>
                    </Paper>
                    <Paper elevation={0}>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <Typography sx={{ pr: 1 }}> – </Typography>
                          <Typography sx={{ pr: 1 }}> {t('00025')} </Typography>
                          <QTextInput number="9" />
                          <Typography sx={{ pl: 1 }}> {t('00026')} </Typography>
                        </Stack>
                      </Paper>
                    </Paper>
                  </Stack>
                </Box>

                <Box sx={{ p: 1 }}>
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                    <Paper elevation={0}>
                      <Typography><strong>{t('00027')}</strong></Typography>
                    </Paper>
                    <Paper elevation={0}></Paper>
                  </Stack>

                  <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                    <Paper elevation={0} sx={{ width: '200px' }}>
                    </Paper>
                    <Paper elevation={0}>
                      <QTextInput number="10" />
                    </Paper>
                  </Stack>
                </Box>
              </div>
            </Box>
          </>
        }

        {part === 2 &&
          <>
            <Box>
              <Typography>
                <h3> Questions 11 - 14 </h3>
              </Typography>
              <Typography className='italic'>
                Choose
                <Typography sx={{ px: 1 }}> <strong className='uppercase'> two </strong> </Typography>
                correct answer.
              </Typography>
            </Box>
            <Box sx={{ mt: 3 }}>
              <div>
                <Box sx={{ p: 1 }}>
                  {/************************* [11-12] *************************/}
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap" sx={{ py: 1 }}>
                    <Paper elevation={0}>
                      <Typography>
                        <strong> 11 - 12 </strong>
                        <Typography sx={{ px: 1 }}> {t('00028')} </Typography>
                        <strong className='uppercase'> two </strong>
                        <Typography sx={{ pl: 1 }}> {t('00029')} </Typography>
                      </Typography>
                    </Paper>
                    <Paper elevation={0}>
                      <Stack direction="row" alignItems="center">
                        <QMultiCheckBox options={q11_12} />
                      </Stack>
                    </Paper>
                  </Stack>
                  {/************************* [13-14] *************************/}
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap">
                    <Paper elevation={0}>
                      <Typography>
                        <strong> 13 - 14 </strong>
                        <Typography sx={{ px: 1 }}> {t('00035')} </Typography>
                        <strong className='uppercase'> two </strong>
                        <Typography sx={{ pl: 1 }}> {t('00036')} </Typography>
                      </Typography>
                    </Paper>
                    <Paper elevation={0}>
                      <Stack direction="row" alignItems="center">
                        <QMultiCheckBox options={q13_14} />
                      </Stack>
                    </Paper>
                  </Stack>
                </Box>
              </div>
            </Box>

            <Box>
              <Typography>
                <h3> Questions 15 - 20 </h3>
              </Typography>
              <Typography className='italic'>
                Choose the correct answer.
              </Typography>
            </Box>
            <Box sx={{ mt: 3 }}>
              <div>
                <Box sx={{ p: 1 }}>
                  {/************************* [15] *************************/}
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap" sx={{ py: 1 }}>
                    <Paper elevation={0}>
                      <Typography>
                        <strong> 15 </strong>
                        <Typography sx={{ px: 1 }}> {t('00042')} </Typography>
                      </Typography>
                    </Paper>
                    <Paper elevation={0}>
                      <Stack direction="row" alignItems="center">
                        <QRadio options={q15_20} />
                      </Stack>
                    </Paper>
                  </Stack>
                  {/************************* [16] *************************/}
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap" sx={{ py: 1 }}>
                    <Paper elevation={0}>
                      <Typography>
                        <strong> 16 </strong>
                        <Typography sx={{ px: 1 }}> {t('00046')} </Typography>
                      </Typography>
                    </Paper>
                    <Paper elevation={0}>
                      <Stack direction="row" alignItems="center">
                        <QRadio options={q15_20} />
                      </Stack>
                    </Paper>
                  </Stack>
                  {/************************* [17] *************************/}
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap" sx={{ py: 1 }}>
                    <Paper elevation={0}>
                      <Typography>
                        <strong> 17 </strong>
                        <Typography sx={{ px: 1 }}> {t('00047')} </Typography>
                      </Typography>
                    </Paper>
                    <Paper elevation={0}>
                      <Stack direction="row" alignItems="center">
                        <QRadio options={q15_20} />
                      </Stack>
                    </Paper>
                  </Stack>
                  {/************************* [18] *************************/}
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap" sx={{ py: 1 }}>
                    <Paper elevation={0}>
                      <Typography>
                        <strong> 18 </strong>
                        <Typography sx={{ px: 1 }}> {t('00048')} </Typography>
                      </Typography>
                    </Paper>
                    <Paper elevation={0}>
                      <Stack direction="row" alignItems="center">
                        <QRadio options={q15_20} />
                      </Stack>
                    </Paper>
                  </Stack>
                  {/************************* [19] *************************/}
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap" sx={{ py: 1 }}>
                    <Paper elevation={0}>
                      <Typography>
                        <strong> 19 </strong>
                        <Typography sx={{ px: 1 }}> {t('00049')} </Typography>
                      </Typography>
                    </Paper>
                    <Paper elevation={0}>
                      <Stack direction="row" alignItems="center">
                        <QRadio options={q15_20} />
                      </Stack>
                    </Paper>
                  </Stack>
                  {/************************* [20] *************************/}
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap" sx={{ py: 1 }}>
                    <Paper elevation={0}>
                      <Typography>
                        <strong> 20 </strong>
                        <Typography sx={{ px: 1 }}> {t('00050')} </Typography>
                      </Typography>
                    </Paper>
                    <Paper elevation={0}>
                      <Stack direction="row" alignItems="center">
                        <QRadio options={q15_20} />
                      </Stack>
                    </Paper>
                  </Stack>
                </Box>
              </div>
            </Box>
          </>
        }

        {part === 3 &&
          <>
            <Box>
              <Typography>
                <h3> Questions 21 - 25 </h3>
              </Typography>
              <Typography className='italic'>
                Choose the correct answer.
              </Typography>
            </Box>
            <Box sx={{ mt: 3 }}>
              <div>
                <Box sx={{ p: 1 }}>
                  {/************************* [21] *************************/}
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap" sx={{ py: 1 }}>
                    <Paper elevation={0}>
                      <Typography>
                        <strong> 21 </strong>
                        <Typography sx={{ px: 1 }}> {t('00051')} </Typography>
                      </Typography>
                    </Paper>
                    <Paper elevation={0}>
                      <Stack direction="row" alignItems="center">
                        <QRadio options={q21} />
                      </Stack>
                    </Paper>
                  </Stack>
                  {/************************* [22] *************************/}
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap" sx={{ py: 1 }}>
                    <Paper elevation={0}>
                      <Typography>
                        <strong> 22 </strong>
                        <Typography sx={{ px: 1 }}> {t('00055')} </Typography>
                      </Typography>
                    </Paper>
                    <Paper elevation={0}>
                      <Stack direction="row" alignItems="center">
                        <QRadio options={q22} />
                      </Stack>
                    </Paper>
                  </Stack>
                  {/************************* [23] *************************/}
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap" sx={{ py: 1 }}>
                    <Paper elevation={0}>
                      <Typography>
                        <strong> 23 </strong>
                        <Typography sx={{ px: 1 }}> {t('00059')} </Typography>
                      </Typography>
                    </Paper>
                    <Paper elevation={0}>
                      <Stack direction="row" alignItems="center">
                        <QRadio options={q23} />
                      </Stack>
                    </Paper>
                  </Stack>
                  {/************************* [24] *************************/}
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap" sx={{ py: 1 }}>
                    <Paper elevation={0}>
                      <Typography>
                        <strong> 24 </strong>
                        <Typography sx={{ px: 1 }}> {t('00063')} </Typography>
                      </Typography>
                    </Paper>
                    <Paper elevation={0}>
                      <Stack direction="row" alignItems="center">
                        <QRadio options={q24} />
                      </Stack>
                    </Paper>
                  </Stack>
                  {/************************* [25] *************************/}
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap" sx={{ py: 1 }}>
                    <Paper elevation={0}>
                      <Typography>
                        <strong> 25 </strong>
                        <Typography sx={{ px: 1 }}> {t('00067')} </Typography>
                      </Typography>
                    </Paper>
                    <Paper elevation={0}>
                      <Stack direction="row" alignItems="center">
                        <QRadio options={q25} />
                      </Stack>
                    </Paper>
                  </Stack>
                </Box>
              </div>
            </Box>
            <Box>
              <Typography>
                <h3> Questions 26 - 30 </h3>
              </Typography>
              <Typography className='italic'>
                Choose the correct answer.
              </Typography>
            </Box>
            <Box sx={{ mt: 3 }}>
              <div>
                <Box sx={{ p: 1 }}>
                  {/************************* [26-30] *************************/}
                  <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap" sx={{ py: 1 }}>
                    <Paper elevation={0}>
                      <Typography>
                        <strong> 26-30 </strong>
                        <Typography sx={{ px: 1 }}> {t('00071')} </Typography>
                      </Typography>
                    </Paper>
                    <Paper elevation={0}>
                      <Stack direction="row" alignItems="center">
                        DRAG-DROP
                      </Stack>
                    </Paper>
                  </Stack>
                </Box>
              </div>
            </Box>
          </>
        }

        {part === 4 &&
          <>
            <Box>
              <Typography>
                <h3> Questions 31 - 40 </h3>
              </Typography>
              <Typography sx={{ my: 1.5 }}>
                Complete the notes below.
              </Typography>
              <Typography className='italic'>
                Write
                <Typography sx={{ px: 1 }}> <strong className='uppercase'> ONE WORD ONLY </strong> </Typography>
                for each answer.
              </Typography>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Typography align="center" sx={{ py: 2 }}>
                <h3 className='uppercase'>CRIME REPORT FORM</h3>
              </Typography>
              <div>

                <section>
                  <Box sx={{ px: 1 }}>
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                      <Paper elevation={0}>
                        <Typography><strong>Introduction</strong></Typography>
                      </Paper>
                    </Stack>
                  </Box>

                  <Box sx={{ px: 1 }}>
                    {/************************* [31] *************************/}
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <Typography sx={{ pr: 1 }}>
                            More energy required because of growth in population and
                          </Typography>
                          <QTextInput number="31" />
                        </Stack>
                      </Paper>
                    </Stack>
                  </Box>

                  <Box sx={{ px: 1 }}>
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <Typography sx={{ pr: 1 }}>
                            What’s needed:
                          </Typography>
                        </Stack>
                      </Paper>
                    </Stack>
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', }}>
                      <Paper elevation={0} sx={{ width: '15px' }}>
                        <Typography>●</Typography>
                      </Paper>
                      <Paper elevation={0}>
                        <Paper elevation={0}>
                          <Typography>renewable energy sources</Typography>
                        </Paper>
                      </Paper>
                    </Stack>
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', }}>
                      <Paper elevation={0} sx={{ width: '15px' }}>
                        <Typography>●</Typography>
                      </Paper>
                      <Paper elevation={0}>
                        <Paper elevation={0}>
                          <Typography>methods that won’t create pollution</Typography>
                        </Paper>
                      </Paper>
                    </Stack>
                  </Box>
                </section>

                <section>
                  <Box sx={{ px: 1 }}>
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                      <Paper elevation={0}>
                        <Typography><strong>Wave energy</strong></Typography>
                      </Paper>
                    </Stack>
                  </Box>

                  <Box sx={{ px: 1 }}>
                    {/************************* [32] *************************/}
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <Typography sx={{ pr: 1 }}>
                            Advantage: waves provide a
                          </Typography>
                          <QTextInput number="32" />
                          <Typography sx={{ pl: 1 }}>
                            source of renewable energy
                          </Typography>
                        </Stack>
                      </Paper>
                    </Stack>
                  </Box>

                  <Box sx={{ px: 1 }}>
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <Typography>
                            Electricity can be generated using offshore or onshore systems
                          </Typography>
                        </Stack>
                      </Paper>
                    </Stack>
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <Typography>
                            Onshore systems may use a reservoir
                          </Typography>
                        </Stack>
                      </Paper>
                    </Stack>

                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <Typography>
                            Problems:
                          </Typography>
                        </Stack>
                      </Paper>
                    </Stack>

                    {/************************* [33] *************************/}
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', }}>
                      <Paper elevation={0} sx={{ width: '15px' }}>
                        <Typography>●</Typography>
                      </Paper>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <Typography sx={{ pr: 1 }}>
                            waves can move in any
                          </Typography>
                          <QTextInput number="33" />
                        </Stack>
                      </Paper>
                    </Stack>

                    {/************************* [34] *************************/}
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', mt: 1 }}>
                      <Paper elevation={0} sx={{ width: '15px' }}>
                        <Typography>●</Typography>
                      </Paper>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <Typography sx={{ pr: 1 }}>
                            movement of sand, etc. on the
                          </Typography>
                          <QTextInput number="34" />
                          <Typography sx={{ pl: 1 }}>
                            of the ocean may be affected
                          </Typography>
                        </Stack>
                      </Paper>
                    </Stack>
                  </Box>
                </section>

                <section>
                  <Box sx={{ px: 1 }}>
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                      <Paper elevation={0}>
                        <Typography><strong>Tidal energy</strong></Typography>
                      </Paper>
                    </Stack>
                  </Box>

                  <Box sx={{ px: 1 }}>
                    {/************************* [35] *************************/}
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <Typography sx={{ pr: 1 }}>
                            Tides are more
                          </Typography>
                          <QTextInput number="35" />
                          <Typography sx={{ pl: 1 }}>
                            than waves
                          </Typography>
                        </Stack>
                      </Paper>
                    </Stack>
                  </Box>

                  <Box sx={{ px: 1 }}>
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <Typography>
                            Planned tidal lagoon in Wales:
                          </Typography>
                        </Stack>
                      </Paper>
                    </Stack>

                    {/************************* [36] *************************/}
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', }}>
                      <Paper elevation={0} sx={{ width: '15px' }}>
                        <Typography>●</Typography>
                      </Paper>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <Typography sx={{ pr: 1 }}>
                            will be created in a
                          </Typography>
                          <QTextInput number="36" />
                          <Typography sx={{ pl: 1 }}>
                            at Swansea
                          </Typography>
                        </Stack>
                      </Paper>
                    </Stack>

                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', mt: 1 }}>
                      <Paper elevation={0} sx={{ width: '15px' }}>
                        <Typography>●</Typography>
                      </Paper>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <Typography sx={{ pr: 1 }}>
                            breakwater (dam) containing 16 turbines
                          </Typography>
                        </Stack>
                      </Paper>
                    </Stack>
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', mt: 1 }}>
                      <Paper elevation={0} sx={{ width: '15px' }}>
                        <Typography>●</Typography>
                      </Paper>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <Typography sx={{ pr: 1 }}>
                            rising tide forces water through turbines, generating electricity
                          </Typography>
                        </Stack>
                      </Paper>
                    </Stack>
                    {/************************* [37] *************************/}
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', }}>
                      <Paper elevation={0} sx={{ width: '15px' }}>
                        <Typography>●</Typography>
                      </Paper>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <Typography sx={{ pr: 1 }}>
                            stored water is released through
                          </Typography>
                          <QTextInput number="37" />
                          <Typography sx={{ pl: 1 }}>
                            at Swansea
                          </Typography>
                        </Stack>
                      </Paper>
                    </Stack>
                  </Box>
                </section>

                <section>
                  <Box sx={{ px: 1 }}>
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                      <Paper elevation={0}>
                        <Typography>Advantages:</Typography>
                      </Paper>
                    </Stack>
                  </Box>

                  <Box sx={{ px: 1 }}>
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <Typography >
                            not dependent on weather
                          </Typography>
                        </Stack>
                      </Paper>
                    </Stack>
                  </Box>

                  <Box sx={{ px: 1 }}>
                    {/************************* [38] *************************/}
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', }}>
                      <Paper elevation={0} sx={{ width: '15px' }}>
                        <Typography>●</Typography>
                      </Paper>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <Typography sx={{ pr: 1 }}>
                            no
                          </Typography>
                          <QTextInput number="38" />
                          <Typography sx={{ pl: 1 }}>
                            is required to make it work
                          </Typography>
                        </Stack>
                      </Paper>
                    </Stack>

                    {/************************* [39] *************************/}
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', mt: 1 }}>
                      <Paper elevation={0} sx={{ width: '15px' }}>
                        <Typography>●</Typography>
                      </Paper>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <Typography sx={{ pr: 1 }}>
                            likely to create a number of
                          </Typography>
                          <QTextInput number="39" />
                        </Stack>
                      </Paper>
                    </Stack>
                  </Box>
                </section>

                <section>
                  <Box sx={{ px: 1 }}>
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                      <Paper elevation={0}>
                        <Typography>Problem:</Typography>
                      </Paper>
                    </Stack>
                  </Box>

                  <Box sx={{ px: 1 }}>
                    {/************************* [40] *************************/}
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', }}>
                      <Paper elevation={0} sx={{ width: '15px' }}>
                        <Typography>●</Typography>
                      </Paper>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <Typography sx={{ pr: 1 }}>
                            may ham fish and birds, e.g. by affecting
                          </Typography>
                          <QTextInput number="40" />
                          <Typography sx={{ pl: 1 }}>
                            and building up silt
                          </Typography>
                        </Stack>
                      </Paper>
                    </Stack>
                  </Box>
                </section>

                <section>
                  <Box sx={{ px: 1 }}>
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                      <Paper elevation={0}>
                        <Typography>Ocean thermal energy conversion:</Typography>
                      </Paper>
                    </Stack>
                  </Box>

                  <Box sx={{ px: 1 }}>
                    {/************************* [40] *************************/}
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', }}>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <Typography sx={{ pr: 1 }}>
                            Uses a difference in temperature between the surface and lower levels                          </Typography>
                        </Stack>
                      </Paper>
                    </Stack>
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', }}>
                      <Paper elevation={0}>
                        <Stack direction="row" alignItems="center">
                          <Typography sx={{ pr: 1 }}>
                            Water brought to the surface in a pipe
                            </Typography>
                        </Stack>
                      </Paper>
                    </Stack>
                  </Box>
                </section>

              </div>
            </Box>
          </>
        }

      </div>
      {/* <div className="ielts-navigation">
        <div className="navigation-part active">
          <div className="navigation-part-title">
            <span>Part 1</span>
          </div>
          <div className="navigation-part-items">
            <div className="active">
              <HashLink smooth to={'#q-1'}>
                <span>1</span>
              </HashLink>
            </div>
            <div>
              <HashLink smooth to={'#q-2'}>
                <span>2</span>
              </HashLink>
            </div>
            <div>
              <span>3 </span>
            </div>
            <div> <span>4 </span> </div>
            <div> <span>5 </span> </div>
            <div> <span>6 </span> </div>
            <div> <span>7 </span> </div>
            <div> <span>8 </span> </div>
            <div> <span>9 </span> </div>
            <div> <span>10</span>  </div>
          </div>
        </div>

        <div className="navigation-part">
          <div className="navigation-part-title">
            <span>Part 2</span>
          </div>
          <div className="navigation-part-counter">
            <span> 0 </span> of <span> 13 </span>
          </div>
        </div>

        <div className="navigation-part">
          <div className="navigation-part-title">
            <span>Part 3</span>
          </div>
          <div className="navigation-part-counter">
            <span> 0 </span> of <span> 13 </span>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default IELTSListening;

