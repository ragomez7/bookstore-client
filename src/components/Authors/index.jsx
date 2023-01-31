import React, { useEffect } from 'react';
import Header from '../../containers/Header';
import AddAuthorModal from './AddAuthorModal';
import AuthorsTable from './AuthorsTable';
import Layout from '../../containers/Layout';

const Authors = () => {
    useEffect(() => {
        document.title = "Authors - John's Bookstore"
    }, [])


    return (
        <div>
            <Header />
            <Layout title="Authors">

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <AddAuthorModal />
                    <AuthorsTable />
                </div>
            </Layout>
        </div>
    )
};

export default Authors;