import TableRow from '@mui/material/TableRow';
import { StyledTableCell } from '../../../common/StyledTableCell';

const AuthorTableHeaderRow = () => {
    return (
        <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Age</StyledTableCell>
            <StyledTableCell>Books #</StyledTableCell>
            <StyledTableCell>Country of Birth</StyledTableCell>
            <StyledTableCell />
        </TableRow>
    )
}

export default AuthorTableHeaderRow;