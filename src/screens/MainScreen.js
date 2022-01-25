import React from "react";
import {FlatList, StyleSheet, View} from 'react-native';
import TodoForm from "../components/TodoForm";
import Todo from "../components/Todo";

const MainScreen = ({ addTodo, todos, removeTodo, onOpen }) => {
	return (
		<View>
			<TodoForm onSubmit={addTodo}/>
			<FlatList
				keyExtractor={item => item.id}
				data={todos}
				renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} onOpen={onOpen}/>}
			/>
		</View>
	)
}

const styles = StyleSheet.create({

})

export default MainScreen;
