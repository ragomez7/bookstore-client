import React from 'react';
import Box from '@mui/material/Box';
import DeleteAuthorModal from '../../DeleteAuthorModal';
import EditAuthorNameModal from '../../EditAuthorNameModal';


const ManageAuthorsButtonSet = ({author, }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: "60px",
            justifyContent: 'space-between',
        }}>
            <EditAuthorNameModal authorId={author.id} />
            <DeleteAuthorModal authorId={author.id} />
        </Box>
    )
}

export default ManageAuthorsButtonSet;