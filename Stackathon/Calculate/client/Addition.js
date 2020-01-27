import React from 'react'
import {View, StyleSheet} from 'react-native'
import GameHeader from './GameHeader'
import ResponseSection from './ResponseSection'

const Addition = () => {
  return (
    <View style={styles.sectionContainer}>
      <GameHeader />
      <ResponseSection/>
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