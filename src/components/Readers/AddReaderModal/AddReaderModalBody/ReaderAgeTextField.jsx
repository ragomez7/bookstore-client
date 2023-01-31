import TextField from "@mui/material/TextField"

const ReaderAgeTextField = ({readerAge, setReaderAge}) => {
    return (
        <TextField
            error={!readerAge}
            id="reader-age"
            type="number"
            label="Age"
            required
            value={readerAge}
            onChange={(e) => setReaderAge(parseInt(e.target.value))}
            sx={{
                width: '100px',
                marginLeft: 3,
            }} size="small" />
    )
};

export default ReaderAgeTextField;