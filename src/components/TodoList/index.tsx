import { Text, View } from 'react-native'
import { styles } from './styles'

export function TodoList() {
  return (
    <View>
      <View>
        <Text style={styles.label}>Criadas</Text>
        <Text style={styles.counter}>0</Text>
      </View>
      <View>
        <Text style={styles.label}>Concluídas</Text>
        <Text style={styles.counter}>0</Text>
      </View>
    </View>
  )
}
