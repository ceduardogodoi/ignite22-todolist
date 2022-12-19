import { Text, TouchableOpacity, View } from "react-native";
import { Todo } from "../../../../models/Todo";
import { styles } from "./styles";
import Trash from '../../../../../assets/trash.svg'
import Check from '../../../../../assets/check.svg'
import { colors } from "../../../../theme/colors";

interface ListCardProps {
  todo: Todo
  deleteTodo(id: string): void
  markAsComplete(id: string): void
}

export function ListCard({
  todo,
  deleteTodo,
  markAsComplete
}: ListCardProps) {
  return (
    <TouchableOpacity style={styles.todoCard} onPress={() => markAsComplete(todo.id)}>
      <View style={styles.checkContainer}>
        <View style={[styles.checkShape, todo.isCompleted ? styles.checkChecked : styles.checkUnchecked]}>
          {todo.isCompleted && <Check stroke={colors.gray100} />}
        </View>
      </View>

      <View style={styles.textContainer}>
        <Text style={[styles.todoText, todo.isCompleted && styles.strikethroughDescription]}>
          {todo.description}
        </Text>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
          <Trash width={12} height={14} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}
