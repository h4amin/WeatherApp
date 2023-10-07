import React from "react"
import { View, Text, StyleSheet} from "react-native"
import Constants from 'expo-constants' 
import {Feather} from '@expo/vector-icons'
import RowText from '../components/RowText'
import {weatherType} from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
 

  const {main: {temp, feels_like, temp_max, temp_min}, weather}= weatherData
  const weatherCondition = weather[0].main

    const {
    wrapper,
    container,
    temperature,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message
  } = styles

  return (
     //render content within regular screen boundary
    <View style={[
      wrapper,
      { backgroundColor: 
        weatherType[weatherCondition]?.backgroundColor}
      ]}
    >
      <View style={container}>
        <Feather 
          name={
          weatherType[weatherCondition]?.icon}
          size={100} 
          color="black"
        />      
        <Text style={temperature}>{`${temp}°`}</Text>
        <Text style={feels}>{`Feels like ${feels_like}° `}</Text>
        <RowText 
        	messageOne={`High: ${temp_max}° `} 
        	messageTwo={`Low: ${temp_min}°`} 
        	containerStyles={highLowWrapper} 
        	messageOneStyles={highLow} 
        	messageTwoStyles={highLow}
        />
		<RowText 
        	messageOne={weather[0]?.description} 
        	messageTwo={weatherType[weather]?.message} 
        	containerStyles={bodyWrapper} 
        	messageOneStyles={description} 
        	messageTwoStyles={message}
        />

      </View>
      
    </View>

    )
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  container: {
    marginTop:  Constants.statusBarHeight, //SafeAreaView workaround
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  temperature: {
    color: 'black',
    fontSize: 48
  },

  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },

  highLowWrapper: {
    flexDirection: 'row'
  },

  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 43
  },
  message:{
    fontSize: 45
  }


})
export default CurrentWeather