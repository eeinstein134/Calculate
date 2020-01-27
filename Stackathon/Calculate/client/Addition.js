import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import {Button, Overlay} from 'react-native-elements'
import {Colors} from 'react-native/Libraries/NewAppScreen'
import {generateProblem, isCorrect} from './utilities'
import GameHeader from './GameHeader'
import ResponseSection from './ResponseSection'

const Addition = () => {
    const [problem, setProblem] = useState([])

    const generator = generateProblem()

    return (
        <View style={styles.sectionContainer}>
          <GameHeader />
          <View style={styles.buttonContainer}>
            <Text>{generator}</Text>
            {/* <Button title='New Problem' buttonStyle={styles.button} onPress={() => setProblem(generator)}/> */}
          </View>
          <ResponseSection />
        </View>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
      margin: 20,
      textAlign: 'center'
    },
    button: {
      textAlign: 'center',
      padding: 10
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    body: {
        fontSize: 40
    }
})

export default Addition