import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useMutation, useApolloClient, gql } from '@apollo/client';
import ModalTitle from '../../common/ModalTitle';
import EditButtonSet from './UpdateBookTitleButtonSet';
import { READ_BOOK_FRAGMENT, UPDATE_BOOK_TITLE } from '../queries';
import UpdateBookTitleModalBody from './UpdateBookTitleModalBody';
import OpenUpdateBookTitleDialogButton from './OpenUpdateBookTitleDialogButton';
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


const UpdateBookNameModal = ({ bookId }) => {
    const handleQueryEventResults = useContext(ControllerContext);
    const [updateBookTitle] = useMutation(UPDATE_BOOK_TITLE, {
        onCompleted: (data) => {
            client.writeFragment({
                id: `Book:${bookId}`,
                fragment: gql`
                    fragment WriteNewTitle on Book {
                        title
                    }
                `,
                data: {
                    title: data.updateBookTitle.title
                }
            })
            handleQueryEventResults("update-book", true)()
        },
        onError: (err) => {
            console.log(err)
            handleQueryEventResults("update-book", false)()
        }
    });
    const client = useApolloClient();
    const { title: bookName } = client.readFragment({
        id: `Book:${bookId}`,
        fragment: READ_BOOK_FRAGMENT
    })
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const [newBookTitle, setNewBookTitle] = useState("");
    const handleClose = (event, reason) => {
        setOpen(false);
    };

    const handleUpdateBookTitleOnClick = (e) => {
        e.preventDefault();
        updateBookTitle({
            variables: {
                bookId,
                newBookTitle
            },
            refetchQueries: [
                'GetBooks'
            ]
        })
        handleClose();
    }
    return (
        <div>
            <OpenUpdateBookTitleDialogButton handleOpen={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <ModalTitle title="Update Book Name" entityIdentifyer={bookName} />
                    <Box sx={{
                        width: '100%',
                        height: 150,
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        marginTop: 1,
                        flexDirection: 'row'
                    }}>
                        <UpdateBookTitleModalBody newBookTitle={newBookTitle} setNewBookTitle={setNewBookTitle} />
                        <EditButtonSet handleClose={handleClose} handleUpdateBookTitleOnClick={handleUpdateBookTitleOnClick} />
                    </Box>
                </Box>
            </Modal>

        </div>
    );
}

export default UpdateBookNameModal;