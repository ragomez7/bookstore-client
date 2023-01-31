import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useMutation, useApolloClient } from '@apollo/client';
import { READ_BOOK_FRAGMENT } from '../queries';
import OpenDeleteAuthorDialogButton from './OpenDeleteBookDialogButton';
import ModalTitle from '../../common/ModalTitle';
import DeleteBookModalBody from './DeleteBookModalBody';
import { DELETE_BOOK_BY_ID } from '../queries';
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

const DeleteBookModal = ({ bookId }) => {
    const handleQueryEventResults = useContext(ControllerContext);
    const [deleteBook] = useMutation(DELETE_BOOK_BY_ID, {
        onCompleted: (data) => {
            handleQueryEventResults('delete-book', true)();
        },
        onError: (err) => {
            handleQueryEventResults('delete-book', false)();
        }
    });
    const client = useApolloClient();
    const { title: bookTitle } = client.readFragment({
        id: `Book:${bookId}`,
        fragment: READ_BOOK_FRAGMENT
    })
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDeleteBookOnClick = (e) => {
        e.preventDefault();
        deleteBook({
            variables: {
                bookId
            },
            refetchQueries: [
                'GetBooks'
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
                    <ModalTitle title='Delete Book' entityIdentifyer={bookTitle} />
                    <DeleteBookModalBody handleClose={handleClose} handleDeleteBookOnClick={handleDeleteBookOnClick} />
                </Box>
            </Modal>
        </div>
    );
}

export default DeleteBookModal;