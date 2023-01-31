import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ModalTitle from '../../common/ModalTitle';
import AddReaderModalBody from './AddReaderModalBody';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    height: 250,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,

};

const AddReaderModalHOC = (Component) => {
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
                        <ModalTitle title={'Add Reader'} />
                        <AddReaderModalBody
                            setOpen={setOpen}
                        />
                    </Box>
                </Modal>
            </div>
        );
    };
    return HOCFunction;


}

export default AddReaderModalHOC;
