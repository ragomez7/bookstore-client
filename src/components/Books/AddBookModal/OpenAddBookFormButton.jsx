import Button from "@mui/material/Button";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Typography } from "@mui/material";

const OpenAddBookFormButton = ({handleOpen}) => {
    return (
        <Button
            onClick={handleOpen}
            style={{
                border: '4px solid #2e7b33',
                width: 200,
                height: 200,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                marginLeft: -70,
                marginTop: 80
            }}>
            <AddCircleIcon sx={{
                width: 100,
                height: 100
            }} color="success" />
            <Typography sx={{
                color: '#2e7b33',
                marginTop: 1
            }}  >
                Add Book
            </Typography>
        </Button>
    )
};

export default OpenAddBookFormButton;