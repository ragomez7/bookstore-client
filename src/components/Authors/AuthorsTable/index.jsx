import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { Box, TablePagination } from '@mui/material';
import { GET_AUTHORS } from '../queries';
import usePaginateTable from '../../common';
import AuthorsTableHead from './AuthorsTableHead';
import AuthorsTableBody from './AuthorsTableBody';
import SkeletonTable from '../../common/SkeletonTable';

const AuthorsTable = () => {
    const [limit] = useState(10);
    const [offset, currentPage, handleChangePage] = usePaginateTable();
    const [authorNameSearch, setAuthorNameSearch] = useState("")
    const [authorsCount, setAuthorsCount] = useState(0);
    const [countrySearch, setCountrySearch] = useState("");
    const { data, loading } = useQuery(GET_AUTHORS, {
        variables: {
            offset,
            limit,
            authorNameSearch,
            countrySearch
        },
        onCompleted: (data) => {
            setAuthorsCount(data.getAuthors.authorsCount);
        }
    });

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: 8,
        }}>
            <Paper>
                <TableContainer sx={{
                    width: '900px',
                    border: '1px solid black',
                    borderRadius: 4,
                }}>
                    <Table>
                        <AuthorsTableHead authorNameSearch={authorNameSearch} setAuthorNameSearch={setAuthorNameSearch} setCountrySearch={setCountrySearch} />
                        {loading ?
                            <SkeletonTable /> :
                            <AuthorsTableBody authors={data?.getAuthors.authors} />}
                    </Table>
                </TableContainer>
                <TablePagination
                    component="div"
                    count={authorsCount}
                    rowsPerPage={10}
                    page={currentPage}
                    onPageChange={handleChangePage}
                />
            </Paper>
        </Box>
    )
};

export default AuthorsTable;