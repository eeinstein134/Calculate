import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import {Button, Overlay} from 'react-native-elements'
import {Colors} from 'react-native/Libraries/NewAppScreen'

export default class Addition extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: '',
            score: 0,
            lives: 3,
            problems: []
        }
        this.getRandInt = this.getRandInt.bind(this)
        this.generateProblem = this.generateProblem.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    getRandInt(min, max) {
        return (Math.floor(Math.random() * (max - min + 1)))
    }

    generateProblem() {
        let length = 3
        let sumArr = []
        
        for (let i = 0; i < length; i++) {
            sumArr.push(this.getRandInt(0, 11));
        }
        if (!this.state.problems.includes(sumArr)) {
            this.setState = ({
                problems: [...this.state.problems, sumArr]
            })
        } else {
            this.generateProblem(level)
        }
        
        return String(sumArr);
    }

    handleSubmit(answer) {
        this.setState = ({
            answer: answer
        })
    }

    render() {
        return (
            <View style={styles.sectionContainer}>
                <Text>What is the sum of: </Text>
                <Text styles={styles.body}>{this.generateProblem()}</Text>
                <TextInput style={styles.input}/>
                <Button title='Submit' onPress={this.handleSubmit}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    input: {
        borderBottomColor: "black", 
        borderWidth: 1, 
        padding: 10,
        margin: 20,
    },
    sectionContainer: {
        margin: 20,
        textAlign: 'center'
    },
    body: {
        textAlign: 'center'
    }
})