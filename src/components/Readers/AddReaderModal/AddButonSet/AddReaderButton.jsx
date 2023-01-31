import { useContext } from 'react';
import Button from '@mui/material/Button';
import { AddReaderFormContext } from '../AddReaderModalBody';
import validator from 'email-validator'

const AddReaderButton = ({ handleAddReaderOnClick }) => {
    const {
        readerName,
        readerAge,
        readerEmail
    } = useContext(AddReaderFormContext)
    return (
        <Button
            disabled={readerName === "" || !readerAge || validator.validate(readerEmail) === false}
            variant="contained"
            onClick={handleAddReaderOnClick} sx={{
                width: '150px',
                height: '36.5px'
            }}>
            Add Reader
        </Button>
    )
};

export default AddReaderButton;