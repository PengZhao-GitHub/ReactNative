/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


//var react = require('react-native');
//var { AppRegistry } = React;

//var WeatherProject = require('./WeatherProject');

//AppRegistry.registerComponent('WeatherProject', () => WeatherProject);




//import React, { Component } from 'react';
import {
  AppRegistry,
//  StyleSheet,
//  Text,
//  View
} from 'react-native';

import WeatherProject from './app/WeatherProject';

AppRegistry.registerComponent('WeatherProject', () => WeatherProject);

/**
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class WeatherProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('WeatherProject', () => WeatherProject);
**/
