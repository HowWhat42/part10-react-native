import { Platform } from 'react-native'

const theme = {
    colors: {
        appbar: '#24292e',
        background: '#e1e4e8',
        primary: '#0366d6',
        error: '#d6394c',
        textPrimary: 'black',
        textSecondary: '#586069',
    },
    fontSizes: {
        body: 14,
        subheading: 16,
    },
    fonts: {
        main: Platform.select({
            android: 'Roboto',
            ios: 'Arial',
            default: 'System',
        }),
    },
    fontWeights: {
        normal: '400',
        bold: '700',
    },
}

export default theme
