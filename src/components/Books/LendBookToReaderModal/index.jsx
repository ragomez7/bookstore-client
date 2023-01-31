import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useMutation, useApolloClient, gql } from '@apollo/client';
import ModalTitle from '../../common/ModalTitle';
import EditButtonSet from './LendBookToReaderButtonSet';
import { ADD_READER_TO_BOOK } from '../../Readers/queries';
import LendBookToReaderModalBody from './LendBookToReaderModalBody';
import OpenLendBookToReaderDialogButton from './OpenLendBookToReaderDialogButton';
import { ControllerContext } from '../../../containers/App';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 375,
    height: 290,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,

};

const LendBookToReaderModal = ({ bookId }) => {
    const handleQueryEventResults = useContext(ControllerContext);
    const [addReaderToBook] = useMutation(ADD_READER_TO_BOOK, {
        onCompleted: async (data) => {
            handleQueryEventResults("lend-book-to-reader", true)()
            console.log('1')
            console.log(data.addReaderToBook.id)
            const readerBooksArray = client.readFragment({
                id: `Reader:${readerId}`,
                fragment: gql`
                    fragment ReadBookArrayFromReader on Reader {
                        books {
                            id
                        }
                    }
                `
            });
            client.writeFragment({
                id: `Reader:${readerId}`,
                fragment: gql`
                    fragment WriteBookToReader on Reader {
                        books
                    }
                `,
                data: {
                    books: [...readerBooksArray.books, {"id": bookId}]
                }
            })
            const bookReadersArray = client.readFragment({
                id: `Book:${bookId}`,
                fragment: gql`
                    fragment ReadReaderArrayFromBook on Book {
                        readers {
                            id
                        }
                    }
                `
            });
            console.log('2')
            console.log(bookReadersArray)
            client.writeFragment({
                id: `Book:${bookId}`,
                fragment: gql`
                    fragment WriteReaderToBook on Book {
                        readers
                    }
                `,
                data: {
                    readers: [...bookReadersArray.readers, {typename: `Reader`,  id: data.addReaderToBook.id}]
                }
            })
        },
        onError: (err) => {
            console.log(err)
            handleQueryEventResults("lend-book-to-reader", false)()
        }
    });
    const client = useApolloClient();
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const [readerId, setReaderId] = useState("");
    const handleClose = (event, reason) => {
        setOpen(false);
    };
    

    const handleLendBookToReaderOnClick = (e) => {
        e.preventDefault();
        addReaderToBook({
            variables: {
                bookId,
                readerId
            },
        })
        
        handleClose();
    }
    return (
        <div>
            <OpenLendBookToReaderDialogButton handleOpen={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <ModalTitle title="Lend Book To Reader" />
                    <Box sx={{
                        width: '100%',
                        height: 200,
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'start',
                        paddingX: 3,
                        marginTop: 1,
                        flexDirection: 'row'
                    }}>
                        <LendBookToReaderModalBody bookId={bookId} setReaderId={setReaderId}  />
                        <EditButtonSet handleClose={handleClose} handleLendBookToReaderOnClick={handleLendBookToReaderOnClick} />
                    </Box>
                </Box>
            </Modal>

        </div>
    );
}

export default LendBookToReaderModal;