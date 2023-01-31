import Button from '@mui/material/Button';

const DeleteReaderButton = ({ handleDeleteReaderOnClick }) => {
    return (
        <Button variant="contained" onClick={handleDeleteReaderOnClick} sx={{
            backgroundColor: 'red',
            width: '150px',
            height: '36.5px',
            fontSize: 12
        }}>
            Delete Reader
        </Button>
    )
}

export default DeleteReaderButton;