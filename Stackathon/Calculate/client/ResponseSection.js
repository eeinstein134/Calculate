import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import {Button} from 'react-native-elements'

const ResponseSection = () => {
    const [answer, setAnswer] = useState('')
    return (
        <View>
        <TextInput style={styles.input} 
            onChangeText={(text) => setAnswer(text)}
            value={answer}/>
            <Text>{answer}</Text>
            <Button title='Submit' onPress={() => 'correct' ? isCorrect(answer, generator) : 'incorrect'}/>
        </View>
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