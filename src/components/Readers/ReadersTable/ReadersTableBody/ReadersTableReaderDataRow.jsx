import React from 'react';
import TableRow from '@mui/material/TableRow';
import { v4 as uuid } from 'uuid';
import { StyledTableCell } from '../../../common/StyledTableCell';
import ManageReadersButtonSet from '../ManageReadersButtonSet';

const ReadersTableReaderDataRow = ({ reader }) => {
    return (
        <TableRow key={uuid()}>
            <StyledTableCell>{reader.name}</StyledTableCell>
            <StyledTableCell>{reader.age}</StyledTableCell>
            <StyledTableCell>{reader.books.length}</StyledTableCell>
            <StyledTableCell>{reader.email}</StyledTableCell>
            <StyledTableCell>
                <ManageReadersButtonSet reader={reader} />
            </StyledTableCell>
        </TableRow>
    )
};

export default ReadersTableReaderDataRow;