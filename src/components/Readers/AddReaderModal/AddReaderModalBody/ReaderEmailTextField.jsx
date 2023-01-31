import TextField from "@mui/material/TextField"
import validator from 'email-validator'

const ReaderEmailTextField = ({readerEmail, setReaderEmail}) => {
    return (
        <TextField
            error={!validator.validate(readerEmail)}
            id="reader-email"
            type="text"
            label="Email"
            required
            value={readerEmail}
            onChange={(e) => setReaderEmail(e.target.value)}
            sx={{
                width: '300px',
                marginTop: 2,
            }} size="small" />
    )
};

export default ReaderEmailTextField;