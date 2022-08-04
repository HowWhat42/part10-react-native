import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../graphql/queries'

const useRepositories = (id) => {
    const [repository, setRepository] = useState()

    const { loading, error } = useQuery(GET_REPOSITORY, {
        variables: { id },
        fetchPolicy: 'cache-and-network',
        onCompleted: (data) => {
            setRepository(data.repository)
        },
    })

    return { repository, loading, error }
}

export default useRepositories
