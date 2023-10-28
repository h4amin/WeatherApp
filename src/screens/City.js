import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import IconText from '../components/IconText';
import moment from 'moment';

const City = ({ weatherData }) => {
  const {
    container,
    imageLayout,
    cityName,
    cityText,
    countryName,
    windSpeedWrapper,
    windSpeedText,
    riseSetWrapper,
    riseSetText,
    rowLayout,
  } = styles;

  const {name, country, sunrise, sunset} = weatherData;
  //const { speed } = wind; // Access wind speed property

  return (
    <View style={container}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>
        <View style={[windSpeedWrapper, rowLayout]}>
          <IconText
            iconName={'wind'}
            iconColor={'lightblue'}
            bodyText={`Wind Speed:m/s`}
            bodyTextStyles={windSpeedText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'yellow'}
            bodyText={moment(sunrise * 1000).format('h:mm:ss A')}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'red'}
            bodyText={moment(sunset * 1000).format('h:mm:ss A')}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  windSpeedWrapper: {
    justifyContent: 'center',
    marginTop: 30,
  },
  windSpeedText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default City;
