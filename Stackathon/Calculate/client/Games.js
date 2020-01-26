import React from 'react'
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native'
import {Button} from 'react-native-elements'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default class Games extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.sectionContainer}>
          <View style={styles.header}>
            <Text style={styles.header}>Addition</Text>
          </View>
        <Button buttonStyle={styles.button}
        title="Play"
        type="solid" 
        onPress={() => this.props.navigation.navigate('Addition')}/>
    </View>
    </ScrollView>
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.gray
  },
  header: {
    fontSize: 35,
    fontWeight: '700',
    color: Colors.black,
    margin: 40,
    textAlign: 'center'
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'center'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
    textAlign: 'center'
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  button: {
    flexGrow: 2,
    margin: 5,
    padding: 10,
    shadowColor: Colors.gray
  }
});