import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },

  content: {
    backgroundColor: colors.primary,
    marginBottom: normalize(10),
    padding: normalize(20),
  },
  row: {flexDirection: 'row'},

  imageStyle: {
    width: '100%',
    aspectRatio: 1,
  },

  title: {
    fontSize: normalize(18),
    color: colors.white,
    fontWeight: '700',
    flex: 1,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: normalize(10),
    marginTop: normalize(5),
  },
  statusIcon: {
    width: normalize(10),
    height: normalize(10),
    backgroundColor: colors.third,
    borderRadius: normalize(10),
    marginRight: normalize(5),
  },
  statusAlive: {backgroundColor: colors.green},
  statusDead: {backgroundColor: colors.red},
  statusText: {
    fontSize: normalize(14),
    color: colors.white,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  details: {marginBottom: normalize(10)},
  label: {fontSize: normalize(14), color: colors.third, fontWeight: '400'},
  value: {
    fontSize: normalize(14),
    color: colors.white,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
});
