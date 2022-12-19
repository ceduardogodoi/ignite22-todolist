import { Text, View } from 'react-native'
import { styles } from './styles';
import Clipboard from '../../../../../assets/clipboard.svg'

export function EmptyList() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Clipboard width={56} height={56} />
      </View>

      <Text style={styles.headline}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.body}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}