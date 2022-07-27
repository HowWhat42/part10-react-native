import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
    query {
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