import { View, FlatList, StyleSheet } from 'react-native'
import ReviewItem from './ReviewItem'
import useMyReviews from '../hooks/useMyReviews'

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
})

const ItemSeparator = () => <View style={styles.separator} />

const MyReviews = () => {
    const { reviews, fetchMore } = useMyReviews()

    let reviewsList = []
    if (reviews) {
        reviewsList = reviews.edges.map(edge => edge.node)
    }

    const onEndReach = () => fetchMore()

    return (
        <FlatList
            data={reviewsList}
            renderItem={({ item }) => <ReviewItem review={item} isOwn />}
            keyExtractor={({ id }) => id}
            ItemSeparatorComponent={ItemSeparator}
            onEndReached={onEndReach}
        />
    )
}

export default MyReviews