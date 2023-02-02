import TableBody from '@mui/material/TableBody';
import BooksTableBookDataRow from './BooksTableBookDataRow';
import { v4 as uuid } from 'uuid';

const BooksTableBody = ({ books }) => {
    return (
        <TableBody>
            {books?.map((book) => (
                <BooksTableBookDataRow
                    key={uuid()}
                    book={book}
                />
            ))}
        </TableBody>
    )
};

export default BooksTableBody;