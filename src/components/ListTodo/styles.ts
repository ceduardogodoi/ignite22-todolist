import { StyleSheet } from 'react-native'
import { colors } from '../../theme/colors'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    paddingBottom: 20,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '700',
    marginRight: 8,
  },
  labelCreated: {
    color: colors.blue,
  },
  labelCompleted: {
    color: colors.purple,
  },
  counter: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: colors.gray400,
    borderRadius: 999,
  },
  counterValue: {
    color: colors.gray200,
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '600',
  },
  todoContainer: {

  },
})
