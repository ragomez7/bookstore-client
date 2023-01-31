import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import { useApolloClient, useMutation } from '@apollo/client';
import { GET_AUTHORS } from '../../queries';
import { ADD_AUTHOR } from '../../queries';
import CountrySelect from './CountrySelect';
import BirthDatePicker from './BirthDatePicker';
import PassedAwayCheckbox from './PassedAwayCheckbox';
import AuthorNameTextField from './AuthorNameTextField';
import AddButtonSet from '../AddButonSet';
import { ControllerContext } from '../../../../containers/App';

export const AddAuthorFormContext = React.createContext(null);
const AddAuthorModalBody = ({
    setOpen,
}) => {
    const handleQueryEventResults = useContext(ControllerContext);
    const [addAuthor] = useMutation(ADD_AUTHOR);
    const [authorName, setAuthorName] = useState("");
    const [countryOfBirth, setCountryOfBirth] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [isDead, setIsDead] = useState(false);
    const handleClose = () => setOpen(false);
    const client = useApolloClient()
    const handleAddAuthorOnClick = (e) => {
        e.preventDefault();
        addAuthor({
            variables: {
                author: {
                    authorName,
                    countryOfBirth,
                    birthDate,
                    isDead
                }
            },
            onCompleted: (data) => {
                handleQueryEventResults("add-author", true)()
                client.refetchQueries({
                    include: [GET_AUTHORS]
                })
            },
            onError: (err) => {
                handleQueryEventResults("add-author", false)()
            }
        })
        handleClose();
    }
    const addAuthorFormState = {
        authorName,
        countryOfBirth,
        birthDate
    };
    return (
        <Box sx={{
            width: '100%',
            height: 150,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginTop: 3,
        }}>
            <AddAuthorFormContext.Provider value={addAuthorFormState}>
                <AuthorNameTextField authorName={authorName} setAuthorName={setAuthorName} />
                <CountrySelect countryOfBirth={countryOfBirth} setCountryOfBirth={setCountryOfBirth} />
                <BirthDatePicker birthDate={birthDate} setBirthDate={setBirthDate} />
                <PassedAwayCheckbox checked={isDead} setChecked={setIsDead} />
                <AddButtonSet handleClose={handleClose} handleAddAuthorOnClick={handleAddAuthorOnClick} />
            </AddAuthorFormContext.Provider>
        </Box>
    );
}

export default AddAuthorModalBody;
