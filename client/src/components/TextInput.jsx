import { TextInput as NativeTextInput } from 'react-native';


const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [style];
    if (error) {
        textInputStyle.push({ borderColor: '#d73a4a' });
    }

    return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;