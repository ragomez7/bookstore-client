import TextField from "@mui/material/TextField"

const BookThumbnailTextField = ({bookThumbnail, setBookThumbnail}) => {
    return (
        <TextField
            disabled
            id="book-thumbnail"
            type="text"
            label="Book Thumbnail Link"
            value={bookThumbnail}
            onChange={(e) => setBookThumbnail(e.target.value)}
            sx={{
                width: '250px'
            }} size="small" />
    )
};

export default BookThumbnailTextField;