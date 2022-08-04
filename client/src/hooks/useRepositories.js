import { useQuery } from '@apollo/client'

import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = (sortBy, searchKeyword) => {
    const queryVariables = { searchKeyword }
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
    const { data, loading } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
        variables: queryVariables,
    })

    return {
        repositories: data ? data.repositories : undefined,
        loading,
    }
}

export default useRepositories
