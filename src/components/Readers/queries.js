import { gql } from '@apollo/client';

export const GET_READERS = gql`
    query GetReaders($offset: Int, $limit: Int, $readerNameTerm: String) {
        getReaders(offset: $offset, limit: $limit, readerNameTerm: $readerNameTerm) {
            readers {
            id
            email
            name
            age
            books {
                id
                }
            }
            readersCount
        }
    }
`;

export const ADD_READER = gql`
    mutation AddReader($readerName: String!, $readerAge: Int!, $readerEmail: String!) {
        addReader(readerName: $readerName, readerAge: $readerAge, readerEmail: $readerEmail) {
            id
            name
        }
    }
`;

export const ADD_READER_TO_BOOK = gql`
    mutation AddReaderToBook($readerId: ID!, $bookId: ID!) {
        addReaderToBook(readerId: $readerId, bookId: $bookId) {
            id
            name
            age
            email
        }
    }
`;
export const UPDATE_READER_NAME_BY_ID = gql`
    mutation UpdateReaderName($readerId: ID!, $newReaderName: String!) {
        updateReaderName(readerId: $readerId, newReaderName: $newReaderName) {
            id
            name
        }
    }
`;

export const DELETE_READER = gql`
    mutation DeleteReader($readerId: ID!) {
        deleteReader(readerId: $readerId) {
            id
            name
        }
    }
`;

export const READ_READER_FRAGMENT = gql`
    fragment ReadAuthor on Author {
        name
    }
`;