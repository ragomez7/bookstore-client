import Button from '@mui/material/Button';

const LendBookToReaderButton = ({ handleLendBookToReaderOnClick }) => {
    return (
        <Button variant="contained" onClick={handleLendBookToReaderOnClick} sx={{
            backgroundColor: 'brown',
            width: '150px',
            height: '36.5px',
            fontSize: 12,
            p: 0
        }}>
            Lend
        </Button>
    )
}

export default LendBookToReaderButton;