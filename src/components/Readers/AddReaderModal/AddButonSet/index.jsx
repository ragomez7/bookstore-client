import Box from "@mui/material/Box"
import AddReaderButton from "./AddReaderButton"
import CancelDialogButton from "../../../common/CancelDialogButton"

const AddButtonSet = ({ handleClose, handleAddReaderOnClick}) => {
    return (
        <Box sx={{
            marginTop: 2,
            width: '380px',
            display: 'flex',
            justifyContent: 'space-around',

        }}>
            <CancelDialogButton handleClose={handleClose} />
            <AddReaderButton handleAddReaderOnClick={handleAddReaderOnClick} />
        </Box>
    )
};

export default AddButtonSet;