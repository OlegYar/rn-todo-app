import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";

const TodoForm = ({ onSubmit }) => {
	const [value, setValue] = useState('');
	const handlePress = () => {
		if(value.trim()) {
			onSubmit(value);
			setValue('');
		} else {
			Alert.alert('Введите название дела');
		}
	};

	return (
		<View style={styles.block}>
			<TextInput
				style={styles.input}
				value={value}
				onChangeText={setValue}
				placeholder='Название дела'
				autoCorrect={false}
				autoCapitalize='none'
			/>
			<Button title='Добавить дело' onPress={handlePress}/>
		</View>
	)
}

const styles = StyleSheet.create({
	block: {
		flexDirection: "row",
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 15,
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
