import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useMutation, useApolloClient } from '@apollo/client';
import { DELETE_READER, GET_READERS, READ_READER_FRAGMENT } from '../queries';
import OpenDeleteReaderDialogButton from './OpenDeleteReaderDialogButton';
import ModalTitle from '../../common/ModalTitle';
import DeleteReaderModalBody from './DeleteReaderModalBody';
import { ControllerContext } from '../../../containers/App';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 375,
    height: 275,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,

};

const DeleteReaderModal = ({ readerId }) => {
    const client = useApolloClient();
    const handleQueryEventResults = useContext(ControllerContext);
    const [deleteReader] = useMutation(DELETE_READER, {
        onCompleted: (data) => {
            handleQueryEventResults('delete-reader', true)();
            client.refetchQueries({
                include: [GET_READERS]
            })
        },
        onError:(err) => {
            console.log(err)
            handleQueryEventResults('delete-reader', false)();
        }
    });
    
    const { name: readerName } = client.readFragment({
        id: `Reader:${readerId}`,
        fragment: READ_READER_FRAGMENT
    })
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDeleteReaderOnClick = (e) => {
        e.preventDefault();
        deleteReader({
            variables: {
                readerId
            },
        })
        handleClose();  
    }
    return (
        <div>
            <OpenDeleteReaderDialogButton handleOpen={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <ModalTitle title='Delete Reader' entityIdentifyer={readerName} />
                    <DeleteReaderModalBody handleClose={handleClose} handleDeleteReaderOnClick={handleDeleteReaderOnClick} />
                </Box>
            </Modal>
        </div>
    );
}

export default DeleteReaderModal;