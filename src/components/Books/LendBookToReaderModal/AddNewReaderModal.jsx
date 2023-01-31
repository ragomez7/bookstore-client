import { Button } from "@mui/material";
import AddReaderModalHOC from "../../Readers/AddReaderModal/AddReaderModalHOC";

const OpenAddReaderToLendFormButton = ({ handleOpen }) => {
    return (
        <Button
            onClick={handleOpen}
            sx={{
                marginTop: 1
            }}
        >
            New Reader?
        </Button>
    )
};

export default AddReaderModalHOC(OpenAddReaderToLendFormButton);