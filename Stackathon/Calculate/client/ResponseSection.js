import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import {Button} from 'react-native-elements'
import { isCorrect } from './utilities'

const ResponseSection = (props) => {
    const [answer, setAnswer] = useState('')
    const [problem, setProblem] = useState([])

    return (
        <>
            <View>
                <Text>{props.generator}</Text>
            </View>
            <View>
            <TextInput style={styles.input} 
                onChangeText={(text) => setAnswer(text)}
                value={answer}
                />
                <Text>{answer}</Text>
                <Button title='Submit' onPress={() => setAnswer('') && setProblem(props.generator) ? isCorrect(answer, props.generator) : console.log('incorrect')}/>
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