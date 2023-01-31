import styled from '@emotion/styled';
import TableCell from '@mui/material/TableCell';

export const StyledTableCell = styled(TableCell)((isNameCell = false) => {
    const styles = {
        borderBottom: '1px solid black'
    };
    return styles
})