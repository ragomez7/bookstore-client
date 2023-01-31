import { gql } from '@apollo/client';

export const GET_AUTHORS = gql`
query GetAuthors($offset: Int, $limit: Int, $authorNameSearch: String, $countrySearch: String) {
    getAuthors(offset: $offset, limit: $limit, authorNameSearch: $authorNameSearch, countrySearch: $countrySearch) {
        authors {
            id
            name
            age
            countryOfBirth
            isDead
            books {
            id
            }
        }
        authorsCount
    }
}  
`;

export const ADD_AUTHOR = gql`
    mutation AddAuthor($author: AuthorInput!) {
        addAuthor(author: $author) {
            id
            name
            age
            countryOfBirth
        }
    }
`;

export const UPDATE_AUTHOR_NAME_BY_ID = gql`
    mutation UpdateAuthorName($authorId: ID!, $newAuthorName: String!) {
        updateAuthorName(authorId: $authorId, newAuthorName: $newAuthorName) {
            id
            name
            age
            countryOfBirth
            isDead
        }
    }
`;

export const READ_AUTHOR_FRAGMENT = gql`
    fragment ReadAuthor on Author {
        name
    }
`;

export const DELETE_AUTHOR_BY_ID = gql`
    mutation DeleteAuthorById($authorId: ID!) {
        deleteAuthorById(authorId: $authorId) {
            id
            name
            age
            countryOfBirth
            isDead
        }
    }
`;

export const GET_COUNTRIES_OF_AUTHORS = gql`
    query GetCountriesFromAuthors {
        getCountriesFromAuthors
    }
`