import { StyleSheet, View } from 'react-native'
import { Route, Routes, } from 'react-router-native'
import theme from '../theme'
import AppBar from './AppBar'
import RepositoryList from './RepositoryList'
import SignIn from './SignIn'
import RepositoryView from './RepositoryView'
import ReviewForm from './ReviewForm'
import SignUp from './SignUp'
import MyReviews from './MyReviews'

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
                <Route path="/add-review" element={<ReviewForm />} />
                <Route path="/my-reviews" element={<MyReviews />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </View>
    )
}

export default Main;