import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import React from "react"
const UpdateAuthorNameModalBody = ({newAuthorName, setNewAuthorName}) => {
    return (
        <React.Fragment>
            <Typography sx={{
                fontSize: 14,
                paddingX: 3,
                marginTop: 1,
                lineHeight: 1,
                letterSpacing: 0.2,

            }}>
                Did the author change his/her name or you want to add a middle or last name?
            </Typography>
            <TextField autoFocus id="new-author-name" name="new-author-name" type="text" placeholder="New Author Name" value={newAuthorName} onChange={(e) => setNewAuthorName(e.target.value)} sx={{
                marginTop: 3,
                marginRight: 2,
                width: '300px'
            }} />
        </React.Fragment>
    )
}
export default UpdateAuthorNameModalBody;