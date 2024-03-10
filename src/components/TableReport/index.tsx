import React from 'react';

// mtu
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
// mtu

function createData(
  id: number,
  part: string,
  correct: number,
  wrong: number,
  NA: number,
  percentOfCorrect: number,
) {
  return { id, part, correct, wrong, NA, percentOfCorrect };
}

const rows = [
  createData(1, '1', 14, 6.0, 24, 4.0),
  createData(2, '2', 23, 9.0, 37, 4.3),
  createData(3, '3', 26, 16.0, 24, 6.0),
  createData(4, '4', 30, 3.7, 67, 4.3),
  createData(5, 'Total', 36, 16.0, 49, 3.9),
];

const TableReport = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
          <TableRow>
            <TableCell>Part</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Correct</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bolder' }}>Wrong</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bolder' }}>NA</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bolder' }}>% of Correct</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              onClick={() => console.log(row.id)}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.part}</TableCell>
              <TableCell align="center">
                {row.id == 5 ?
                  <Chip color="primary" sx={{ borderRadius: '5px' }} label={row.correct} /> :
                  row.correct
                }
              </TableCell>
              <TableCell align="center">
                {row.id == 5 ?
                  <Chip color="error" sx={{ borderRadius: '5px' }} label={row.wrong} /> :
                  row.wrong
                }
              </TableCell>
              <TableCell align="center">
                {row.id == 5 ?
                  <Chip color="success" sx={{ borderRadius: '5px' }} label={row.NA} /> :
                  row.NA
                }
              </TableCell>
              <TableCell align="center">{row.percentOfCorrect} %</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableReport