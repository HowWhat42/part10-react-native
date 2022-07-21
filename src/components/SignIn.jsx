import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput'
import theme from '../theme';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
})

const styles = StyleSheet.create({
    form: {
        backgroundColor: 'white'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        color: '#333',
    },
    submit: {
        backgroundColor: theme.colors.primary,
        margin: 10,
        padding: 10,
        borderRadius: 5,
    },
    submitText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: theme.fonts.main
    }
})


const Form = ({onSubmit}) => {
    return (
        <View style={styles.form}>
            <FormikTextInput style={styles.input} name="username" placeholder='Username' />
            <FormikTextInput style={styles.input} secureTextEntry name="password" placeholder='Password' />
            <Pressable style={styles.submit} onPress={onSubmit}>
                <Text style={styles.submitText}>Sign in</Text>
            </Pressable>
        </View>
    )
}

const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values)
    }

    return (
        <View>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {({ handleSubmit }) => <Form onSubmit={handleSubmit} />}
            </Formik>
        </View>
    )
}

export default SignIn