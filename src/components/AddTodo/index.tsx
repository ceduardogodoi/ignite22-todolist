import { useState } from 'react'
import { Image, TextInput, TouchableOpacity, View } from 'react-native'
import { colors } from '../../theme/colors'
import { styles } from './styles'
import plusImg from '@assets/plus.png'

interface AddTodoProps {
  onAdd(description: string): void
}

export function AddTodo({ onAdd: addTodo }: AddTodoProps) {
  const [description, setDescription] = useState('')

  function handleAddTodo() {
    const task = description.trim()
    if (task) {
      addTodo(task)
      setDescription('')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Adiciona uma nova tarefa"
        placeholderTextColor={colors.gray300}
        value={description}
        onChangeText={setDescription}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleAddTodo}
      >
        <Image source={plusImg} />
      </TouchableOpacity>
    </View>
  )
}
