import TableRow from "@mui/material/TableRow";
import { TextField } from "@mui/material";
import { StyledTableCell } from "../../../common/StyledTableCell";

const ReaderTableSearchRow = ({readerNameTerm, setReaderNameTerm}) => {
    return (
        <TableRow>
            <StyledTableCell>
                <TextField
                    id="reader-name-search-field"
                    name="reader-name-search-field"
                    type="text"
                    size="small"
                    placeholder="Filter by name"
                    autoFocus
                    value={readerNameTerm}
                    onChange={(e) => setReaderNameTerm(e.target.value)}
                />
            </StyledTableCell>
            <StyledTableCell />
            <StyledTableCell />
            <StyledTableCell />
            <StyledTableCell />
        </TableRow>
    )
}

export default ReaderTableSearchRow;