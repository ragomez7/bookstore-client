import TextField from "@mui/material/TextField";
const AuthorNameSearchField = ({ authorNameSearch, setAuthorNameSearch }) => {
    return (
        <TextField
            id="author-name-search-field"
            name="author-name-search-field"
            type="text"
            size="small"
            placeholder="Filter by name"
            autoFocus
            value={authorNameSearch}
            onChange={(e) => setAuthorNameSearch(e.target.value)}
        />
    )
};
export default AuthorNameSearchField;