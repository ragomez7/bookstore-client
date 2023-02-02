import React from 'react';
import { useQuery } from '@apollo/client';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { GET_READERS } from '../queries';
import { useState } from 'react';
import ReadersTablePagination from './ReadersTablePagination';
import usePaginateTable from '../../common';
import ReadersTableHead from './ReadersTableHead';
import ReadersTableBody from './ReadersTableBody';
import SkeletonTable from '../../common/SkeletonTable';

const ReadersTable = () => {
    const [readersCount, setReadersCount] = useState(0);
    const [limit] = useState(10);
    const [offset, currentPage, handleChangePage] = usePaginateTable();
    const [readerNameTerm, setReaderNameTerm] = useState("")
    let { data, loading } = useQuery(GET_READERS, {
        variables: {
            offset,
            limit,
            readerNameTerm
        },
        onCompleted: (data) => {
            setReadersCount(data.getReaders.readersCount);
        },
        onError: (err) => {
            console.log(err)
        }
    });
    return (
        <Paper sx={{
            marginLeft: 10,
            border: '1px solid black',
            borderRadius: 4
        }}>
            <TableContainer sx={{
                width: '900px',
            }}>
                <Table>
                    <ReadersTableHead readerNameTerm={readerNameTerm} setReaderNameTerm={setReaderNameTerm} />
                    {loading ? <SkeletonTable /> :
                    <ReadersTableBody readers={data?.getReaders.readers}/>}
                </Table>
            </TableContainer>
            <ReadersTablePagination
                currentPage={currentPage}
                readersCount={readersCount}
                handleChangePage={handleChangePage}
            />
        </Paper>
    )
};

export default ReadersTable;