import React from 'react';
import Box from '@mui/material/Box';
import DangerousIcon from '@mui/icons-material/Dangerous';
import Typography from '@mui/material/Typography';
import DeleteBookButtonSet from './DeleteBookButtonSet';

const DeleteBookModalBody = ({ handleClose, handleDeleteBookOnClick }) => {
    return (
        <Box sx={{
            width: '100%',
            height: 150,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: 1,
            flexDirection: 'row'
        }}>
            <DangerousIcon
                sx={{
                    width: 100,
                    height: 100,
                    fill: '#ff0f0f'
                }} />
            <Typography sx={{
                fontSize: 12,
                display: 'flex',
                color: '#ff0f0f',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: 0.2,
                marginLeft: 2,
            }}>
                Removing this book will "unlend" the book to all its readers, removing the book from their dashboard.
            </Typography>
            <DeleteBookButtonSet handleClose={handleClose} handleDeleteBookOnClick={handleDeleteBookOnClick} />
        </Box>
    );
}

export default DeleteBookModalBody;