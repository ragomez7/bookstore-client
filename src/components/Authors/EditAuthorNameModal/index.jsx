import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useMutation, useApolloClient } from '@apollo/client';
import { UPDATE_AUTHOR_NAME_BY_ID, READ_AUTHOR_FRAGMENT } from '../queries';
import OpenEditAuthorNameDialogButton from './OpenEditAuthorNameDialogButton';
import ModalTitle from '../../common/ModalTitle';
import EditButtonSet from './UpdateAuthorButtonSet';
import UpdateAuthorNameModalBody from './UpdateAuthorNameModalBody';
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




const EditAuthorNameModal = ({ authorId }) => {
    const handleQueryEventResults = useContext(ControllerContext);
    const [updateAuthorName] = useMutation(UPDATE_AUTHOR_NAME_BY_ID, {
        onCompleted: (data) => {
            handleQueryEventResults("update-author", true)()
        },
        onError: (err) => {
            handleQueryEventResults("update-author", false)()
        }
    });
    const client = useApolloClient();
    const { name: authorName } = client.readFragment({
        id: `Author:${authorId}`,
        fragment: READ_AUTHOR_FRAGMENT
    })
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const [newAuthorName, setNewAuthorName] = useState("");
    const handleClose = (event, reason) => {
        setOpen(false);
    };



    const handleUpdateAuthorOnClick = (e) => {
        e.preventDefault();
        updateAuthorName({
            variables: {
                authorId,
                newAuthorName
            },
            refetchQueries: [
                'GetAuthors'
            ]
        })
        handleClose();
    }
    return (
        <div>
            <OpenEditAuthorNameDialogButton handleOpen={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <ModalTitle title="Edit Author" entityIdentifyer={authorName} />
                    <Box sx={{
                        width: '100%',
                        height: 150,
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        marginTop: 1,
                        flexDirection: 'row'
                    }}>
                        <UpdateAuthorNameModalBody newAuthorName={newAuthorName} setNewAuthorName={setNewAuthorName} />
                        <EditButtonSet handleClose={handleClose} handleUpdateAuthorOnClick={handleUpdateAuthorOnClick} />
                    </Box>
                </Box>
            </Modal>

        </div>
    );
}

export default EditAuthorNameModal;