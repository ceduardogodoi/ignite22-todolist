import { StyleSheet } from 'react-native'
import { colors } from './src/theme/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray700,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
  content: {
    padding: 24,
  },
})
