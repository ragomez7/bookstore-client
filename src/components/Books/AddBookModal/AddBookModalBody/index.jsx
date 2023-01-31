import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import { useMutation } from '@apollo/client';
import { ADD_BOOK, GET_BOOKS } from '../../queries';
import AddButtonSet from '../AddButtonSet';
import BookTitleTextField from './BookTitleTextField';
import BookAuthorSelectField from './BookAuthorSelectField';
import BookPageCountTextField from './BookPageCountTextField';
import BookThumbnailTextField from './BookThumbnailTextField';
import AddAuthorModal from './AddAuthorModal';
import { useApolloClient } from '@apollo/client';
import { ControllerContext } from '../../../../containers/App';

export const AddBookFormContext = React.createContext(null);
const AddBookModalBody = ({
    setOpen
}) => {
    const handleQueryEventResults = useContext(ControllerContext);
    const [bookTitle, setBookTitle] = useState("");
    const [authorId, setAuthorId] = useState("");
    const [pageCount, setPageCount] = useState(0);
    const [bookThumbnail, setBookThumbnail] = useState(null);
    const [addBook] = useMutation(ADD_BOOK);
    const handleClose = () => setOpen(false);
    const client = useApolloClient()
    const handleAddBookOnClick = (e) => {
        e.preventDefault();
        addBook({
            variables: {
                bookTitle,
                authorId,
                pageCount,
                bookThumbnail
            },
            onCompleted: async (data) => {
                handleQueryEventResults("add-book", true)();
                client.refetchQueries({
                    include: [GET_BOOKS]
                })
            },
            onError: (err) => {
                console.log(err)
                handleQueryEventResults("add-book", false)();
            }
        })
        handleClose();
    }
    const addBookFormState = {
        bookTitle,
        authorId,
        pageCount
    };
    return (
        <Box sx={{
            width: '100%',
            height: 200,
        }}>
            <AddAuthorModal />
            <Box sx={{
                width: '100%',
                height: 200,
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginTop: 4
            }}>
                <AddBookFormContext.Provider value={addBookFormState}>
                    <BookTitleTextField bookTitle={bookTitle} setBookTitle={setBookTitle} />
                    <BookAuthorSelectField authorId={authorId} setAuthorId={setAuthorId} />
                    <BookPageCountTextField pageCount={pageCount} setPageCount={setPageCount} />
                    <BookThumbnailTextField bookThumbnail={bookThumbnail} setBookThumbnail={setBookThumbnail} />
                    <AddButtonSet handleClose={handleClose} handleAddBookOnClick={handleAddBookOnClick} />
                </AddBookFormContext.Provider>
            </Box>
        </Box>
    );
}

export default AddBookModalBody;
