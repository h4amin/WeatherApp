import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'
import moment from 'moment'

const ListItem = (props)=> {
	
	const dayColors = {
	  Monday: '#3498db',     // Light Blue
	  Tuesday: '#2ecc71',    // Light Green
	  Wednesday: '#e74c3c',  // Light Red
	  Thursday: '#9b59b6',   // Light Purple
	  Friday: '#1abc9c',     // Light Teal
	  Saturday: '#f1c40f',   // Yellow
	  Sunday: '#f39c12',     // Orange
	};

	const {dt_txt, min, max, condition } = props
	
	const {item, date, temp, dateTextWrapper  } = styles

  // Get the day of the week from the date
  const dayOfWeek = moment(dt_txt).format('dddd');

  // Get the time of day from the date
  const timeOfDay = moment(dt_txt).format('h:mm A'); // 'h:mm A' format for 12-hour time with AM/PM

  // Use the day-to-color mapping to set the background color
  const bgColor = dayColors[dayOfWeek] || 'indianred';

  return (
    <View style={[styles.item, { backgroundColor: bgColor }]}>
      <View style={styles.iconDayWrapper}>
        <Feather name={weatherType[condition]?.icon} size={50} color={'white'} />
        <Text style={styles.day}>{dayOfWeek}</Text>
        <Text style={styles.time}>{timeOfDay}</Text>
      </View>
      <View style={styles.tempWrapper}>
        <Text style={styles.temp}>
          Low: {Math.round(min)}°
        </Text>
        <Text style={styles.temp}>
          High: {Math.round(max)}°
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
	item:{
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		borderWidth: 5,
		backgroundColor: 'indianred'
	},

	temp:{
		color: 'white',
		fontSize: 20
	},

	time: {
    fontSize: 12, // Adjust the font size for the time
    color: 'black',
  	},

	day:{
		color: 'grey',
		fontSize: 24
	},
	dateTextWrapper:{
	flexDirection: 'column'
	},
	tempWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-end', // Align low and high temperatures to the right
  },
  iconDayWrapper: {
    flexDirection: 'column',
    alignItems: 'center', // Center items vertically
  }
})
export default ListItem