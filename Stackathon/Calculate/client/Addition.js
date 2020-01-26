import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import {Button, Overlay} from 'react-native-elements'
import {Colors} from 'react-native/Libraries/NewAppScreen'
import generateProblem from './utilities'

export default class Addition extends React.Component {
    state = {
        answer: '',
        score: 0,
        lives: 3,
        problems: []
    }

    handleSubmit(answer) {
        this.setState = ({
            answer: answer
        })
        console.log(state.answer)
    }

    render() {
        return (
            <View style={styles.sectionContainer}>
                <Text>What is the sum of: </Text>
                <Text styles={styles.body}>{generateProblem()}</Text>
                <TextInput style={styles.input} />
                <Button title='Submit' onPress={this.handleSubmit.bind(this, state.answer)}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    sectionContainer: {
      margin: 20,
      textAlign: 'center'
    },
    input: {
        borderBottomColor: "black", 
        borderWidth: 1, 
        padding: 10,
        margin: 20,
    },
    body: {
        fontSize: 40
    }
})