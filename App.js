import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navbar from "./src/Navbar";
import TodoForm from "./src/TodoForm";

export default function App() {
  return (
    <View>
      <Navbar title={'Todo App'}/>
      <View style={styles.container}>
          <TodoForm/>
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
