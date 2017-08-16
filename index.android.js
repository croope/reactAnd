/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component} from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

var MOCKED_MOVIES_DATA = [
	{title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

export default class reactAnd extends Component {
	onClick = (event, data) => {
		
	}

	render() {
		var movie = MOCKED_MOVIES_DATA[0];

		return (
		<View style={styles.container}>
			<Text
				onClick={this.onClick}
				style={styles.welcome}>
				Welcome to React Native bruv!
			</Text>
			<Text style={styles.instructions}>
				{movie.title}
			</Text>
			<Text style={styles.instructions}>
				{movie.year}
			</Text>
			<Image style={styles.thumbnail} source={{uri: movie.posters.thumbnail}} />
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
	thumbnail: {
		width: 53,
		height: 81,
	}
});

AppRegistry.registerComponent('reactAnd', () => reactAnd);
