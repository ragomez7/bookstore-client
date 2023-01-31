import TableBody from '@mui/material/TableBody';
import AuthorsTableDataRow from './AuthorsTableDataRow';


const AuthorsTableBody = ({ authors }) => {
    return (
        <TableBody>
            {authors?.map((author) => (
                <AuthorsTableDataRow author={author} />
            ))}
        </TableBody>
    )
};

export default AuthorsTableBody;