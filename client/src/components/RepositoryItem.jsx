import { View, Text, Image, StyleSheet, Linking, Pressable } from 'react-native'
import theme from '../theme'
import RepositoryInfo from './RepositoryInfo'
import { useNavigate } from 'react-router-native'

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
    },
    open: {
        backgroundColor: theme.colors.primary,
        margin: 10,
        padding: 10,
        borderRadius: 5,
    },
    openText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: theme.fonts.main
    }
})

const RepositoryItem = ({repository, singleView}) => {
    const navigate = useNavigate()

    const handleOpen = () => {
        Linking.openURL(repository.url)
    }

    const goToDetails = () => {
        if (singleView) {
            return;
        }
        navigate(`/${repository.id}`)
    }

    return (
        <Pressable onPress={goToDetails}>
            <View testID="repositoryItem" style={styles.card}>
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
                {singleView && <Pressable style={styles.open} onPress={handleOpen}>
                        <Text style={styles.openText}>Open on GitHub</Text>
                    </Pressable>}
            </View>
        </Pressable>
    )
}

export default RepositoryItem