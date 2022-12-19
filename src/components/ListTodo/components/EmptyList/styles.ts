import { StyleSheet } from 'react-native'
import { colors } from '../../../../theme/colors'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.gray400,
  },
  imageContainer: {
    marginTop: 48,
  },
  headline: {
    color: colors.gray300,
    lineHeight: 20,
    fontSize: 14,
    fontWeight: '700',
    marginTop: 16,
  },
  body: {
    color: colors.gray300,
    lineHeight: 20,
    fontSize: 14,
  },
})
