import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  gridItemContainer: {
    backgroundColor: colors.primary,
    marginHorizontal: normalize(10),
    marginBottom: normalize(10),
    borderRadius: normalize(10),
    flex: 1,
  },
  itemContainer: {
    backgroundColor: colors.primary,
    marginHorizontal: normalize(10),
    marginBottom: normalize(10),
    borderRadius: normalize(10),
    flexDirection: 'row',
  },
  col1: {
    flex: 0.45,
    borderTopLeftRadius: normalize(10),
    borderBottomLeftRadius: normalize(10),
  },
  col2: {flex: 0.45, justifyContent: 'center'},
  col3: {flex: 0.1, paddingVertical: normalize(10)},
  gridCol2: {
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(10),
  },
  imageStyle: {
    aspectRatio: 0.8,
    width: normalize(150),
    borderTopLeftRadius: normalize(10),
    borderBottomLeftRadius: normalize(10),
  },
  gridImageStyle: {
    aspectRatio: 3 / 2,
    width: '100%',
    borderTopStartRadius: normalize(10),
    borderTopEndRadius: normalize(10),
  },
  title: {
    fontSize: normalize(16),
    color: colors.white,
    fontWeight: '700',
  },
  gridTitle: {
    fontSize: normalize(14),
    color: colors.white,
    fontWeight: '700',
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
    fontSize: normalize(12),
    color: colors.white,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  details: {marginBottom: normalize(10)},
  label: {fontSize: normalize(12), color: colors.third, fontWeight: '400'},
  value: {
    fontSize: normalize(12),
    color: colors.white,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  listOptionContainer: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    justifyContent: 'flex-end',
    borderRadius: normalize(10),
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginHorizontal: normalize(10),
    marginBottom: normalize(20),
    borderWidth: 1,
    borderColor: colors.primary,
  },
  listOption: {
    backgroundColor: colors.primary,
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(5),
    borderRadius: normalize(10),
  },
  listOptionList: {
    borderTopLeftRadius: normalize(10),
    borderBottomLeftRadius: normalize(10),
    backgroundColor: colors.orange,
  },
  listOptionGrid: {
    borderTopRightRadius: normalize(10),
    borderBottomRightRadius: normalize(10),
    backgroundColor: colors.orange,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: normalize(20),
  },
  listContainer: {height: '80%'},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: normalize(20),
  },
});
