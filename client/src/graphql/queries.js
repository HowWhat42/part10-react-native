import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
    query getRepositories {
        repositories {
            edges {
                node {
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
