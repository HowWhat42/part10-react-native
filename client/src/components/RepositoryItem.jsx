import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import theme from '../theme';
import RepositoryInfo from './RepositoryInfo';

const styles = StyleSheet.create({
    card: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        padding: 10,
    },
    content: {
        paddingLeft: 10,
        width: '80%',
    },
    language: {
        color: 'white',
        backgroundColor: theme.colors.primary,
        marginRight: 'auto',
        padding: 5,
        borderRadius: 5,
        fontFamily: theme.fonts.main
    },
    title: {
        color: theme.colors.textPrimary,
        paddingBottom: 10,
        fontWeight: 'bold',
        fontFamily: theme.fonts.main
    },
    description: {
        color: theme.colors.textSecondary,
        paddingBottom: 10,
        fontFamily: theme.fonts.main
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        textAlign: 'center',
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 5,
    }
});

const RepositoryItem = ({repository}) => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Image style={styles.logo} source={{ uri: repository.ownerAvatarUrl }} />
                <View style={styles.content}>
                    <Text style={styles.title}>{repository.fullName}</Text>
                    <Text style={styles.description}>{repository.description}</Text>
                    <Text style={styles.language}>{repository.language}</Text>
                </View>
            </View>
            <View style={styles.details}>
                <RepositoryInfo text='Stars' data={repository.stargazersCount} />
                <RepositoryInfo text='Forks' data={repository.forksCount} />
                <RepositoryInfo text='Reviews' data={repository.reviewCount} />
                <RepositoryInfo text='Rating' data={repository.ratingAverage} />
            </View>
        </View>
    )
}

export default RepositoryItem