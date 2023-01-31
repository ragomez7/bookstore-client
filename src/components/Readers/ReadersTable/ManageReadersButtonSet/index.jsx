import React from 'react';
import Box from '@mui/material/Box';
import EditReaderNameModal from '../../EditReaderNameModal';
import DeleteReaderModal from '../../DeleteReaderModal';

const ManageReadersButtonSet = ({ reader }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: "80px",
            justifyContent: 'space-between',
        }}>
            <EditReaderNameModal readerId={reader.id} />
            <DeleteReaderModal readerId={reader.id} />
        </Box>
    )
}

export default ManageReadersButtonSet;