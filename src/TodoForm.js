import React from 'react';
import { StyleSheet, View, TextInput, Button } from "react-native";

const TodoForm = () => {
	return (
		<View style={styles.block}>
			<TextInput style={styles.input}/>
			<Button title='Добавить'/>
		</View>
	)
}

const styles = StyleSheet.create({
	block: {
		flexDirection: "row",
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	input: {
		width: '70%',
		padding: 10,
		borderStyle: "solid",
		borderBottomWidth: 2,
		borderBottomColor: '#3949ab'
	}
});

export default TodoForm;
