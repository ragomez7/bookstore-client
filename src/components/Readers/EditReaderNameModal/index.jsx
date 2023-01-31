import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useMutation, useApolloClient } from '@apollo/client';
import { GET_READERS, READ_READER_FRAGMENT, UPDATE_READER_NAME_BY_ID } from '../queries';
import OpenEditReaderNameDialogButton from './OpenEditReaderNameDialogButton';
import ModalTitle from '../../common/ModalTitle';
import EditButtonSet from './UpdateReaderButtonSet';
import UpdateReaderNameModalBody from './UpdateReaderNameModalBody';
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

const EditReaderNameModal = ({ readerId }) => {
    const client = useApolloClient();
    const handleQueryEventResults = useContext(ControllerContext);
    const [updateReaderName] = useMutation(UPDATE_READER_NAME_BY_ID, {
        onCompleted: (data) => {
            handleQueryEventResults("update-reader", true)()
            client.refetchQueries({
                include: [GET_READERS]
            })
        },
        onError: (err) => {
            console.log(err)
            handleQueryEventResults("update-reader", false)()
        }
    });
    const { name: readerName } = client.readFragment({
        id: `Reader:${readerId}`,
        fragment: READ_READER_FRAGMENT
    })
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const [newReaderName, setNewReaderName] = useState("");
    const handleClose = () => {
        setOpen(false);
    };

    const handleUpdateReaderOnClick = (e) => {
        e.preventDefault();
        updateReaderName({
            variables: {
                readerId,
                newReaderName
            },
        })
        handleClose();
    }
    return (
        <div>
            <OpenEditReaderNameDialogButton handleOpen={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <ModalTitle title="Edit Reader" entityIdentifyer={readerName} />
                    <Box sx={{
                        width: '100%',
                        height: 150,
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        marginTop: 1,
                        flexDirection: 'row'
                    }}>
                        <UpdateReaderNameModalBody newReaderName={newReaderName} setNewReaderName={setNewReaderName} />
                        <EditButtonSet handleClose={handleClose} handleUpdateReaderOnClick={handleUpdateReaderOnClick} />
                    </Box>
                </Box>
            </Modal>

        </div>
    );
}

export default EditReaderNameModal;