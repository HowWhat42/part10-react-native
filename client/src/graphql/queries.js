import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
    query getRepositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
        repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
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
            }
        }
    }
`

export const GET_USER = gql`
    query getUser {
        me {
            id
            username
        }
    }
`

export const GET_REPOSITORY = gql`
    query repository($id: ID!) {
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
    query getReviews($id: ID!) {
        repository(id: $id) {
            id
            fullName
            reviews {
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
                }
            }
        }
    }
`
