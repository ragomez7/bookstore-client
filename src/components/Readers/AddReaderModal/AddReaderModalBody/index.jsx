import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import { useApolloClient, useMutation } from '@apollo/client';
import { GET_READERS } from '../../queries';
import { ADD_READER } from '../../queries';
import AddButtonSet from '../AddButonSet';
import ReaderNameTextField from './ReaderNameTextField';
import ReaderAgeTextField from './ReaderAgeTextField';
import ReaderEmailTextField from './ReaderEmailTextField';
import { ControllerContext } from '../../../../containers/App';


export const AddReaderFormContext = React.createContext(null);
const AddReaderModalBody = ({
    setOpen,
}) => {
    const handleQueryEventResults = useContext(ControllerContext);
    const [addReader] = useMutation(ADD_READER);
    const [readerName, setReaderName] = useState("");
    const [readerAge, setReaderAge] = useState(0);
    const [readerEmail, setReaderEmail] = useState("");
    const client = useApolloClient();
    const handleClose = () => setOpen(false);
    const handleAddReaderOnClick = (e) => {
        e.preventDefault();
        addReader({
            variables: {
                readerName,
                readerAge,
                readerEmail
            },
            onCompleted: (data) => {
                handleQueryEventResults("add-reader", true)()
                client.refetchQueries({
                    include: [GET_READERS]
                })
            },
            onError: (err) => {
                console.log(err)
                handleQueryEventResults("add-reader", false)();
            }
        })
        handleClose();
    }
    const readerFormState = {
        readerName,
        readerAge,
        readerEmail
    }
    return (
        <Box sx={{
            width: '100%',
            height: 150,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'start',
            paddingX: 4,
            marginTop: 3,
        }}>
            <AddReaderFormContext.Provider value={readerFormState}>
                <ReaderNameTextField readerName={readerName} setReaderName={setReaderName} />
                <ReaderAgeTextField readerAge={readerAge} setReaderAge={setReaderAge} />
                <ReaderEmailTextField readerEmail={readerEmail} setReaderEmail={setReaderEmail} />
                <AddButtonSet handleClose={handleClose} handleAddReaderOnClick={handleAddReaderOnClick} />
            </AddReaderFormContext.Provider>
        </Box>
    );
}

export default AddReaderModalBody;
