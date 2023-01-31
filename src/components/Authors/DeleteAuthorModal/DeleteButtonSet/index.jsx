import React from 'react';
import Box from '@mui/material/Box';
import DeleteAuthorButton from './DeleteAuthorButton';
import CancelDialogButton from '../../../common/CancelDialogButton';

const DeleteButtonSet = ({ handleClose, handleDeleteAuthorOnClick }) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: "320px",
            marginTop: 2,
        }}>
        <CancelDialogButton handleClose={handleClose} />
        <DeleteAuthorButton handleDeleteAuthorOnClick={handleDeleteAuthorOnClick} />
        </Box>
    )
}

export default DeleteButtonSet;