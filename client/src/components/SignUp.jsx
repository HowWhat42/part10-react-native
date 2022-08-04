import { View, Text, Pressable, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-native'
import * as yup from 'yup'
import theme from '../theme'
import FormikTextInput from './FormikTextInput'
import useSignUp from '../hooks/useSignUp'
import useSignIn from '../hooks/useSignIn'

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

const initialValues = {
    username: '',
    password: '',
    passwordConfirm: '',
}

const validationSchema = yup.object().shape({
    username: yup.string().min(1).max(30).required('Username is required'),
    password: yup.string().min(5).max(50).required('Password is required'),
    passwordConfirm: yup.string().oneOf([yup.ref('password'), null]).required('Password confirm is required')
})

export const Form = ({onSubmit}) => {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} style={styles.form}>
            {({ handleSubmit }) => (
                <>
                    <FormikTextInput style={styles.input} name="username" placeholder='Username' />
                    <FormikTextInput style={styles.input} secureTextEntry name="password" placeholder='Password' />
                    <FormikTextInput style={styles.input} secureTextEntry name="passwordConfirm" placeholder='Password confirm' />
                    <Pressable style={styles.submit} onPress={handleSubmit}>
                        <Text style={styles.submitText}>Sign up</Text>
                    </Pressable>
                </>
            )}
        </Formik>
    )
}

const SignUp = () => {
    const [signIn] = useSignIn()
    const [signUp] = useSignUp()
    const navigate = useNavigate()

    const onSubmit = async (values) => {
        const { username, password } = values

        try {
            await signUp({username, password})
            await signIn({username, password})
            navigate('/')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={styles.form}>
            <Form onSubmit={onSubmit} />
        </View>
    )
}

export default SignUp