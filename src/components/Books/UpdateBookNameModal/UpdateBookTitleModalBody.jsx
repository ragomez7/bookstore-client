import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import React from "react"

const UpdateBookTitleModalBody = ({newBookTitle, setNewBookTitle}) => {
    return (
        <React.Fragment>
            <Typography sx={{
                fontSize: 14,
                paddingX: 3,
                marginTop: 1,
                lineHeight: 1,
                letterSpacing: 0.2,

            }}>
                You want to add or delete some of this book's name?
            </Typography>
            <TextField 
                autoFocus 
                id="new-book-title" 
                name="new-book-title" 
                type="text" 
                placeholder="New Book Title" 
                value={newBookTitle} 
                onChange={(e) => setNewBookTitle(e.target.value)} 
                sx={{
                    marginTop: 3,
                    marginRight: 2,
                    width: '300px'
                }} 
            />
        </React.Fragment>
    )
}
export default UpdateBookTitleModalBody;