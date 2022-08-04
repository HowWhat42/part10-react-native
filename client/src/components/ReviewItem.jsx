import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import theme from '../theme'

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
    }
})

const ReviewItem = ({review}) => {
    const formatDate = (date) => {
        const d = new Date(date)
        return d.toLocaleDateString()
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
        </View>
    )
}

export default ReviewItem