import React from 'react';
import { Box } from '@mui/material';
import Header from '../../containers/Header';
import AddReaderModal from './AddReaderModal';
import ReadersTable from './ReadersTable';
import Layout from '../../containers/Layout';
import { useEffect } from 'react';
const Readers = () => {
    useEffect(() => {
        document.title = "Readers - John's Bookstore"
    }, [])

    return (
        <div>
            <Header />
            <Layout title='Readers' >
                <Box sx={{
                    display: 'flex'
                }}>
                    <AddReaderModal />
                    <ReadersTable />
                </Box>
            </Layout>
        </div>
    )
};

export default Readers;