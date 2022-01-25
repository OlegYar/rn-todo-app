import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Navbar from "./src/Navbar";
import TodoForm from "./src/TodoForm";
import Todo from './src/Todo';

export default function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = title => {
        setTodos(prevState => [...prevState, {
            id: Date.now().toString(),
            title,
        }])
    }

    const removeTodo = id => setTodos(prevState => prevState.filter(todo => todo.id !== id));

    return (
        <View>
            <Navbar title={'Todo App'}/>
            <View style={styles.container}>
                <TodoForm onSubmit={addTodo}/>
                <FlatList
                    keyExtractor={item => item.id}
                    data={todos}
                    renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo}/>}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
      paddingHorizontal: 30,
      paddingVertical: 20,
  },
});
