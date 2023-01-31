import React from 'react';
import TableRow from '@mui/material/TableRow';
import { StyledTableCell } from '../../../common/StyledTableCell';

const BooksTableHeaderRow = () => {
    return (
        <TableRow>
            <StyledTableCell  >Title</StyledTableCell>
            <StyledTableCell>Author</StyledTableCell>
            <StyledTableCell>Reader #</StyledTableCell>
            <StyledTableCell />
        </TableRow>
    )
};

export default BooksTableHeaderRow;