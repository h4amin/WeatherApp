import React from 'react'
import { View, StyleSheet, Text, ImageBackground, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons'
import IconText from '../components/IconText'
import Constants from 'expo-constants'
import moment from 'moment'

const City = ( {weatherData} ) => {
	const {
		container, 
		imageLayout, 
		cityName, 
		cityText, 
		countryName, 
		populationWrapper, 
		populationText, 
		riseSetWrapper, 
		riseSetText, 
		rowLayout
	} = styles

	const {name, country, population, sunrise, sunset}  = weatherData

	return(
		<View style={container}>
		  <ImageBackground 
		  	source={require('../../assets/city-background.jpg')} 
		  	style={styles.imageLayout}
		  	>
			<Text style={[cityName,cityText]}>{name}</Text>
			<Text style={[countryName, cityText]}>{country}</Text>
			<View style={[populationWrapper,rowLayout]}>
				<IconText 
					iconName={'user'} 
					iconColor={'red'} 
					bodyText={`Population: ${population}`} 
					bodyTextStyles={populationText}
				/>
			</View>
			<View style={[riseSetWrapper, rowLayout]}>
				<IconText 
					iconName={'sunrise'} 
					iconColor={'yellow'} 
					bodyText={moment(sunrise).format('h:mm:ss a')} 
					bodyTextStyles={riseSetText}
				/>
				<IconText 
					iconName={'sunset'} 
					iconColor={'red'} 
					bodyText={moment(sunset).format('h:mm:ss p')} 
					bodyTextStyles={riseSetText}
				/>
			</View>
		  </ImageBackground>
		</View>

	)

}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		marginTop:  0, 
	},
	imageLayout: {
		flex: 1
	},
	cityName: {
		fontSize: 40
	},

	countryName: {
		fontSize: 30
	},

	cityText:{
		justifyContent: "center",
		alignSelf: "center",
		fontWeight: 'bold',
		color: 'white'
	},

	populationWrapper: {
		justifyContent: 'center',
		marginTop: '30'
	},
	populationText: {
		fontSize: 25,
		marginLeft: 7.5,
		color: 'red'
	},

	riseSetWrapper:{
		justifyContent: 'space-around',
		marginTop: 30
	},
	riseSetText:{
		fontSize: 20,
		color: 'white'
	},
	rowLayout:{
		flexDirection: 'row',
		alignItems: 'center'
	}
})

export default City