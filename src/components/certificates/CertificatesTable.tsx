import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './CertificatesTable.module.scss';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CertificatesTable() {
  return (
    <TableContainer component={Paper} className={styles.container}>
      <Table className={styles.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell className={styles.cell}>Calories</TableCell>
            <TableCell className={styles.cell}>Fat&nbsp;(g)</TableCell>
            <TableCell className={styles.cell}>Carbs&nbsp;(g)</TableCell>
            <TableCell className={styles.cell}>Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              className={styles.tableRow}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className={styles.cell}>{row.calories}</TableCell>
              <TableCell className={styles.cell}>{row.fat}</TableCell>
              <TableCell className={styles.cell}>{row.carbs}</TableCell>
              <TableCell className={styles.cell}>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
