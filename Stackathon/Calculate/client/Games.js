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
            <View>
              <Text style={styles.header}>Select a Game</Text>
          </View>
          <View style={styles.sectionContainer}>
            <Button 
              buttonStyle={styles.button} 
              titleStyle={styles.titleStyle}
              title="Addition"
              color="#ff0000"
              type="solid" 
              onPress={() => this.props.navigation.navigate('Addition')}
            />
            <Button 
              buttonStyle={styles.button} 
              titleStyle={styles.titleStyle}
              title="Subtraction*"
              type="solid" 
            />
            <Button 
              buttonStyle={styles.button} 
              titleStyle={styles.titleStyle}
              title="Multiplication*"
              type="solid" 
            />
            <Button 
              buttonStyle={styles.button} 
              titleStyle={styles.titleStyle}
              title="Division*"
              type="solid" 
            />
            <Text style={styles.body}>* Coming Soon</Text>
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
    fontSize: 40,
    fontWeight: '700',
    color: Colors.black,
    marginTop: 20,
    textAlign: 'center'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    justifyContent: "space-between",
    fontSize: 40
  },
  button: {
    flexGrow: 5,
    marginVertical: 15,
    padding: 15,
    shadowColor: Colors.gray,
  },
  titleStyle: {
    fontSize: 28
  },
  body: {
    margin: 10
  }
});