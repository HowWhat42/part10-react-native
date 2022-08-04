import { StyleSheet, View } from 'react-native'
import { Route, Routes, } from 'react-router-native'
import theme from '../theme'
import AppBar from './AppBar'
import RepositoryList from './RepositoryList'
import SignIn from './SignIn'
import RepositoryView from './RepositoryView'
import ReviewForm from './ReviewForm'
import SignUp from './SignUp'

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: theme.colors.background,
    },
})

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Routes>
                <Route path="/" element={<RepositoryList />} exact />
                <Route path="/:id" element={<RepositoryView />} />
                <Route path="/reviews" element={<ReviewForm />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </View>
    )
}

export default Main;