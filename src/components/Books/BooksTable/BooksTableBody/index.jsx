import TableBody from '@mui/material/TableBody';
import BooksTableBookDataRow from './BooksTableBookDataRow';

const BooksTableBody = ({ books }) => {
    return (
        <TableBody>
            {books?.map((book) => (
                <BooksTableBookDataRow
                    book={book}
                />
            ))}
        </TableBody>
    )
};

export default BooksTableBody;