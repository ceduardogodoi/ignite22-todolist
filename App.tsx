import { Image, View, StatusBar, SafeAreaView } from 'react-native'
import { AddTodo } from './src/components/AddTodo'
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
            <Image source={require('./assets/logo.png')} />
          </View>

          <AddTodo />
        </View>
      </SafeAreaView>
    </>
  )
}
