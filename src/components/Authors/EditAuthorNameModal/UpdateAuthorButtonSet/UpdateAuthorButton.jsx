import Button from '@mui/material/Button';

const UpdateAuthorButton = ({ handleUpdateAuthorOnClick }) => {
    return (
        <Button variant="contained" onClick={handleUpdateAuthorOnClick} sx={{
            backgroundColor: 'brown',
            width: '150px',
            height: '36.5px',
        }}>
            Update Name
        </Button>
    )
}

export default UpdateAuthorButton;