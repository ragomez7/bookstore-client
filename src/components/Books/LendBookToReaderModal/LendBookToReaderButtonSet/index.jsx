import Box from "@mui/material/Box";
import CancelDialogButton from "../../../common/CancelDialogButton";
import LendBookToReaderButton from "./LendBookToReaderButton";

const EditButtonSet = ({handleClose, handleLendBookToReaderOnClick}) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: "320px",
            marginTop: 1,
        }}>
            <CancelDialogButton handleClose={handleClose} />
            <LendBookToReaderButton handleLendBookToReaderOnClick={handleLendBookToReaderOnClick} />
        </Box>
    )
   
}

export default EditButtonSet;