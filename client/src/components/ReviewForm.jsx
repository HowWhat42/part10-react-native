import { View, Text, Pressable, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput'
import theme from '../theme'
import useCreateReview from '../hooks/useCreateReview';
import { useNavigate } from 'react-router-native';

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
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: '',
}

const validationSchema = yup.object().shape({
    ownerName: yup.string().required('Repository owner is required'),
    repositoryName: yup.string().required('Repository name is required'),
    rating: yup.number().min(0).max(100).required('Rating is required'),
})

export const Form = ({onSubmit}) => {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} style={styles.form}>
            {({ handleSubmit }) => (
                <>
                    <FormikTextInput style={styles.input} name="ownerName" placeholder='Repository owner name' />
                    <FormikTextInput style={styles.input} name="repositoryName" placeholder='Repository name' />
                    <FormikTextInput style={styles.input} name="rating" placeholder='Rating between 0 and 100' />
                    <FormikTextInput style={styles.input} multiline name="text" placeholder='Review' />
                    <Pressable style={styles.submit} onPress={handleSubmit}>
                        <Text style={styles.submitText}>Create a review</Text>
                    </Pressable>
                </>
            )}
        </Formik>
    )
}

const ReviewForm = () => {
    const [createReview] = useCreateReview()
    const navigate = useNavigate()

    const onSubmit = async (values) => {
        const { ownerName, repositoryName, rating, text } = values

        try {
            const review = await createReview({ ownerName, repositoryName, rating: Number(rating), text })
            navigate(`/${review.createReview.repositoryId}`)
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

export default ReviewForm