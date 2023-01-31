import React from 'react';
import Box from '@mui/material/Box';
import DeleteReaderButton from './DeleteReaderButton';
import CancelDialogButton from '../../../common/CancelDialogButton';

const DeleteButtonSet = ({ handleClose, handleDeleteReaderOnClick }) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: "320px",
            marginTop: 2,
        }}>
        <CancelDialogButton handleClose={handleClose} />
        <DeleteReaderButton handleDeleteReaderOnClick={handleDeleteReaderOnClick} />
        </Box>
    )
}

export default DeleteButtonSet;