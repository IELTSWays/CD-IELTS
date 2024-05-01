import React, { Box, Typography } from "@mui/material";

const IELTSQuestionTitle = ({ to, from, type }) => {

  // Type 1: Complete the notes. Write one word and/or a number for each answer.
  // Type 2: Choose [two] correct answer.
  // Type 3: Choose the correct answer.
  // Type 4: Complete the notes below. Write [ONE WORD ONLY] for each answer.
  // Type 5: Do the following statements agree with the information given in Reading Passage 1? [TRUE,FALSE,NOT-GIVEN]

  return (
    <Box sx={{ py: 2 }}>
      <Typography>
        <h3> Questions {from} - {to} </h3>
      </Typography>
      {type == 1 &&
        <>
          <Typography>
            Complete the notes.
          </Typography>
          <Typography className='italic'>
            Write
            <Typography sx={{ px: 1 }}>
              <strong className='uppercase'> one word and/or a number </strong>
            </Typography>
            for each answer.
          </Typography>
        </>
      }

      {type == 2 &&
        <>
          <Typography className='italic'>
            Choose
            <Typography sx={{ px: 1 }}>
              <strong className='uppercase' > two </strong>
            </Typography>
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
          <Typography>
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

      {type == 5 &&
        <>
          <Typography>
            Do the following statements agree with the information given in Reading Passage 1?
          </Typography>
          <Typography>
            Choose TRUE if the statement agrees with the information, Choose FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this
          </Typography>
        </>
      }

      {type == 6 &&
        <>
          <Typography>
            The text has seven paragraphs, A-G. Which paragraph contains the following information?
          </Typography>
        </>
      }
    </Box>
  );
};

export default IELTSQuestionTitle;