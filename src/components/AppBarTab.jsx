import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'react-router-native';
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

const AppBarTab = ({text, link}) => {
    return (
        <View style={styles.tab}>
            <Pressable>
                <Link to={link}>
                    <Text style={styles.text}>{text}</Text>
                </Link>
            </Pressable>
        </View>
    )
}

export default AppBarTab