import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


const OpenDeleteAuthorDialogButton = ({handleOpen}) => {
    return (
        <Tooltip title="Delete Author">
        <IconButton sx={{
            p: 0,
            color: 'red',
        }} onClick={handleOpen}>
            <DeleteOutlineIcon sx={{
                    '&:hover': {
                        height: '26px',
                        width: '26px'
                    }
                }} />
        </IconButton>
        </Tooltip>
    )
};

export default OpenDeleteAuthorDialogButton;