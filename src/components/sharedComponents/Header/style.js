import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: normalize(50),
    justifyContent: 'center',
    marginBottom: normalize(20),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: normalize(10),
  },
  headerTitle: {
    fontSize: normalize(18),
    color: colors.white,
    fontWeight: '700',
    flex: 1,
  },
});
