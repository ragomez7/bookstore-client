import Box from "@mui/material/Box";
import CancelDialogButton from "../../../common/CancelDialogButton";
import UpdateAuthorButton from "./UpdateAuthorButton";

const EditButtonSet = ({handleClose, handleUpdateAuthorOnClick}) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: "320px",
            marginTop: 4,
        }}>
            <CancelDialogButton handleClose={handleClose} />
            <UpdateAuthorButton handleUpdateAuthorOnClick={handleUpdateAuthorOnClick} />
        </Box>
    )
   
}

export default EditButtonSet;