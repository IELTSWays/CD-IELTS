import React, { Box, Typography } from "@mui/material";

const IELTSQuestionTitle = ({
  to,
  from,
  type = 0,
  title = null,
  numberOfAnswers = null,
  alphabet = null
}) => {

  // Type 1:   Complete the notes. Write one word and/or a number for each answer.
  // Type 2:   Choose [two] correct answer.
  // Type 3:   Choose the correct answer.
  // Type 4:   Complete the notes below. Write [ONE WORD ONLY] for each answer.
  // Type 5:   YES, NO, NOT GIVEN
  // TYpe 7:   Write the correct letter, A-H, next to Questions 16-20
  // Type 8:   Write the correct letter, A-I, in boxes 14-18 on your answer sheet.
  // Type 16:  Choose the correct letter, A, B or C.
  // Type 100: TRUE, FALSE, NOT GIVEN
  // Type 101: Choose TWO letters, A-E

  return (
    <Box sx={{ py: 2 }} id={`q-${from}`}>
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
            Choose <strong>YES</strong> if the statement agrees with the information, Choose <strong>NO</strong> if the statement contradicts the information, or <strong>NOT GIVEN</strong> if there is no information on this
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
            Write the correct letter, A-H, next to Questions <strong className='uppercase'>{from} - {to}</strong>
          </Typography>
        </>
      }
      {type == 8 &&
        <>
          <Typography>
            Reading Passage 2 has nine section, <strong className='uppercase'>A - I</strong>
          </Typography>
          <Typography>
            Which section contains the following information?
          </Typography>
          <Typography className='italic'>
            Write the correct letter,
            <strong className='uppercase'>A - I</strong>, in boxes
            <strong className='uppercase'>{from} - {to}</strong>on your answer sheet.
          </Typography>
        </>
      }
      {type == 9 &&
        <>
          <Typography>
            Reading Passage 3 has eight sections, <strong className='uppercase'>A - H</strong>
          </Typography>
          <Typography>
            Choose the correct heading for each section from the list of headings below.
          </Typography>
          <Typography className='italic'>
            Write the correct number
            <strong className='uppercase'>A - I</strong>, in boxes
            <strong className='uppercase'>{from} - {to}</strong> on your answer sheet.
          </Typography>
        </>
      }
      {type == 10 &&
        <>
          <Typography>
            Reading Passage 1 has ten sections, <strong className='uppercase'>A - J</strong>
          </Typography>
          <Typography>
            Which section contains the following information?
          </Typography>
          <Typography className='italic'>
            Write the correct number
            <strong className='uppercase'>A - J</strong>, in boxes
            <strong className='uppercase'>{from} - {to}</strong> on your answer sheet.
          </Typography>
        </>
      }
      {type == 11 &&
        <>
          <Typography>
            Look at the following statements (Questions <strong className='uppercase'>{from} - {to}</strong>)and the list of theories below.
          </Typography>
          <Typography>
            Match each statement with the correct theory,<strong>A</strong>, <strong>B</strong> or <strong>C</strong>.
          </Typography>
          <Typography className='italic'>
            Write the correct letter,
            <strong>A</strong>, <strong>B</strong> or <strong>C</strong>, in boxes
            <strong className='uppercase'>{from} - {to}</strong> on your answer sheet.
          </Typography>
          <Typography>
            NB  You may use any letter more than once.
          </Typography>
        </>
      }
      {type == 12 &&
        <>
          <Typography>
            Look at the following statements (Questions <strong className='uppercase'>{from} - {to}</strong>) and the list of theories below.
          </Typography>
          <Typography>
            Match each statement with the correct theory, <strong>A - G</strong>
          </Typography>
          <Typography className='italic'>
            Write the correct letter,
            <strong>A - G</strong> in boxes
            <strong className='uppercase'>{from} - {to}</strong> on your answer sheet.
          </Typography>
          <Typography>
            NB  You may use any letter more than once.
          </Typography>
        </>
      }
      {type == 13 &&
        <>
          <Typography>
            What is said about using each of the following hotel facilities?
          </Typography>
          <Typography sx={{ py: 1 }}>
            Choose <strong>THREE</strong> answers from the box and write the correct letter, <strong>A, B</strong> or <strong>C</strong> next to Questions <strong>{from} - {to}</strong>
          </Typography>
        </>
      }
      {type == 14 &&
        <>
          <Typography>
            What information does the speaker give about each of the following excursions?
          </Typography>
          <Typography sx={{ py: 1 }}>
            Choose <strong>SIX</strong> answers from the box and write the correct letter, <strong>A-H</strong> next to Questions <strong>{from} - {to}</strong>
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
            Choose <strong>FIVE</strong> answers from the box and write the correct letter, <strong>A-G,</strong> next to Questions <strong>{from} - {to}</strong>
          </Typography>
        </>
      }

      {type == 100 &&
        <>
          <Typography>
            Do the following statements agree with the information given in Reading Passage 1?
          </Typography>
          <Typography>
            Choose <strong className='uppercase'>True</strong> if the statement agrees with the information, Choose <strong className='uppercase'>False</strong> if the statement contradicts the information, or <strong className='uppercase'>NOT GIVEN</strong> if there is no information on this
          </Typography>
        </>
      }
      {type == 101 &&
        <>
          <Typography>
            Choose TWO letters,<strong className='uppercase'>A - E</strong>
          </Typography>
        </>
      }
      {type == 102 &&
        <>
          <Typography>
            What information does Megan give about each of the following job opportunities?
          </Typography>
          <Typography sx={{ py: 1 }}>
            Choose <strong>THREE</strong> answers from the box and write the correct letter, <strong>A, B</strong> or <strong>C</strong> next to Questions <strong>{from} - {to}</strong>
          </Typography>
        </>
      }
      {type == 103 &&
        <>
          <Typography>
            What opinion do the students give about each of the following modules on their veterinary science course?
          </Typography>
          <Typography sx={{ py: 1 }}>
            Choose <strong>FOUR</strong> answers from the box and write the correct letter, <strong>A - F</strong> next to Questions <strong>{from} - {to}</strong>
          </Typography>
        </>
      }
      {type == 104 &&
        <>
          <Typography>
            Which activity is offered at each of the following locations on the farm?
          </Typography>
          <Typography sx={{ py: 1 }}>
            Choose <strong>SIX</strong> answers from the box and write the correct letter, <strong>A - H</strong> next to Questions <strong>{from} - {to}</strong>
          </Typography>
        </>
      }
      {type == 104 &&
        <>
          <Typography>
            Which opinion do the speakers give about each of the following aspects of The Emporium’s production of Romeo and Juliet?
          </Typography>
          <Typography sx={{ py: 1 }}>
            Choose <strong>FIVE</strong> answers from the box and write the correct letter, <strong>A - G</strong> next to Questions <strong>{from} - {to}</strong>
          </Typography>
        </>
      }
      {type == 200 &&
        <>
          <Typography>
            {title}
          </Typography>
          <Typography sx={{ py: 1 }}>
            Choose <strong className="uppercase">{numberOfAnswers}</strong>
            answers from the box and write the correct letter,
            <strong className="uppercase">A - {alphabet}</strong> next to Questions <strong>{from} - {to}</strong>
          </Typography>
        </>
      }
      {type == 201 &&
        <>
          <Typography>
            {title}
          </Typography>
          <Typography sx={{ py: 1 }}>
            Write the correct letter, A, B or C,
            next to Questions <strong>{from} - {to}</strong>
          </Typography>
        </>
      }
    </Box>
  );
};

export default IELTSQuestionTitle;