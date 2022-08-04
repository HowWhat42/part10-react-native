import { View, Text, StyleSheet, Pressable, Alert } from 'react-native'
import theme from '../theme'
import { useNavigate } from 'react-router-native'
import useDeleteReview from '../hooks/useDeleteReview'

const styles = StyleSheet.create({
    card: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    content: {
        paddingLeft: 10,
        width: '90%',
    },
    title: {
        color: theme.colors.textPrimary,
        fontWeight: 'bold',
        fontFamily: theme.fonts.main
    },
    date: {
        color: theme.colors.textSecondary,
        paddingBottom: 5,
        fontFamily: theme.fonts.main
    },
    rating: {
        borderColor: theme.colors.primary,
        borderWidth: 2,
        borderRadius: 50,
        padding: 10,
        marginBottom: 'auto',
    },
    ratingText: {
        color: theme.colors.primary,
        fontWeight: 'bold',
        fontFamily: theme.fonts.main
    },
    ctas: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    view: {
        backgroundColor: theme.colors.primary,
        width: '45%',
        padding: 10,
        borderRadius: 5,
    },
    delete: {
        backgroundColor: theme.colors.error,
        width: '45%',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: theme.fonts.main
    }
})

const ReviewItem = ({review, isOwn}) => {
    const navigate = useNavigate()
    const [deleteReview] = useDeleteReview()

    const formatDate = (date) => {
        const d = new Date(date)
        return d.toLocaleDateString()
    }

    const handleDelete = () => {
        Alert.alert("Delete Review", "Are you sure you want to delete this review?", [
            {text: "Cancel", style: "cancel"},
            {text: "Delete", onPress: () => {
                deleteReview(review.id)
            }}
        ])
    }

    const handleView = () => {
        navigate(`/${review.repository.id}`)
    }

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <View style={styles.rating}>
                    <Text style={styles.ratingText}>{review.rating}</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>{review.user.username}</Text>
                    <Text style={styles.date}>{formatDate(review.createdAt)}</Text>
                    <Text>{review.text}</Text>
                </View>
            </View>
            {isOwn && <View style={styles.ctas}>
                <Pressable onPress={handleView} style={styles.view}>
                    <Text style={styles.buttonText}>View repository</Text>
                </Pressable>
                <Pressable onPress={handleDelete} style={styles.delete}>
                    <Text style={styles.buttonText}>Delete Review</Text>
                </Pressable>
            </View>}
        </View>
    )
}

export default ReviewItem