import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


const OpenEditAuthorNameDialogButton = ({ handleOpen }) => {
    return (
        <Tooltip title="Edit Author">
            <IconButton sx={{
                p: 0,
                color: '#0D3B66',
            }} onClick={handleOpen}>
                <EditIcon sx={{
                    '&:hover': {
                        height: '26px',
                        width: '26px'
                    }
                }} />
            </IconButton>
        </Tooltip>
    )
};

export default OpenEditAuthorNameDialogButton;