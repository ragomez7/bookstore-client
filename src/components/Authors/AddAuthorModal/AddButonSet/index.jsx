import Box from "@mui/material/Box"
import AddAuthorButton from "./AddAuthorButton"
import CancelDialogButton from "../../../common/CancelDialogButton"

const AddButtonSet = ({ handleClose, handleAddAuthorOnClick}) => {
    return (
        <Box sx={{
            marginTop: 2,
            width: '320px',
            display: 'flex',
            justifyContent: 'space-between'

        }}>
            <CancelDialogButton handleClose={handleClose} />
            <AddAuthorButton handleAddAuthorOnClick={handleAddAuthorOnClick} />
        </Box>
    )
};

export default AddButtonSet;