import Box from "@mui/material/Box";
import CancelDialogButton from "../../../common/CancelDialogButton";
import UpdateBookNameButton from "./UpdateBookTitleButton";

const EditButtonSet = ({handleClose, handleUpdateBookTitleOnClick}) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: "320px",
            marginTop: 4,
        }}>
            <CancelDialogButton handleClose={handleClose} />
            <UpdateBookNameButton handleUpdateBookTitleOnClick={handleUpdateBookTitleOnClick} />
        </Box>
    )
   
}

export default EditButtonSet;