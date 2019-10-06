//Import react native components

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';


//Create custom component
export default class Forecast extends Component {

  render() {
    return (
     <View style={styles.container}>
        <Text style={styles.bigText}>
          Main:  {this.props.main}
        </Text>
        <Text style={styles.bigText}>
          Current condition:  {this.props.description}
        </Text>
        <Text style={styles.bigText}>
          Temp:  {this.props.temp} F
        </Text>
        <Text style={styles.bigText}>
          Humidity:  {this.props.humidity}
        </Text>
        <Text style={styles.bigText}>
          Wind speed:  {this.props.speed}
        </Text>
     </View>
    );
  }
}


//Create stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#FFFFFF',
    padding: 30,
  },

  bigText: {
    //flex: 1,
    fontSize: 18,
    textAlign: 'left',
    //margin: 50,
    color: '#FFFFFF',


  },
  mainText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#333333'
  },
});

//Export the component
module.exports = Forecast
