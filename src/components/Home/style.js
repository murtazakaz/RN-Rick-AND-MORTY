import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
    paddingBottom: normalize(20),
  },
  content: {marginVertical: normalize(20)},
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: normalize(20),
  },
});
