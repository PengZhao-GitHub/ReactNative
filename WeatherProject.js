import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';

import Forecast from './Forecast'

export default class WeatherProject extends Component {


  constructor(props) {
    super(props);
    this.state = {city: 'Your selected city',
                  forecast: {
                      main: '',
                      description: '',
                      temp: '',
                      humidity: '',
                      speed: ''
                  }};

  }

  _handleTextChange(event) {
    var MyCity = event.nativeEvent.text;
    this.setState({city: MyCity});

    url = 'http://api.openweathermap.org/data/2.5/weather?q=' + MyCity + '&appid=1eb8294ef0837d6afef3f3dcd9c4b6d6';
    console.log(url);

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState ({
          forecast: {
            main: responseJson.weather[0].main,
            description: responseJson.weather[0].description,
            temp: responseJson.main.temp,
            humidity: responseJson.main.humidity,
            speed: responseJson.wind.speed
          }
        })
      })
      .catch((error) => {
        console.error(error)
      })


  }

  render() {
    return (

      <View style={styles.container}>
       <Image source={require('./img/myImage.jpg')} style={styles.backdrop}>
       <View style={styles.overlay}>
          <View style={styles.row}>
              <Text style={styles.instructionText}>
                  {'Current weather for'}
              </Text>
              <TextInput style={styles.cityInput} returnKeyType='go' onSubmitEditing={this._handleTextChange.bind(this)}/>
          </View>

          <Text style={styles.mainText}>
                    {this.state.city}
          </Text>
          <Forecast
                  main={this.state.forecast.main}
                  description={this.state.forecast.description}
                  temp={this.state.forecast.temp}
                  humidity={this.state.forecast.humidity}
                  speed={this.state.forecast.speed}
         />
      </View>
      </Image>
      </View>


    );
  }
}

var baseFontSize = 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 300,
    padding: 10,
    //borderBottomColor: '#000000',
    //borderBottomWidth: 1,
    //borderColor: '#000000',
    //borderWidth: 1,

  },
  backdrop: {
    flex: 1,
    alignItems: 'center',
    //marginTop: 50,
    //marginBottom: 300,
    margin: 0,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  overlay: {
    //paddingTop: 5,
    margin: 0,
    backgroundColor: '#000000',
    opacity: 0.6,
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    //borderColor: '#000000',
    //borderWidth: 1,
    paddingTop: 20,
  },
  zipContainer:{
    flex: 1,
    //borderBottomColor: '#000000',
    //borderBottomWidth: 1,
    //marginRight: 10,
    //marginTop: 3,
    borderWidth: 1,
  },
  cityInput: {
    //width: 20,
    flex: 1,
    height: baseFontSize + 6,
    //paddingTop: 60,
    //borderBottomColor: '#FFFFFF',
    //borderBottomWidth: 2,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    marginRight: 5,
    color: '#FFFFFF',
  },
  instructionText: {
    flex: 1,
    fontSize: baseFontSize + 3,
    color: '#FFFFFF',
    textAlign: 'center',
    //borderBottomColor: '#000000',
    //borderBottomWidth: 1,
    //paddingTop: 20,
    //marginRight: 25,

  },
  mainText: {
    flex: 1,
    fontSize: baseFontSize + 10,
    color: '#FFFFFF',
    textAlign: 'center',
    //borderBottomColor: '#000000',
    //borderBottomWidth: 1,

  }

});


module.exports = WeatherProject
