import React from 'react';
import Box from '@mui/material/Box';
import DeleteBookButton from './DeleteBookButton';
import CancelDialogButton from '../../../common/CancelDialogButton';

const DeleteBookButtonSet = ({ handleClose, handleDeleteBookOnClick }) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: "320px",
            marginTop: 2,
        }}>
        <CancelDialogButton handleClose={handleClose} />
        <DeleteBookButton handleDeleteBookOnClick={handleDeleteBookOnClick} />
        </Box>
    )
}

export default DeleteBookButtonSet;