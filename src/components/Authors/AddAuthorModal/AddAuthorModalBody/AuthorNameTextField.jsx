import TextField from "@mui/material/TextField"

const AuthorNameTextField = ({authorName, setAuthorName}) => {
    return (
        <TextField
            autoFocus
            error={!authorName}
            id="author-name"
            type="text"
            label="Author name"
            required
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            sx={{
                width: '250px'
            }} size="small" />
    )
};

export default AuthorNameTextField;