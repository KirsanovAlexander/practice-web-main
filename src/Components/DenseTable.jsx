import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Preorderer from '../data/preoders.json'
import { Preorders } from '../data';

function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Рег. номер</TableCell>
            <TableCell align="center">ID пред. заказа</TableCell>
            <TableCell align="center">ID конфигурации</TableCell>
            <TableCell align="center">ID среды</TableCell>
            <TableCell align="center">ID центра данных</TableCell>
            <TableCell align="center">Репликация</TableCell>
            <TableCell align="center">Статус</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Preorders.Preorderer.map((preorderer) => (
            <TableRow
              key={preorderer.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {preorderer.id}
              </TableCell>
              <TableCell align="center">{preorderer.regNumber}</TableCell>
              <TableCell align="center">{preorderer.preorderTypeId}</TableCell>
              <TableCell align="center">{preorderer.configurationId}</TableCell>
              <TableCell align="center">{preorderer.environmentId}</TableCell>
              <TableCell align="center">{preorderer.datacenterIds}</TableCell>
              <TableCell align="center">{preorderer.isReplication}</TableCell>
              <TableCell align="center">{preorderer.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DenseTable