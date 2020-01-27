import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import {Button} from 'react-native-elements'
import { generateProblem, isCorrect } from './utilities'

const ResponseSection = () => {
    const [answer, setAnswer] = useState('')
    const [problem, setProblem] = useState([])
    const [submit, setSubmit] = useState(false)
    
    const generator = () => {
        let count = 0
        let generated = generateProblem()
        if (count === 0) {
            count++
            setProblem(generated)
        } else {
            return problem
        }
            
    }

    const submitted = (answer, generator) => {
        if (isCorrect(answer,generator)) {
            setSubmit(!submit)
            setAnswer('')
            generator()
        }
        
    }

    return (
        <>
            <View>
                <Text>{generator()}</Text>
            </View>
            <View>
            <TextInput style={styles.input} 
                onChangeText={(text) => setAnswer(text)}
                value={answer}
                />
                <Text>{answer}</Text>
                <Button title='Submit' onPress={() => submitted(answer, generator)}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomColor: "black", 
        borderWidth: 1, 
        padding: 10,
        margin: 20,
        justifyContent: 'center',
        alignContent: 'center'
    }
})

export default ResponseSection