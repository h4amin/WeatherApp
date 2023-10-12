/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/Forecast'
import City from '../screens/City'
import { Feather } from '@expo/vector-icons'
import CustomHeader from './customHeader'; // Import the custom header component

const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {

  return (
        <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarActiveTintColor: 'indianred',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'white',
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
          header: () => <CustomHeader title="Current Weather" backgroundColor="white" />,
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'droplet'}
              size={25}
              color={focused ? 'indianred' : 'black'}
            />
          )
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name={'Forecast'}
        options={{
          header: () => <CustomHeader title="Forecast" backgroundColor="white" />,
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'clock'}
              size={25}
              color={focused ? 'indianred' : 'black'}
            />
          )
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name={'City'}
        options={{
          header: () => <CustomHeader title="City" backgroundColor="white" />,
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'home'}
              size={25}
              color={focused ? 'indianred' : 'black'}
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