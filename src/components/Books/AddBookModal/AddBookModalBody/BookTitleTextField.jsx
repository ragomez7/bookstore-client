import TextField from "@mui/material/TextField"

const BookTitleTextField = ({bookTitle, setBookTitle}) => {
    return (
        <TextField
            autoFocus
            error={!bookTitle}
            id="book-title"
            type="text"
            label="Book Title"
            required
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
            sx={{
                width: '250px'
            }} size="small" />
    )
};

export default BookTitleTextField;