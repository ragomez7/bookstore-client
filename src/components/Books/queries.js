import { gql } from "@apollo/client";

export const UPDATE_BOOK_TITLE = gql`
    mutation UpdateBookTitle($bookId: ID!, $newBookTitle: String!) {
        updateBookTitle(bookId: $bookId, newBookTitle: $newBookTitle) {
            id
            title
            pageCount
            bookThumbnail
        }
    }
`

export const DELETE_BOOK_BY_ID = gql`
    mutation DeleteBookById($bookId: ID!) {
        deleteBookById(bookId: $bookId) {
            id
            title
            pageCount
            bookThumbnail
        }
    }
`;

export const READ_BOOK_FRAGMENT = gql`
    fragment ReadBook on Book {
        title
    }
`;

export const GET_BOOKS = gql`
query GetBooks($offset: Int!, $limit: Int!, $searchTitleTerm: String) {
    getBooks(offset: $offset, limit: $limit, searchTitleTerm: $searchTitleTerm) {
        books {
            id
            title
            pageCount
            bookThumbnail
            author {
                name
            }
            readers {
                id
            }
        }
        booksCount
    }
}
`;

export const ADD_BOOK = gql`
    mutation AddBook($bookTitle: String!, $authorId: ID!, $pageCount: Int, $bookThumbnail: String) {
        addBook(bookTitle: $bookTitle, authorId: $authorId, pageCount: $pageCount, bookThumbnail: $bookThumbnail) {
            book {
                id
                title
            }
            code
            success
            message
        }
    }
`