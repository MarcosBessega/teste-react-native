import React, {Component} from "react";
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
	button: {
		width: 200,
		height: 30,
		padding: 10,
		backgroundColor: 'rgb(139, 0, 115)',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 3
	},
	text: {
		color: 'rgb(245, 245, 245)'
	},
	textHead: {
		fontSize: 25,
		color: 'rgb(245, 245, 245)'
	},
	counter: {
		fontSize: 120,
		paddingBottom: 90,
		fontWeight: 'bold',
		color: 'rgb(205, 92, 0)'
	},
	app: {
		backgroundColor: 'rgb(156, 215, 228)',
		flex: 1
	},
	body: {
		paddingTop: 125,
		alignItems: 'center',
		justifyContent: 'center'
	},
	header: {
		backgroundColor: 'rgb(139, 0, 115)',
		flex: 0,
		flexDirection: 'row',
		alignSelf: "stretch",
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center',
		height: 50
	}
});

export default class Counter extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {counter, increment, decrement, reset} = this.props;

		return (
			<View style={styles.app}>
				<View style={styles.header}>
					<Text style={styles.textHead}>BODYBUILDER COUNTER</Text>
				</View>
				<View style={styles.body}>
					<Text style={styles.counter}>{counter < 4 ? counter : 'BIRL!'}</Text>
					<TouchableOpacity onPress={increment} style={styles.button}>
						<Text style={styles.text}>HORA DO SHOW</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={decrement} style={styles.button}>
						<Text style={styles.text}>VAI DAR NÃO</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={reset} style={styles.button}>
						<Text style={styles.text}>BORA CUMPADE</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
