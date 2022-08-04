import { useQuery } from '@apollo/client'
import { GET_USER } from '../graphql/queries'

const useMyReviews = () => {
    const variables = { withReviews: true, first: 5 }
    const { data, loading, error, fetchMore, ...result } = useQuery(GET_USER, {
        variables,
        fetchPolicy: 'cache-and-network',
    })

    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage

        if (!canFetchMore) {
            return
        }

        fetchMore({
            variables: {
                after: data.me.reviews.pageInfo.endCursor,
                ...variables,
            },
        })
    }

    return { reviews: data?.me.reviews, loading, error, fetchMore: handleFetchMore, ...result }
}

export default useMyReviews
