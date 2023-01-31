import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import React from "react"

const UpdateReaderNameModalBody = ({ newReaderName, setNewReaderName }) => {
    return (
        <React.Fragment>
            <Typography sx={{
                fontSize: 14,
                paddingX: 3,
                marginTop: 1,
                lineHeight: 1,
                letterSpacing: 0.2,

            }}>
                Did the reader change his/her name?
            </Typography>
            <TextField
                autoFocus
                id="new-reader-name"
                name="new-reader-name"
                type="text"
                placeholder="New Reader Name"
                value={newReaderName}
                onChange={(e) => setNewReaderName(e.target.value)}
                sx={{
                    marginTop: 3,
                    marginRight: 2,
                    width: '300px'
                }}
            />
        </React.Fragment>
    )
}
export default UpdateReaderNameModalBody;