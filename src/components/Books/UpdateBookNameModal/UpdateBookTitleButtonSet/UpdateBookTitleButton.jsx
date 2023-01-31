import Button from '@mui/material/Button';

const UpdateBookTitleButton = ({ handleUpdateBookTitleOnClick }) => {
    return (
        <Button variant="contained" onClick={handleUpdateBookTitleOnClick} sx={{
            backgroundColor: 'brown',
            width: '150px',
            height: '36.5px',
            fontSize: 12,
            p: 0
        }}>
            Update Book Title
        </Button>
    )
}

export default UpdateBookTitleButton;