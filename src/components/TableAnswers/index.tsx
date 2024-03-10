import { forwardRef, useState } from 'react'
// mtu
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
// mtu

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function createData(
  id: number,
  answer: string,
  result: string,
) {
  return { id, answer, result };
}

const rows = [
  createData(1, 'Stop waiting for exceptional things to just happen.', 'NA'),
  createData(2, 'It was the best sandcastle he had ever seen.', 'NA'),
  createData(3, 'Three years later, the coffin was still full of Jello.', 'Correct'),
  createData(4, 'He dreamed of eating green apples with worms.', 'Wrong'),
  createData(5, 'We should play with legos at camp.', 'NA'),
  createData(6, 'Lorem ipsum dolor sit amet cTableRe', 'NA'),
  createData(7, 'Andy loved to sleep on a bed of nails.', 'Wrong'),
  createData(8, 'Courage and stupidity were all he had.', 'NA'),
  createData(9, 'The crowd yells and screams for more memes.', 'Correct'),
  createData(10, 'The tart lemonade quenched her thirst, but not her longing.', 'Wrong'),
  createData(11, 'The crowd yells and screams for more memes.', 'Correct'),
  createData(12, 'Combines are no longer just for farms.', 'NA'),
  createData(13, 'The sun had set and so had his dreams.', 'Correct'),
  createData(14, 'He dreamed of eating green apples with worms.', 'NA'),
  createData(15, 'Her daily goal was to improve on yesterday.', 'Correct'),
  createData(16, 'She cried diamonds.', 'Correct'),
  createData(17, 'The stranger officiates the meal.', 'NA'),
  createData(18, 'It was the scarcity that fueled his creativity..', 'Wrong'),
  createData(19, 'It took him a month to finish the meal..', 'NA'),
  createData(20, 'There are no heroes in a punk rock band]', 'NA'),
];

const TableAnswers = () => {

  const [open, setOpen] = useState(false);
  const [questionId, setQuestionId] = useState('');

  const showDetails = (i: any) => {
    setQuestionId(i.currentTarget.id);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <>
      <>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{questionId} - Lorem ipsum dolor sit amet.</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quia voluptatum sunt, id voluptate earum architecto et maiores sed sequi?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>close</Button>
          </DialogActions>
        </Dialog>
      </>

      <TableContainer component={Paper}>
        <Table id="table-questions">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#ffffff' }}>Question</TableCell>
              <TableCell align="left">Your Answer</TableCell>
              <TableCell align="center">Wrong</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                id={row.id}
                className={`table-${row.result}`}
                onClick={(row: any) => showDetails(row)}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '&:hover': {
                    backgroundColor: '#0000000a',
                    cursor: 'pointer'
                  }
                }}
              >
                <TableCell component="th" scope="row" width="10%">{row.id}</TableCell>
                <TableCell align="left" >{row.answer}</TableCell>
                <TableCell align="center" width="20%">{row.result}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TableAnswers