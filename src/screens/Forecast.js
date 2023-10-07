import React from 'react'
import {
  View,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'

const Forecast = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  const { container, image } = styles
  return (
    <View style={container}>
      <ImageBackground
        style={image}
        source={require('../../assets/upcoming-weather.jpg')}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: 'royalblue'
  },
  image: {
    flex: 1
  }
})

export default Forecast