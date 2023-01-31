import TableHead from '@mui/material/TableHead';
import AuthorsTableSearchRow from './AuthorsTableSearchRow';
import AuthorTableHeaderRow from './AuthorTableHeaderRow';

const AuthorsTableHead = ({ authorNameSearch, setAuthorNameSearch, setCountrySearch }) => {
    return (
        <TableHead>
            <AuthorTableHeaderRow />
            <AuthorsTableSearchRow authorNameSearch={authorNameSearch} setAuthorNameSearch={setAuthorNameSearch} setCountrySearch={setCountrySearch} />
        </TableHead>
    )
}

export default AuthorsTableHead;