import Button from "@mui/material/Button"

const CancelDialogButton = ( {color, handleClose} ) => {
    return (
        <Button variant="outlined" onClick={handleClose} sx={{
            width: '150px',
            height: '36.5px',
        }}>
            Cancel
        </Button>
    )
};

export default CancelDialogButton;