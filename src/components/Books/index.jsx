import React, { useEffect } from 'react';
import Header from '../../containers/Header';
import AddBookModal from './AddBookModal';
import BooksTable from './BooksTable';
import Layout from '../../containers/Layout';


const Books = () => {
    useEffect(() => {
        document.title = "Books - John's Bookstore"
    }, [])

    return (
        <div>
            <Header />
            <Layout title='Books'>
                <div style={{
                    display: 'flex',
                }}>
                    <AddBookModal />
                    <BooksTable />
                </div>
            </Layout>
        </div>
    )
};

export default Books;