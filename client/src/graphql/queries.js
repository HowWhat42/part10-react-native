import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
    query getRepositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $after: String, $first: Int) {
        repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, after: $after, first: $first) {
            edges {
                node {
                    id
                    fullName
                    ratingAverage
                    reviewCount
                    stargazersCount
                    forksCount
                    language
                    description
                    ownerAvatarUrl
                }
                cursor
            }
            pageInfo {
                endCursor
                startCursor
                hasNextPage
            }
        }
    }
`

export const GET_USER = gql`
    query getUser($withReviews: Boolean = false, $first: Int, $after: String) {
        me {
            id
            username
            reviews(first: $first, after: $after) @include(if: $withReviews) {
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        repository {
                            id
                        }
                        user {
                            id
                            username
                        }
                    }
                    cursor
                }
                pageInfo {
                    endCursor
                    startCursor
                    hasNextPage
                }
            }
        }
    }
`

export const GET_REPOSITORY = gql`
    query getRepository($id: ID!) {
        repository(id: $id) {
            id
            fullName
            name
            ratingAverage
            reviewCount
            stargazersCount
            forksCount
            language
            description
            ownerAvatarUrl
            ownerName
            url
        }
    }
`

export const GET_REVIEWS = gql`
    query getReviews($id: ID!, $after: String, $first: Int) {
        repository(id: $id) {
            id
            fullName
            reviews(first: $first, after: $after) {
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        user {
                            id
                            username
                        }
                    }
                    cursor
                }
                pageInfo {
                    endCursor
                    startCursor
                    hasNextPage
                }
            }
        }
    }
`
