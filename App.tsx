import { useState } from 'react';
import { Image, View, StatusBar, SafeAreaView } from 'react-native'
import uuid from 'react-native-uuid'
import { AddTodo } from './src/components/AddTodo'
import { ListTodo } from './src/components/ListTodo'
import { styles } from './styles'
import logo from './assets/logo.png'

import type { Todo } from './src/models/Todo';

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleAddTodo(description: string) {
    const newTodo: Todo = {
      id: uuid.v4() as string,
      description,
      isCompleted: false,
    }
    setTodos(state => [...state, newTodo])
  }

  function handleDeleteTodo(id: string) {
    setTodos(state => state.filter(todo => todo.id !== id))
  }

  function handleToggleTodo(id: string) {
    const todoIndex = todos.findIndex(todo => todo.id === id)
    const todo: Todo = todos[todoIndex]
    const toggledTodo: Todo = {
      ...todo,
      isCompleted: !todo.isCompleted
    }

    // wrong
    setTodos(state => {
      state.splice(todoIndex, 1, toggledTodo)

      return [...state]
    })
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image source={logo} />
          </View>

          <AddTodo onAdd={handleAddTodo} />

          <ListTodo
            todos={todos}
            onDelete={handleDeleteTodo}
            onMarkAsComplete={handleToggleTodo}
          />
        </View>
      </SafeAreaView>
    </>
  )
}
