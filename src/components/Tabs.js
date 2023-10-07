/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/Forecast'
import City from '../screens/City'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
  console.log(weather)
  return (
        <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'lightblue',
          borderTopWidth: 0, // Remove top border
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'indianred',
        },
      }}
    >
      <Tab.Screen
        name={'Current'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'droplet'}
              size={25}
              color={focused ? 'blue' : 'black'}
            />
          )
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name={'Forecast'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'clock'}
              size={25}
              color={focused ? 'blue' : 'black'}
            />
          )
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name={'City'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'home'}
              size={25}
              color={focused ? 'blue' : 'black'}
            />
          )
        }}
      >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default Tabs