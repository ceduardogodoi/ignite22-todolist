import { Image, TextInput, TouchableOpacity, View } from 'react-native'
import { colors } from '@theme/colors'
import { styles } from './styles'
import plusImg from '@assets/plus.png'

export function AddTodo() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Adiciona uma nova tarefa"
        placeholderTextColor={colors.gray300}
      />

      <TouchableOpacity
        style={styles.button}
      >
        <Image source={plusImg} />
      </TouchableOpacity>
    </View>
  )
}
