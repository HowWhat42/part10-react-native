import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight + 40,
        paddingBottom: Constants.statusBarHeight,
        backgroundColor: theme.colors.appbar,
        flexDirection: 'row',
    },
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <AppBarTab text='Repositories' link='/' />
                <AppBarTab text='Sign In' link='/signin' />
            </ScrollView>
        </View>
    );
};

export default AppBar;