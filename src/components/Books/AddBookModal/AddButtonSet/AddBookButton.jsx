import { useContext } from 'react';
import Button from '@mui/material/Button';
import { AddBookFormContext } from '../AddBookModalBody';

const AddBookButton = ({ handleAddBookOnClick }) => {
    const {
        bookTitle,
        authorId,
        pageCount
    } = useContext(AddBookFormContext);
    return (
        <Button 
            disabled={bookTitle === "" || authorId === "" || !pageCount}
            variant="contained" 
            type="submit" 
            onClick={handleAddBookOnClick} 
            sx={{
                width: '150px',
                height: '36.5px'
            }}
        >
            Add Book
        </Button>
    )
};

export default AddBookButton;