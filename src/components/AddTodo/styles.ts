import { StyleSheet } from 'react-native'
import { colors } from '@theme/colors'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 52,
    flex: 1,
    marginRight: 4,
    borderRadius: 6,
    padding: 16,
    backgroundColor: colors.gray500,
    color: colors.gray100,
    fontSize: 16,
    lineHeight: 22,
  },
  button: {
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    padding: 18,
    backgroundColor: colors['blue-dark'],
  },
})
