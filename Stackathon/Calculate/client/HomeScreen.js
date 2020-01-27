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
            
          <View style={styles.sectionContainer}>
            <Button 
            buttonStyle={styles.button} 
            titleStyle={styles.title} 
            title='Games' 
            type='solid' 
            onPress={() => this.props.navigation.navigate('Games')}/>
            <Button 
            buttonStyle={styles.button} 
            titleStyle={styles.title} 
            title='Fun Facts' 
            type='solid'/>
            <Button buttonStyle={styles.button} titleStyle={styles.title} title='Account' type='solid'/>
            <Button buttonStyle={styles.button} titleStyle={styles.title} title='Help' type='solid'/>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white
  },
  header: {
    fontSize: 40,
    fontWeight: '700',
    color: Colors.black,
    marginVertical: 30,
    textAlign: 'center',
    borderColor: '#56CCF2',
    borderStyle: 'solid'
  },
  sectionContainer: {
    backgroundColor: Colors.light,
    marginTop: 32,
    paddingHorizontal: 24,
    justifyContent: "space-evenly",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'center',
  },
  button: {
    flexGrow: 2,
    marginVertical: 20,
    marginHorizontal: 10,
    padding: 4,
    shadowColor: Colors.gray
  },
  title: {
    color: 'white',
    fontSize: 24
  }
});

export default HomeScreen;