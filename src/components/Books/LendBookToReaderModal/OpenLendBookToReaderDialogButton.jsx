import CableIcon from '@mui/icons-material/Cable';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const OpenLendBookToReaderDialogButton = ({ handleOpen }) => {
    return (
        <Tooltip title="Lend Book To Reader">
            <IconButton sx={{
                p: 0,
                color: '#EE964B',
                
            }} onClick={handleOpen}>
                <CableIcon sx={{
                    '&:hover': {
                        height: '26px',
                        width: '26px'
                    }
                }} />
            </IconButton>
        </Tooltip>
    )
};

export default OpenLendBookToReaderDialogButton;