import React from 'react';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import { StyledTableCell } from '../../../common/StyledTableCell';


const BooksTableSearchRow = ({ titleSearch, setTitleSearch }) => {
    return (
        <TableRow>
            <StyledTableCell>
                <TextField
                    id="title-search-field"
                    name="title-search-field"
                    type="text"
                    value={titleSearch}
                    size="small"
                    placeholder="Search Title"
                    autoFocus
                    onChange={(e) => setTitleSearch(e.target.value)}
                />
            </StyledTableCell>
            <StyledTableCell />
            <StyledTableCell />
            <StyledTableCell />
        </TableRow>

    )
};

export default BooksTableSearchRow;