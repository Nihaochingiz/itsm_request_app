import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const RequestsTable = ({ requests }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Subject</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Urgency</TableCell>
            <TableCell>Caller</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {requests.map((request, index) => (
            <TableRow key={index}>
              <TableCell>{request.subject}</TableCell>
              <TableCell>{request.description}</TableCell>
              <TableCell>{request.urgency}</TableCell>
              <TableCell>{request.caller}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RequestsTable;