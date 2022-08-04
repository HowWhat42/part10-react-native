import { View, FlatList, StyleSheet } from 'react-native'
import RepositoryItem from './RepositoryItem'
import useRepository from '../hooks/useRepository'
import useReviews from '../hooks/useReviews'
import { useParams } from 'react-router-native'
import ReviewItem from './ReviewItem'

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
})

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryView = () => {
    const { id } = useParams()
    const { repository } = useRepository(id)
    const { reviews, fetchMore } = useReviews(id)

    if (!repository) {
        return null
    }

    let reviewsList = []
    if (reviews) {
        reviewsList = reviews.edges.map(edge => edge.node)
    }

    const onEndReach = () => fetchMore()

    return (
        <FlatList
            data={reviewsList}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={({ id }) => id}
            ItemSeparatorComponent={ItemSeparator}
            onEndReached={onEndReach}
            ListHeaderComponent={() => <>
                <RepositoryItem repository={repository} singleView />
                <ItemSeparator/>
            </> }
        />
    )
}

export default RepositoryView