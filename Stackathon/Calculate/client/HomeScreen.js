import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';
import { Button } from 'react-native-elements'
import { Colors } from 'react-native/Libraries/NewAppScreen';

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View>
            <Text style={styles.header}> Calculate</Text>
          </View>
            
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Button buttonStyle={styles.button} title='Games' type='outline' onPress={() => this.props.navigation.navigate('Games')}/>
            </View>
            <View style={styles.sectionContainer}>
              <Button buttonStyle={styles.button} title='Fun Facts' type='clear'/>
              <Text style={styles.sectionDescription}>
                Get some fun facts about math!
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Button buttonStyle={styles.button} title='Account' type='clear'/>
            </View>
            <View style={styles.sectionContainer}>
              <Button buttonStyle={styles.button} title='Help' type='clear'/>
              <Text style={styles.sectionDescription}>
                Send feedback to calculate@gmail.com
              </Text>
            </View>
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
    padding: 4,
    shadowColor: Colors.gray
  }
});

export default HomeScreen;