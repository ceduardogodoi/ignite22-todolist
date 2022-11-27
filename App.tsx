import { Image, View, StatusBar, SafeAreaView } from 'react-native'
import { AddTodo } from '@components/AddTodo'
import { TodoList } from '@components/TodoList'
import logoImg from '@assets/logo.png'
import { styles } from './styles'

export default function App() {
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
            <Image source={logoImg} />
          </View>

          <AddTodo />
          <TodoList />
        </View>
      </SafeAreaView>
    </>
  )
}
