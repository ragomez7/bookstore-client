import TableRow from '@mui/material/TableRow';
import { v4 as uuid } from 'uuid';
import { StyledTableCell } from '../../../common/StyledTableCell';
import ManageAuthorsButtonSet from '../ManageAuthorsButtonSet';


const AuthorsTableDataRow = ({author}) => {
    return (
        <TableRow key={uuid()}>
            <StyledTableCell>{author.name}</StyledTableCell>
            {author.isDead === "true" ?
                <StyledTableCell>
                    <i>Passed Away</i>
                </StyledTableCell> :
                <StyledTableCell>{author.age}</StyledTableCell>}
            <StyledTableCell>{author.books.length}</StyledTableCell>
            <StyledTableCell>{author.countryOfBirth}</StyledTableCell>
            <StyledTableCell sx={{
                width: '100px'
            }}>
                <ManageAuthorsButtonSet author={author} />
            </StyledTableCell>
        </TableRow>
    )
}

export default AuthorsTableDataRow;