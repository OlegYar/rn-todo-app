import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Navbar from "./src/components/Navbar";
import MainScreen from "./src/screens/MainScreen";
import TodoScreen from "./src/screens/TodoScreen";

export default function App() {
    const [todoId, setTodoId] = useState(null);
    const [todos, setTodos] = useState([]);

    const addTodo = title => {
        setTodos(prevState => [...prevState, {
            id: Date.now().toString(),
            title,
        }])
    }

    const removeTodo = id => setTodos(prevState => prevState.filter(todo => todo.id !== id));
    let content = <MainScreen
        todos={todos}
        addTodo={addTodo}
        removeTodo={removeTodo}
    />;

    if(todoId) content = <TodoScreen/>;

    return (
        <View>
            <Navbar title={'Todo App'}/>
            <View style={styles.container}>
                {content}
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
