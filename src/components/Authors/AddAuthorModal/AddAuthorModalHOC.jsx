import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ModalTitle from '../../common/ModalTitle';
import AddAuthorModalBody from './AddAuthorModalBody';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 630,
    height: 270,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,

};

const AddAuthorModalHOC = (Component) => {
    const HOCFunction = () => {
        const [open, setOpen] = useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
    
        return (
            <div>
                <Component handleOpen={handleOpen} />
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <Box sx={style}>
                        <ModalTitle title={'Add Author'} />
                        <AddAuthorModalBody 
                            setOpen={setOpen}
                        />
                    </Box>
                </Modal>
            </div>
        );
    };
    return HOCFunction;
    
}

export default AddAuthorModalHOC;
