import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: normalize(10),
  },
  button: {
    borderRadius: normalize(20),
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(5),
    elevation: 2,
    minWidth: normalize(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOpen: {
    backgroundColor: colors.white,
  },
  buttonDisable: {
    backgroundColor: colors.primary,
  },
  currentPage: {fontSize: normalize(14), color: colors.orange},
});
