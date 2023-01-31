import Button from '@mui/material/Button';

const DeleteBookButton = ({ handleDeleteBookOnClick }) => {
    return (
        <Button variant="contained" onClick={handleDeleteBookOnClick} sx={{
            backgroundColor: 'red',
            width: '150px',
            height: '36.5px',
            fontSize: 12
        }}>
            Delete Book
        </Button>
    )
}

export default DeleteBookButton;