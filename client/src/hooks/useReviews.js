import { useQuery } from '@apollo/client'
import { GET_REVIEWS } from '../graphql/queries'

const useReviews = (id) => {
    const variables = { id, first: 3 }

    const { data, loading, fetchMore, error, ...result } = useQuery(GET_REVIEWS, {
        variables,
        fetchPolicy: 'cache-and-network',
    })

    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage

        if (!canFetchMore) {
            return
        }

        fetchMore({
            variables: {
                after: data.repository.reviews.pageInfo.endCursor,
                ...variables,
            },
        })
    }

    return { reviews: data?.repository.reviews, loading, error, fetchMore: handleFetchMore, ...result }
}

export default useReviews
