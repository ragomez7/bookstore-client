import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useMutation, useApolloClient } from '@apollo/client';
import { DELETE_AUTHOR_BY_ID, READ_AUTHOR_FRAGMENT } from '../queries';
import OpenDeleteAuthorDialogButton from './OpenDeleteAuthorDialogButton';
import ModalTitle from '../../common/ModalTitle';
import DeleteAuthorModalBody from './DeleteAuthorModalBody';
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

const DeleteAuthorModal = ({ authorId }) => {
    const handleQueryEventResults = useContext(ControllerContext)
    const [deleteAuthor] = useMutation(DELETE_AUTHOR_BY_ID, {
        onCompleted: (data) => {
            handleQueryEventResults('delete-author', true)();
        },
        onError:(err) => {
            handleQueryEventResults('delete-author', false)();
        }
    });
    const client = useApolloClient();
    const { name: authorName } = client.readFragment({
        id: `Author:${authorId}`,
        fragment: READ_AUTHOR_FRAGMENT
    })
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDeleteAuthorOnClick = (e) => {
        e.preventDefault();
        deleteAuthor({
            variables: {
                authorId
            },
            refetchQueries: [
                'GetAuthors'
            ]
        })
        handleClose();
        
    }
    return (
        <div>
            <OpenDeleteAuthorDialogButton handleOpen={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <ModalTitle title='Delete Author' entityIdentifyer={authorName} />
                    <DeleteAuthorModalBody handleClose={handleClose} handleDeleteAuthorOnClick={handleDeleteAuthorOnClick} />
                </Box>
            </Modal>
        </div>
    );
}

export default DeleteAuthorModal;