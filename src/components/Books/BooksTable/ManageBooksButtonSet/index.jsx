import React from 'react';
import Box from '@mui/material/Box';
import DeleteBookModal from '../../DeleteBookModal';
import UpdateBookNameModal from '../../UpdateBookNameModal';
import LendBookToReaderModal from '../../LendBookToReaderModal';

const ManageBooksButtonSet = ({book}) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: "80px",
            justifyContent: 'space-between',
        }}>
            <LendBookToReaderModal bookId={book.id} />
            <UpdateBookNameModal bookId={book.id} />
            <DeleteBookModal bookId={book.id} />
        </Box>
    )
}

export default ManageBooksButtonSet;