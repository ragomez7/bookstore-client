import { Button } from "@mui/material";
import AddAuthorModalHOC from "../../../Authors/AddAuthorModal/AddAuthorModalHOC";

const ButtonComponent = ({handleOpen}) => {
    return (
        <Button
            onClick={handleOpen}
            sx={{
                marginLeft: 43,
                display: 'flex',
                justifyContent: 'end',
                position: 'absolute',
                top: 60
            }}
        >
            Add new author?
        </Button>
    )
}
export default AddAuthorModalHOC(ButtonComponent);