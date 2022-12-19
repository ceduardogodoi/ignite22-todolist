import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { EmptyList } from './components/EmptyList'
import { styles } from './styles'

import type { Todo } from '../../models/Todo'
import { ListCard } from './components/ListCard'

interface ListTodosProps {
  todos: Todo[]
  onDelete(id: string): void
  onMarkAsComplete(id: string): void
}

export function ListTodo({
  todos,
  onDelete: deleteTodo,
  onMarkAsComplete: markAsComplete,
}: ListTodosProps) {
  const todosCompleted = todos.reduce((accumulator, todo) => {
    if (todo.isCompleted) {
      accumulator++
    }

    return accumulator
  }, 0);

  function handleDeleteTodo(id: string) {
    deleteTodo(id)
  }

  function handleMarkAsComplete(id: string) {
    markAsComplete(id)
  }

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.counterContainer}>
          <Text style={[styles.label, styles.labelCreated]}>Criadas</Text>
          <View style={styles.counter}>
            <Text style={styles.counterValue}>{todos.length}</Text>
          </View>
        </View>
        <View style={styles.counterContainer}>
          <Text style={[styles.label, styles.labelCompleted]}>Concluídas</Text>
          <View style={styles.counter}>
            <Text style={styles.counterValue}>{todosCompleted}</Text>
          </View>
        </View>
      </View>

      <FlatList
        style={styles.todoContainer}
        ListEmptyComponent={EmptyList}
        data={todos}
        keyExtractor={todo => todo.id}
        renderItem={({ item: todo }) => (
          <ListCard
            todo={todo}
            deleteTodo={handleDeleteTodo}
            markAsComplete={handleMarkAsComplete}
          />
        )}
      />
    </View>
  )
}
