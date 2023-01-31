import TableHead from '@mui/material/TableHead';
import ReaderTableHeaderRow from './ReaderTableHeaderRow';
import ReaderTableSearchRow from './ReaderTableSearchRow';

const ReadersTableHead = ({readerNameTerm, setReaderNameTerm}) => {
    return (
        <TableHead>
            <ReaderTableHeaderRow />
            <ReaderTableSearchRow readerNameTerm={readerNameTerm} setReaderNameTerm={setReaderNameTerm} />
        </TableHead>
    )
};

export default ReadersTableHead;