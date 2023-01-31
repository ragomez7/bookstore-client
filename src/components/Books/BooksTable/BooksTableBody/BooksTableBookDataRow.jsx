import React, { memo } from 'react';
import TableRow from '@mui/material/TableRow';
import { v4 as uuid } from 'uuid';
import { StyledTableCell } from '../../../common/StyledTableCell';
import ManageBooksButtonSet from '../ManageBooksButtonSet';

const BooksTableBookDataRow = ({ book }) => {
    return (
        <TableRow key={uuid()}>
            <StyledTableCell>{book.title}</StyledTableCell>
            <StyledTableCell>{book.author.name}</StyledTableCell>
            <StyledTableCell>{book.readers.length}</StyledTableCell>
            <StyledTableCell>
                <ManageBooksButtonSet book={book} />
            </StyledTableCell>
        </TableRow>
    )
};

export default memo(BooksTableBookDataRow);