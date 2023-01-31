import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const PortalButton = ({ title, linkTo, backgroundColor }) => {
    return (
        <Link to={linkTo} style={{ textDecoration: 'none' }}>
            <Button
                variant="outlined"
            sx={{
              backgroundColor,
              borderRadius: 4,
              width: '300px',
              height: '300px',
              color: 'black',
              fontSize: 36
            }} >
              {title}
            </Button>
          </Link>
    )
};

export default PortalButton;