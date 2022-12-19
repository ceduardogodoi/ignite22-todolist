import { StyleSheet } from 'react-native'
import { colors } from '../../../../theme/colors'

export const styles = StyleSheet.create({
  todoCard: {
    alignItems: 'center',
    minHeight: 64,
    flexDirection: 'row',
    padding: 12,
    backgroundColor: colors.gray500,
    borderRadius: 8,
    marginBottom: 8,
  },
  textContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  todoText: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.gray100,
  },
  iconContainer: {
    padding: 10,
    marginLeft: 8,
  },
  checkContainer: {
    padding: 4,
    marginRight: 8,
  },
  checkShape: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 18,
    height: 18,
    borderWidth: 2,
    borderRadius: 999,
  },
  checkUnchecked: {
    borderColor: colors.blue,
    backgroundColor: 'transparent',
  },
  checkChecked: {
    borderColor: colors['purple-dark'],
    backgroundColor: colors['purple-dark'],
  },
  strikethroughDescription: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: colors.gray300,
  },
})
