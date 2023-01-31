import React from 'react';
import TableRow from '@mui/material/TableRow';
import { Skeleton } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { StyledTableCell } from '../../common/StyledTableCell';

const SkeletonRow = ({ numberOfCells }) => {
    const cellCount = new Array(numberOfCells);
    return (
        <TableRow key={uuid()}>
            {[...cellCount].map((e, i) => (
                <StyledTableCell>
                    <Skeleton />
                </StyledTableCell>
            ) )}
        </TableRow>
    )
};

export default SkeletonRow;