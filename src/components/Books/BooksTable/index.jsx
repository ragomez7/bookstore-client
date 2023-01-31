import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { GET_BOOKS } from '../queries';
import usePaginateTable from '../../common';
import BooksTableHead from './BooksTableHead';
import BooksTableBody from './BooksTableBody';
import SkeletonTable from './SkeletonTable';

const BooksTable = () => {
    const [limit] = useState(10);
    const [offset, currentPage, handleChangePage] = usePaginateTable();
    const [titleSearch, setTitleSearch] = useState("")
    const [booksCount, setBooksCount] = useState(0);
    let { data, loading } = useQuery(GET_BOOKS, {
        variables: {
            offset,
            limit,
            searchTitleTerm: titleSearch
        },
        onCompleted: (data) => {
            setBooksCount(data.getBooks.booksCount)
        },
        onError: (error) => {
            console.log(error)
        }
    });
    return (
        <Paper sx={{
            marginLeft: 10,
            border: '1px solid black',
            borderRadius: 4
        }}>
            <TableContainer sx={{
                width: '900px'
            }}>
                <Table>
                    <BooksTableHead titleSearch={titleSearch} setTitleSearch={setTitleSearch} />
                    {loading ? 
                        <SkeletonTable numberOfCellsInRows={4} /> 
                        : 
                        <BooksTableBody books={data?.getBooks.books} />
                    }
                    
                </Table>
            </TableContainer>
            <TablePagination
                component="div"
                count={booksCount}
                rowsPerPage={10}
                page={currentPage}
                onPageChange={handleChangePage}
            />
        </Paper>
    )
};

export default BooksTable;