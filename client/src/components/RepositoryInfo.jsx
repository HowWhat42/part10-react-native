import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import theme from '../theme';

const styles = StyleSheet.create({
    textPrimary: {
        color: theme.colors.textPrimary,
        textAlign: 'center',
        fontFamily: theme.fonts.main
    },
    textSecondary: {
        color: theme.colors.textSecondary,
        textAlign: 'center',
        fontFamily: theme.fonts.main
    },
});

const RepositoryInfo = ({ data, text }) => {
    const shortNumber = (number) => {
        if (number > 1000) {
            return `${(number / 1000).toFixed(1)}k`;
        }
        return number;
    }

    return (
        <View testID="repositoryInfo">
            <Text style={styles.textPrimary}>{shortNumber(data)}</Text>
            <Text style={styles.textSecondary}>{text}</Text>
        </View>
    )
}

export default RepositoryInfo