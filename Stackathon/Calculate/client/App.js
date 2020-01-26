import React from 'react';
import HomeScreen from './HomeScreen'
import Games from './Games'
import Addition from './Addition'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  // Profile: { screen: ProfileScreen },
  // FunFacts: { screen: FunFacts},
  Games: { screen: Games },
  Addition: { screen: Addition}
});

const App = createAppContainer(MainNavigator);

export default App;
