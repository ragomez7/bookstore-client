import TableHead from '@mui/material/TableHead';
import BooksTableHeaderRow from './BooksTableHeaderRow';
import BooksTableSearchRow from './BooksTableSearchRow';

const BooksTableHead = ({titleSearch, setTitleSearch}) => {
    return (
        <TableHead>
            <BooksTableHeaderRow />
            <BooksTableSearchRow titleSearch={titleSearch} setTitleSearch={setTitleSearch} />
        </TableHead>
    )
};

export default BooksTableHead;