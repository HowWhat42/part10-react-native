import { useQuery } from '@apollo/client'

import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = (sortBy, queryVariables) => {
    switch (sortBy) {
        case 'CREATED_AT':
            queryVariables.orderBy = 'CREATED_AT'
            break
        case 'ASC':
            queryVariables.orderBy = 'RATING_AVERAGE'
            queryVariables.orderDirection = 'ASC'
            break
        case 'DESC':
            queryVariables.orderBy = 'RATING_AVERAGE'
            queryVariables.orderDirection = 'DESC'
            break
        default:
            queryVariables.orderBy = 'CREATED_AT'
            break
    }
    const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
        variables: queryVariables,
    })

    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage

        if (!canFetchMore) {
            return
        }

        fetchMore({
            variables: {
                after: data.repositories.pageInfo.endCursor,
                ...queryVariables,
            },
        })
    }

    return {
        repositories: data?.repositories,
        fetchMore: handleFetchMore,
        loading,
        ...result,
    }
}

export default useRepositories
