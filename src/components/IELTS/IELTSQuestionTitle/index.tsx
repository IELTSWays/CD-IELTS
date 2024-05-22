import React, { Box, Typography } from "@mui/material";

const IELTSQuestionTitle = ({ to, from, type = 0 }) => {

  // Type 1: Complete the notes. Write one word and/or a number for each answer.
  // Type 2: Choose [two] correct answer.
  // Type 3: Choose the correct answer.
  // Type 4: Complete the notes below. Write [ONE WORD ONLY] for each answer.
  // Type 5: YES, NO, NOT GIVEN
  // TYpe 7: Write the correct letter, A-H, next to Questions 16-20
  // Type 8: Write the correct letter, A-I, in boxes 14-18 on your answer sheet.


  // Type 100: TRUE, FALSE, NOT GIVEN

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

      {type == 7 &&
        <>
          <Typography>
            Label the plan below.
          </Typography>

          <Typography>
            Write the correct letter, A-H, next to Questions {from} - {to}
          </Typography>
        </>
      }
      {type == 8 &&
        <>
          <Typography>
            Reading Passage 2 has nine section, <strong className='uppercase'>&nbsp;A - I&nbsp;</strong>
          </Typography>
          <Typography>
            Which section contains the following information?
          </Typography>
          <Typography className='italic'>
            Write the correct letter,
            <strong className='uppercase'>&nbsp;A - I&nbsp;</strong>, in boxes
            <strong className='uppercase'>&nbsp;{from} - {to}&nbsp;</strong> on your answer sheet.
          </Typography>
        </>
      }
      {type == 9 &&
        <>
          <Typography>
            Reading Passage 3 has eight sections, <strong className='uppercase'>&nbsp;A - H&nbsp;</strong>
          </Typography>
          <Typography>
            Choose the correct heading for each section from the list of headings below.
          </Typography>
          <Typography className='italic'>
            Write the correct number
            <strong className='uppercase'>&nbsp;A - I&nbsp;</strong>, in boxes
            <strong className='uppercase'>&nbsp;{from} - {to}&nbsp;</strong> on your answer sheet.
          </Typography>
        </>
      }
      {type == 10 &&
        <>
          <Typography>
            Reading Passage 1 has ten sections, <strong className='uppercase'>&nbsp;A - J&nbsp;</strong>
          </Typography>
          <Typography>
            Which section contains the following information?
          </Typography>
          <Typography className='italic'>
            Write the correct number
            <strong className='uppercase'>&nbsp;A - J&nbsp;</strong>, in boxes
            <strong className='uppercase'>&nbsp;{from} - {to}&nbsp;</strong> on your answer sheet.
          </Typography>
        </>
      }
      {type == 11 &&
        <>
          <Typography>
            Look at the following statements (Questions <strong className='uppercase'>&nbsp;{from} - {to}&nbsp;</strong>) and the list of theories below.
          </Typography>
          <Typography>
            Match each statement with the correct theory, <strong>&nbsp;A&nbsp;</strong>, <strong>&nbsp;B&nbsp;</strong> or <strong>&nbsp;C&nbsp;</strong>.
          </Typography>
          <Typography className='italic'>
            Write the correct letter,
            <strong>&nbsp;A&nbsp;</strong>, <strong>&nbsp;B&nbsp;</strong> or <strong>&nbsp;C&nbsp;</strong>, in boxes
            <strong className='uppercase'>&nbsp;{from} - {to}&nbsp;</strong> on your answer sheet.
          </Typography>
          <Typography>
            NB  You may use any letter more than once.
          </Typography>
        </>
      }
      {type == 12 &&
        <>
          <Typography>
            Look at the following statements (Questions <strong className='uppercase'>&nbsp;{from} - {to}&nbsp;</strong>) and the list of theories below.
          </Typography>
          <Typography>
            Match each statement with the correct theory, <strong>&nbsp;A - G&nbsp;</strong>
          </Typography>
          <Typography className='italic'>
            Write the correct letter,
            <strong>&nbsp;A - G&nbsp;</strong> in boxes
            <strong className='uppercase'>&nbsp;{from} - {to}&nbsp;</strong> on your answer sheet.
          </Typography>
          <Typography>
            NB  You may use any letter more than once.
          </Typography>
        </>
      }
      {type == 13 &&
        <>
          <Typography sx={{ py: 1 }}>
            What is said about using each of the following hotel facilities?
          </Typography>
          <Typography sx={{ py: 1 }}>
            Choose <strong>THREE</strong> answers from the box and write the correct letter, <strong>A, B</strong> or <strong>C</strong> next to Questions <strong>&nbsp;{from} - {to}&nbsp;</strong>
          </Typography>
        </>
      }
      {type == 14 &&
        <>
          <Typography>
            What information does the speaker give about each of the following excursions?
          </Typography>
          <Typography sx={{ py: 1 }}>
            Choose <strong>SIX</strong> answers from the box and write the correct letter, <strong>A-H</strong> next to Questions <strong>&nbsp;{from} - {to}&nbsp;</strong>
          </Typography>
        </>
      }
      {type == 15 &&
        <>
          <Typography>
            Choose <strong>TWO</strong> letters, <strong>A-E</strong>
          </Typography>
        </>
      }
      {type == 16 &&
        <>
          <Typography>
            Choose the correct letter, <strong>A, B</strong> or <strong>C.</strong>
          </Typography>
        </>
      }
      {type == 17 &&
        <>
          <Typography>
            What comment is made about each of these stories?
          </Typography>
          <Typography>
            Choose <strong>FIVE</strong> answers from the box and write the correct letter, <strong>A-G,</strong> next to Questions <strong>&nbsp;{from} - {to}&nbsp;</strong>
          </Typography>
        </>
      }

      {type == 100 &&
        <>
          <Typography>
            Do the following statements agree with the information given in Reading Passage 1?
          </Typography>
          <Typography>
            Choose TRUE if the statement agrees with the information, Choose FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this
          </Typography>
        </>
      }


    </Box>
  );
};

export default IELTSQuestionTitle;
