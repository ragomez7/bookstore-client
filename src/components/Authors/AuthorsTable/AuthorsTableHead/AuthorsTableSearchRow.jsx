import { StyledTableCell } from '../../../common/StyledTableCell';
import TableRow from '@mui/material/TableRow';
import AuthorNameSearchField from './AuthorNameSearchField';
import CountrySearchField from '../CountrySearchField';
import { TableCell } from '@mui/material';

const AuthorsTableSearchRow = ({ authorNameSearch, setAuthorNameSearch, setCountrySearch}) => {
    return (
        <TableRow>
            <TableCell sx={{
                width: '500px',
                borderBottom: '1px solid black'
            }} >
                <AuthorNameSearchField authorNameSearch={authorNameSearch} setAuthorNameSearch={setAuthorNameSearch} />
            </TableCell>
            <StyledTableCell />
            <StyledTableCell />
            <StyledTableCell>
                <CountrySearchField setCountrySearch={setCountrySearch} />
            </StyledTableCell>
            <StyledTableCell />
        </TableRow>
    )
}

export default AuthorsTableSearchRow;