import { useContext } from 'react'
import Button from '@mui/material/Button';
import { AddAuthorFormContext } from '../AddAuthorModalBody';


const AddAuthorButton = ({ handleAddAuthorOnClick }) => {
    const {
        authorName,
        countryOfBirth,
        birthDate
    } = useContext(AddAuthorFormContext);
    return (
        <Button 
            disabled={authorName === "" || countryOfBirth === "" || birthDate === ""}
            variant="contained" onClick={handleAddAuthorOnClick} sx={{
            width: '150px',
            height: '36.5px'
        }}>
            Add Author
        </Button>
    )
};

export default AddAuthorButton;