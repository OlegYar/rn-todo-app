import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Todo = ({ todo, onRemove, onOpen }) => {
	const longPressHandler = () => onRemove(todo.id);
	const pressHandler = () => onOpen(todo.id);

	return (
		<TouchableOpacity
			onPress={pressHandler}
			onLongPress={longPressHandler}
		>
			<View style={styles.todo}>
				<Text style={styles.text}>
					{todo.title}
				</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	todo: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 15,
		borderWidth: 1,
		borderColor: '#eee',
		borderRadius: 5,
		marginBottom: 10,
	},
})

export default Todo;
