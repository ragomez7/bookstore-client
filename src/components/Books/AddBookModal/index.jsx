import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import OpenAddBookFormButton from './OpenAddBookFormButton';
import ModalTitle from '../../common/ModalTitle';
import AddBookModalBody from './AddBookModalBody';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 630,
    height: 320,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,

};

const AddBookModal = () => {
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <OpenAddBookFormButton handleOpen={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <ModalTitle title={'Add Book'} />
                    <AddBookModalBody 
                        setOpen={setOpen}
                    />
                </Box>
            </Modal>
        </div>
    );
}

export default AddBookModal;
