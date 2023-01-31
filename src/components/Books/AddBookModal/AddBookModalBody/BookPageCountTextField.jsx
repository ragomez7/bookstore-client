import TextField from "@mui/material/TextField"

const BookPageCountTextField = ({pageCount, setPageCount}) => {
    return (
        <TextField
            error={!pageCount}
            id="book-page-count"
            type="number"
            label="Page Count"
            value={pageCount}
            onChange={(e) => setPageCount(parseInt(e.target.value) || "")}
            sx={{
                width: '250px'
            }} size="small" />
    )
};

export default BookPageCountTextField;