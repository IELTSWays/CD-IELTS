import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

// mtu
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import IconButton from '@mui/material/IconButton';
import SourceIcon from '@mui/icons-material/Source';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
// mtu

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCart } from '@/store/slices/user/userSlice'
// store

import useGetTeacherList from "@/services/Requests/useGetTeacherList";
import usePostCreateOrderNopay from '@/services/Requests/usePostCreateOrderNopay';
import usePostCreateOrderWriting from '@/services/Requests/usePostCreateOrderWriting';

import ListBooks from "@/components/ListBooks";
import SkillsGuide from "@/components/SkillsGuide";

import iconAI from '@/assets/images/artificial-intelligence.gif'

const Books = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  const [item, setItem] = useState<string | null>();
  const [marker, setMarker] = useState(1);
  const [mode, setMode] = useState('');

  const cart = useAppSelector((state) => state.user.cart)

  const handleItem = (
    _event: React.MouseEvent<HTMLElement>,
    newItem: string | null,
  ) => {
    setItem(newItem);
    cart;
  };

  const { data, refetch } = usePostCreateOrderNopay()
  const { refetch: refetchPostCreateOrderWriting } = usePostCreateOrderWriting({
    "name": cart["id"],
    "marker": parseFloat(marker),
    "type": cart["type"]
  })

  const changeModeHandler = (event: any) => {
    setMode(event.target.value);
    dispatch(setCart(Object.assign({}, cart, { 'mode': ((event.target as HTMLInputElement).value) })))
  };

  const createOrderHandler = () => {
    cart["id"].includes('W') ? refetchPostCreateOrderWriting() : refetch()
  }

  // useEffect(() => {
  //   data?.success && navigate('/orders')
  // }, [data]);

  const {
    data: dataGetTeacherList,
    isLoading: isLoadingGetTeacherList,
    refetch: refetchGetTeacherList
  } = useGetTeacherList()

  useEffect(() => {
    refetchGetTeacherList()
  }, []);

  return (
    <>
      <Grid sx={{ py: 3 }} container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item>
          <SkillsGuide />
        </Grid>
      </Grid>
      <Grid sx={{ py: 3, px: 2 }} container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <ListBooks onChange={handleItem} />
        </Grid>
      </Grid>

      {cart.id?.search('W') > 0 &&
        <Card variant="outlined" sx={{ py: 3, px: 2, my: 3, width: '100%' }} id="selectMarker">
          <Grid sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Avatar sx={{ bgcolor: "#E21D38" }}>
              <DriveFileRenameOutlineIcon />
            </Avatar>
            <Typography display="block" sx={{ px: 1, minWidth: '200px' }}> Select Marker </Typography>
          </Grid>
          <Grid sx={{ py: 3, px: 1 }} container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>

            <Box sx={{ width: '100%', display: 'flex', justifyContent: { xs: "center", sm: "flex-start" } }}>
              <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
                sx={{
                  mx: 1, cursor: 'pointer',
                }}
              >
                <Paper
                  variant="outlined"
                  id="9999"
                  // onClick={(e: any) => setMarker(e.currentTarget.id)}
                  // className={'9999' == marker && "active-box-marker"}
                  sx={{
                    my: 1,
                    mx: 'auto',
                    p: 2,
                    pointerEvents: 'none',
                    
                    // "&:hover": {
                    //   backgroundColor: "#f5faff",
                    //   borderColor: "#1976d2",
                    // },
                  }}
                >
                  <Stack spacing={2} direction="row" alignItems="center">
                    <Stack>
                      <Avatar src={iconAI}>W</Avatar>
                    </Stack>
                    <Stack sx={{ minWidth: '150px' }}>
                      <Typography>AI (Coming Soon) </Typography>
                      <Chip
                        label={`${(15000 * 10).toLocaleString()} IRR`}
                        variant="outlined"
                        sx={{
                          borderRadius: '7px',
                          minWidth: '120px',
                          height: '25px',
                          marginTop: '6px',
                          background: '#fff'
                        }}
                      />
                    </Stack>
                    <IconButton id="ai" onClick={(e: any) => console.log(e.currentTarget.id)}>
                      <ChevronRightIcon />
                    </IconButton>
                  </Stack>
                </Paper>
              </Stack>
            </Box>

            {isLoadingGetTeacherList && Array.from(Array(4)).map((_, index) => (
              <Stack
                key={index}
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
                sx={{
                  mx: 1, cursor: 'pointer',
                  width: { xs: "100%", sm: "unset" }
                }}
              >
                <Skeleton variant="rounded" sx={{ width: '296px', height: '89px', my: 1, }} />
              </Stack>
            ))
            }

            {dataGetTeacherList?.map((i: any) => {
              return (
                <Stack
                  spacing={{ xs: 1, sm: 2 }}
                  direction="row"
                  useFlexGap
                  flexWrap="wrap"
                  sx={{
                    mx: 1, cursor: 'pointer',
                    width: { xs: "100%", sm: "unset" }
                  }}
                >
                  <Paper
                    variant="outlined"
                    id={i.id}
                    onClick={(e: any) => setMarker(e.currentTarget.id)}
                    className={i.id == marker && "active-box-marker"}
                    sx={{
                      my: 1,
                      mx: 'auto',
                      p: 2,

                      "&:hover": {
                        backgroundColor: "#f5faff",
                        borderColor: "#1976d2",
                      },
                    }}
                  >
                    <Stack spacing={2} direction="row" alignItems="center"
                    >
                      <Stack>
                        <Avatar alt={i.name} />
                      </Stack>
                      <Stack sx={{ minWidth: '150px' }}>
                        <Typography>{i.name}</Typography>
                        <Chip
                          label={`${(i.writing_price * 10).toLocaleString()} IRR`}
                          variant="outlined"
                          sx={{
                            borderRadius: '7px',
                            minWidth: '120px',
                            height: '25px',
                            marginTop: '6px',
                            background: '#fff'
                          }}
                        />
                      </Stack>
                      <IconButton
                        id={i.id}
                        onClick={(e: any) => navigate(`/teachers/${(e.currentTarget.id)}`)}
                      >
                        <ChevronRightIcon />
                      </IconButton>
                    </Stack>
                  </Paper>
                </Stack>
              )
            })}
          </Grid>
        </Card >
      }

      {
        cart.id &&
        <Card variant="outlined" sx={{ py: 3, px: 2, width: '100%' }} id="selectExamType">
          <Grid sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Avatar sx={{ bgcolor: "#E21D38" }}>
              <SourceIcon />
            </Avatar>
            <Typography display="block" sx={{ px: 1, minWidth: '200px' }}> Select Exam Type </Typography>
          </Grid>
          <Grid sx={{ py: 3, px: 1 }} container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>

            <Box sx={{ width: '100%', display: 'flex', justifyContent: { xs: "center", sm: "flex-start" } }}>
              <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
                sx={{
                  px: 1,
                  mx: 1,
                  cursor: 'pointer',
                }}
              >
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    value={mode}
                    onClick={changeModeHandler}
                  >
                    <FormControlLabel value="test" control={<Radio />} label="Test Mode" />
                    <FormControlLabel value="practice" control={<Radio />} label="Practice Mode" />
                  </RadioGroup>
                </FormControl>
              </Stack>
            </Box>
          </Grid>
        </Card>
      }

      <Grid sx={{ py: 3, pr: 2 }} container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={8} md={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            color="success"
            disabled={!cart.id || !mode}
            sx={{ width: { xs: "100%", md: "auto" } }}
            onClick={createOrderHandler}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Books;