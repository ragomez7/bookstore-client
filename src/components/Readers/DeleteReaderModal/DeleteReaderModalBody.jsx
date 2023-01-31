import React from 'react';
import Box from '@mui/material/Box';
import DangerousIcon from '@mui/icons-material/Dangerous';
import Typography from '@mui/material/Typography';
import DeleteButtonSet from './DeleteButtonSet';

const DeleteReaderModalBody = ({ handleClose, handleDeleteReaderOnClick }) => {
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
                Removing this reader will remove his/her access to the platform.
            </Typography>
            <DeleteButtonSet handleClose={handleClose} handleDeleteReaderOnClick={handleDeleteReaderOnClick} />
        </Box>
    );
}

export default DeleteReaderModalBody;