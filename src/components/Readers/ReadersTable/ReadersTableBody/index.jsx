import TableBody from '@mui/material/TableBody';
import ReadersTableReaderDataRow from './ReadersTableReaderDataRow';

const ReadersTableBody = ({ readers }) => {
    return (
        <TableBody>
            {readers?.map((reader) => (
                <ReadersTableReaderDataRow
                    reader={reader}
                />
            ))}
        </TableBody>
    )
};

export default ReadersTableBody;