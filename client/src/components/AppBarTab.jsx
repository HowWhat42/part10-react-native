import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import theme from '../theme';

const styles = StyleSheet.create({
    tab: {
        paddingLeft: 10,
    },
    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: theme.fonts.main
    }
});

const AppBarTab = ({children, ...props}) => {
    return (
        <View style={styles.tab}>
            <Pressable {...props}>
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default AppBarTab