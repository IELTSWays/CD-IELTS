import { useState, useEffect } from "react";
import { useDrop } from "react-dnd";

// mtu
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// mtu

// api
import { useQuery } from "@tanstack/react-query";
import axiosInstance from '@/services/API'
// api

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion, setAnswersAll, setFlags } from '@/store/slices/user/userSlice'
// store

const Q29 = ({ qn }: any) => {

  const flags = useAppSelector((state: any) => state.user.flag)
  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

  const [flag, setFlag] = useState(flags['29'])

  const [item, setItem] = useState(JSON.parse((localStorage.getItem('00029'))));
  const dispatch = useAppDispatch();

  console.log(JSON.parse((localStorage.getItem('00029'))))

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
        "test_done": false,
        "answers": {
          "00029": localStorage.getItem('00029')
        }
      })
      const data = await response.data
      getAnswer.refetch()
      return data
    },
  })

  const [{ hover }, drop] = useDrop(() => ({
    accept: "ielts",
    collect: (monitor) => {
      return {
        hover: monitor.isOver({ shallow: true })
      }
    },
    drop: (data: any, _monitor) => {
      setItem(data);
      localStorage.setItem('00029', JSON.stringify(data));
      postAnswer.refetch()
      dispatch(setCurrentQuestion(29))
    },
  }));

  console.log(answersAll);

  useEffect(() => {
    localStorage.setItem('00029', JSON.stringify(item));
  }, [item]);

  hover && dispatch(setCurrentQuestion(29))

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '29': !flag })))
  }

  return (
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="row"
      useFlexGap
      flexWrap="wrap"
      sx={{ alignItems: 'center', py: 1 }}
      id={`q-${qn}`}
      className="drop-container"
    >
      <Paper elevation={0} className="drop-container-text" sx={{ display: 'flex', gap: '10px' }}>
        <div onClick={() => flagHandler()} className={`flag ${currentQuestion == qn && 'active'}`}>
          {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
        </div>
        <Typography>
          Little is done in the hospitality industry to help workers improve their skills.
        </Typography>
      </Paper>
      <Paper elevation={0}>
        <Box ref={drop} >
          <Paper
            elevation={0}
            className={`
                ${hover && 'isDroping'}
                ielts-dropbox ${item == null && 'empty'} 
                question-now ${currentQuestion == qn && 'active'} 
            `}
            sx={{ p: 0.5, my: 1.5 }}>
            {item ? item.title : qn}
          </Paper>
        </Box>
      </Paper>
    </Stack>
  );
};

export default Q29;