import React from 'react';
import { TablePagination } from '@mui/material';

const ReadersTablePagination = ({
    currentPage,
    readersCount,
    handleChangePage,
}) => {
    

    return (
        <TablePagination
            component="div"
            count={readersCount}
            rowsPerPage={10}
            page={currentPage}
            onPageChange={handleChangePage}
        />
    )
};

export default ReadersTablePagination;