import React from 'react'
import {View, StyleSheet} from 'react-native'
import GameHeader from './GameHeader'
import ResponseSection from './ResponseSection'
import {generateProblem} from './utilities'

const Addition = () => {
  const generator = generateProblem()
  return (
    <View style={styles.sectionContainer}>
      <GameHeader />
      <ResponseSection generator={generator}/>
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