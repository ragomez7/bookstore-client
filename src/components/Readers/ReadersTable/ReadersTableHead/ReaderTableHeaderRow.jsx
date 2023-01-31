import TableRow from "@mui/material/TableRow";
import { StyledTableCell } from "../../../common/StyledTableCell";

const ReaderTableHeaderRow = () => {
    return (
        <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Age</StyledTableCell>
            <StyledTableCell># Books</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell />
        </TableRow>
    )
}

export default ReaderTableHeaderRow;