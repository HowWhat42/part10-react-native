import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import AppBarTab from './AppBarTab'
import theme from '../theme'
import { useApolloClient, useQuery } from '@apollo/client'
import { GET_USER } from '../graphql/queries'
import useAuthStorage from '../hooks/useAuthStorage'
import { useNavigate } from 'react-router-native'
import { Link } from 'react-router-native'

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight + 40,
        paddingBottom: Constants.statusBarHeight,
        backgroundColor: theme.colors.appbar,
        flexDirection: 'row',
    },
});

const AppBar = () => {
    const apolloClient = useApolloClient()
    const authStorage = useAuthStorage()
    const navigate = useNavigate()
    const { data } = useQuery(GET_USER)
    const user = data ? data.me : null

    const onSignOut = async () => {
        await authStorage.removeAccessToken()
        apolloClient.resetStore()
        navigate('/')
    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                {user ? (
                    <>
                        <AppBarTab onPress={() => navigate('/')}>Repositories</AppBarTab>
                        <AppBarTab onPress={() => navigate('/add-review')}>Create a review</AppBarTab>
                        <AppBarTab onPress={() => navigate('/my-reviews')}>My Reviews</AppBarTab>
                        <AppBarTab onPress={onSignOut}>Sign Out</AppBarTab>
                    </>
                ) : (<>
                    <AppBarTab onPress={() => navigate('/signin')}>Sign In</AppBarTab>
                    <AppBarTab onPress={() => navigate('/signup')}>Sign Up</AppBarTab>
                </>)}
            </ScrollView>
        </View>
    );
};

export default AppBar;