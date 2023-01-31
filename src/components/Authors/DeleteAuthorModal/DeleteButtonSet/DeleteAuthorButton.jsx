import Button from '@mui/material/Button';

const DeleteAuthorButton = ({ handleDeleteAuthorOnClick }) => {
    return (
        <Button variant="contained" onClick={handleDeleteAuthorOnClick} sx={{
            backgroundColor: 'red',
            width: '150px',
            height: '36.5px',
            fontSize: 12
        }}>
            Delete Author
        </Button>
    )
}

export default DeleteAuthorButton;