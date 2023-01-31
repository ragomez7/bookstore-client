import Box from "@mui/material/Box";
import CancelDialogButton from "../../../common/CancelDialogButton";
import UpdateReaderButton from "./UpdateReaderButton";

const EditButtonSet = ({handleClose, handleUpdateReaderOnClick}) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: "320px",
            marginTop: 4,
        }}>
            <CancelDialogButton handleClose={handleClose} />
            <UpdateReaderButton handleUpdateReaderOnClick={handleUpdateReaderOnClick} />
        </Box>
    )
   
}

export default EditButtonSet;