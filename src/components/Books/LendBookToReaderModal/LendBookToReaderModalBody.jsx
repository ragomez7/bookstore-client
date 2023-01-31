import TextField from "@mui/material/TextField"
import React from "react"
import { READ_BOOK_FRAGMENT } from "../queries"
import { useApolloClient } from "@apollo/client"
import ReadersSelectField from "./ReadersSelectField"
import AddNewReaderModal from "./AddNewReaderModal"
import { Box } from "@mui/material"

const LendBookToReaderModalBody = ({bookId, setReaderId }) => {
    
    const client = useApolloClient();
    const { title: bookName } = client.readFragment({
        id: `Book:${bookId}`,
        fragment: READ_BOOK_FRAGMENT
    })
    return (
        <React.Fragment>
            <Box>
            <TextField
            disabled={true}
            id="book-to-lend"
            type="text"
            value={bookName}
            label="Book to lend"
            size="small"
            sx={{
                width: '250px',
                marginTop: 2,
            }}
            
            />
            <ReadersSelectField
                setReaderId={setReaderId}
            />
            <AddNewReaderModal />
            </Box>
        </React.Fragment>
    )
}
export default LendBookToReaderModalBody;