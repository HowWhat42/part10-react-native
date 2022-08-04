import { useApolloClient, useMutation } from '@apollo/client'
import { DELETE_REVIEW } from '../graphql/mutations'

const useDeleteReview = () => {
    const apolloClient = useApolloClient()
    const [mutate, result] = useMutation(DELETE_REVIEW)

    const deleteReview = async (id) => {
        const { data } = await mutate({
            variables: { id },
            refetchQueries: ['getUser', 'getRepository'],
        })
        if (data) {
            apolloClient.resetStore()
        }
        return data
    }

    return [deleteReview, result]
}

export default useDeleteReview
