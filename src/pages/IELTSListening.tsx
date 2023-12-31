import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';
// mtu
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// mtu
// store
import { useAppSelector } from '@/store/hooks'
// store
import QRadio from '@/components/IELTS/QRadio';
import QMultiCheckBox from '@/components/IELTS/QMultiCheckBox';
import QTextInput from '@/components/IELTS/QTextInput';

const IELTSListening = () => {
  const { t } = useTranslation();

  const fontSize = useAppSelector((state) => state.user.fontSize)

  const options = [
    { text: "Priority 1", value: "P1", selected: false },
    { text: "Priority 2", value: "P2", selected: false },
    { text: "Priority 3", value: "P3", selected: false }
  ];

  const radionOptions = [
    { label: 'TRUE', value: 'TRUE' },
    { label: 'FALSE', value: 'FALSE' },
    { label: 'NOT GIVEN', value: 'NOT GIVEN' },
  ]

  return (
    <>
      <div className={`ielts-contaner full-w ${fontSize}`} id="ielts-list-text-input">
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
        <Box sx={{ border: 1, mt: 3 }}>
          <Typography align="center" sx={{ py: 2, borderBottom: 1 }}>
            <h3 className='uppercase'>CRIME REPORT FORM</h3>
          </Typography>
          <div>
            <Box sx={{ p: 1, borderBottom: 1 }}>
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
            <Box sx={{ p: 1, borderBottom: 1 }}>
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
            <Box sx={{ p: 1, borderBottom: 1 }}>
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
            <Box sx={{ p: 1, borderBottom: 1 }}>
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
            <Box sx={{ p: 1, borderBottom: 1 }}>
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
      </div>
      <div className="ielts-navigation">
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
      </div>
    </>
  );
};

export default IELTSListening;

