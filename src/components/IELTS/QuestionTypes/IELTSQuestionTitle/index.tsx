import React, { Box, Typography } from "@mui/material";

const IELTSQuestionTitle = ({ to, from, type }) => {

  return (
    <Box>
      <Typography>
        <h3> Questions {to} - {from} </h3>
      </Typography>
      {type == 1 &&
        <>
          <Typography sx={{ my: 1.5 }}>
            Complete the notes.
          </Typography>
          <Typography className='italic'>
            Write
            <Typography sx={{ px: 1 }}> <strong className='uppercase'> one word and/or a number </strong> </Typography>
            for each answer.
          </Typography>
        </>
      }

      {type == 2 &&
        <>
          <Typography className='italic'>
            Choose
            <Typography sx={{ px: 1 }}> <strong className='uppercase'> two </strong> </Typography>
            correct answer.
          </Typography>
        </>
      }

      {type == 3 &&
        <>
          <Typography className='italic'>
            Choose the correct answer.
          </Typography>
        </>
      }

      {type == 4 &&
        <>
          <Typography sx={{ my: 1.5 }}>
            Complete the notes below.
          </Typography>
          <Typography className='italic'>
            Write
            <Typography sx={{ px: 1 }}>
              <strong className='uppercase'> ONE WORD ONLY </strong>
            </Typography>
            for each answer.
          </Typography>
        </>
      }
    </Box>
  );
};

export default IELTSQuestionTitle;