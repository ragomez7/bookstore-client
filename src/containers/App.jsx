import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { useSnackbar } from 'notistack';
import Books from '../components/Books';
import Authors from '../components/Authors';
import Readers from '../components/Readers';
import Index from './Index';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />
    },
    {
        path: "/books",
        element: <Books />
    },
    {
        path: "/authors",
        element: <Authors />
    },
    {
        path: "/readers",
        element: <Readers />
    }
])

export const client = new ApolloClient({
    uri: 'https://johns-bookstore-graphql-server.herokuapp.com/',
    cache: new InMemoryCache({
        typePolicies: {
            Author: {
                fields: {
                    name: {
                        read(name) {
                            return name.toUpperCase();
                        }
                    },
                    countryOfBirth: {
                        read(countryOfBirth) {
                            for (const char of countryOfBirth) {
                                if (char === "(") {
                                    break;
                                }
                            }
                            return countryOfBirth;
                        }
                    }
                }
            }
        }
    })
});


export const ControllerContext = React.createContext(null);

const App = () => {
    const { enqueueSnackbar } = useSnackbar();
    const handleQueryEventResults = (action, success) => () => {
        switch (action) {
            case 'add-author':
                if (success) {
                    enqueueSnackbar('Author added succesfully!', { variant: 'success' });
                } else {
                    enqueueSnackbar('There was an error adding the author.', { variant: 'error' });
                }
                break;
            case 'update-author':
                if (success) {
                    enqueueSnackbar('Author name updated succesfully!', { variant: 'success' });
                } else {
                    enqueueSnackbar('There was an error updating the name.', { variant: 'error' });
                }
                break;
            case 'delete-author':
                if (success) {
                    enqueueSnackbar('Author was deleted succesfully.', { variant: 'success' });
                } else {
                    enqueueSnackbar('There was an error deleting the author.', { variant: 'error' });
                }
                break;
            case 'add-book':
                if (success) {
                    enqueueSnackbar('Book added succesfully!', { variant: 'success' });
                } else {
                    enqueueSnackbar('There was an error adding the book.', { variant: 'error' });
                }
                break;
            case 'update-book':
                if (success) {
                    enqueueSnackbar('Book title updated succesfully!', { variant: 'success' });
                } else {
                    enqueueSnackbar('There was an error updating the book title.', { variant: 'error' });
                }
                break;
            case 'delete-book':
                if (success) {
                    enqueueSnackbar('Book was deleted succesfully.', { variant: 'success' });
                } else {
                    enqueueSnackbar('There was an error deleting the book.', { variant: 'error' });
                }
                break;
            case 'lend-book-to-reader':
                if (success) {
                    enqueueSnackbar('Book was lent to reader.', { variant: 'success' });
                } else {
                    enqueueSnackbar('There was an error lending this book to this user.', { variant: 'error' })
                }
                break;
                case 'add-reader':
                    if (success) {
                        enqueueSnackbar('Reader added succesfully!', { variant: 'success' });
                    } else {
                        enqueueSnackbar('There was an error adding the reader.', { variant: 'error' });
                    }
                    break;
                case 'update-reader':
                    if (success) {
                        enqueueSnackbar('Reader name updated succesfully!', { variant: 'success' });
                    } else {
                        enqueueSnackbar('There was an error updating the name.', { variant: 'error' });
                    }
                    break;
                case 'delete-reader':
                    if (success) {
                        enqueueSnackbar('Reader was deleted succesfully.', { variant: 'success' });
                    } else {
                        enqueueSnackbar('There was an error deleting the reader.', { variant: 'error' });
                    }
                    break;
            default:
                break;
        }
    };
    return (
        <ApolloProvider client={client}>
            <ControllerContext.Provider value={handleQueryEventResults}>
                <RouterProvider router={router}>
                </RouterProvider>
            </ControllerContext.Provider>

        </ApolloProvider>
    )
};
export default App