import TextField from "@mui/material/TextField"

const ReaderNameTextField = ({readerName, setReaderName}) => {
    return (
        <TextField
            autoFocus
            error={!readerName}
            id="reader-name"
            type="text"
            label="Reader name"
            required
            value={readerName}
            onChange={(e) => setReaderName(e.target.value)}
            sx={{
                width: '250px'
            }} size="small" />
    )
};

export default ReaderNameTextField;