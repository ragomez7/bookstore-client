import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
const PassedAwayCheckbox = ({ checked, setChecked }) => {
    return (
        <Typography
            variant="body2"
            sx={{
                width: '250px',
                marginTop: 2,
            }}
        >
            Has the author passed away?
            <Checkbox
                required
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
            />
        </Typography>
    )
};

export default PassedAwayCheckbox;