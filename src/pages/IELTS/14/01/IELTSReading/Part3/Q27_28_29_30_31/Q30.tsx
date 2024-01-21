import { useState, useEffect } from "react";
import { useDrop } from "react-dnd";

// mtu
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// mtu

// api
import { useQuery } from "@tanstack/react-query";
import axiosInstance from '@/services/API'
// api

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion, setAnswersAll, } from '@/store/slices/user/userSlice'
// store

const Q30 = ({ qn }: any) => {

  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

  const [item, setItem] = useState(JSON.parse((localStorage.getItem('00030'))));
  const dispatch = useAppDispatch();

  console.log(JSON.parse((localStorage.getItem('00030'))))

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
          "00030": localStorage.getItem('00030')
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
      localStorage.setItem('00030', JSON.stringify(data));
      postAnswer.refetch()
      dispatch(setCurrentQuestion(30))
    },
  }));

  console.log(answersAll);

  useEffect(() => {
    localStorage.setItem('00030', JSON.stringify(item));
  }, [item]);

  hover && dispatch(setCurrentQuestion(30))

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
      <Paper elevation={0} className="drop-container-text">
        <Typography>Staff are less likely to change jobs if cooperation is encouraged.</Typography>
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

export default Q30;