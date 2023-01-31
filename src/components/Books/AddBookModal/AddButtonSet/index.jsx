import Box from "@mui/material/Box"
import AddBookButton from "./AddBookButton"
import CancelDialogButton from "../../../common/CancelDialogButton"

const AddButtonSet = ({ handleClose, handleAddBookOnClick}) => {
    return (
        <Box sx={{
            marginTop: 2,
            width: '320px',
            display: 'flex',
            justifyContent: 'space-between'

        }}>
            <CancelDialogButton handleClose={handleClose} />
            <AddBookButton handleAddBookOnClick={handleAddBookOnClick} />
        </Box>
    )
};

export default AddButtonSet;