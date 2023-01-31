import Button from '@mui/material/Button';

const UpdateReaderButton = ({ handleUpdateReaderOnClick }) => {
    return (
        <Button variant="contained" onClick={handleUpdateReaderOnClick} sx={{
            backgroundColor: 'brown',
            width: '150px',
            height: '36.5px',
        }}>
            Update Name
        </Button>
    )
}

export default UpdateReaderButton;