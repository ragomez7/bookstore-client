import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const ModalTitle = ({ title, entityIdentifyer }) => {
    return (
        <>
            <Typography sx={{
                paddingLeft: 3,
                height: 50,
                display: 'flex',
                alignItems: 'center'
            }}>
                {entityIdentifyer ? `${title} - ${entityIdentifyer}` : `${title}`}
            </Typography>
            <Divider />
        </>
    )
};

export default ModalTitle;