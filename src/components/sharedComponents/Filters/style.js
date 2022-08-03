import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    flex: 1,

    backgroundColor: colors.secondary,
    // borderRadius: 20,
    paddingHorizontal: normalize(20),
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop: normalize(20),
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: colors.primary,
  },
  buttonClose: {
    backgroundColor: colors.secondary,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    fontSize: normalize(14),
    color: colors.white,
    marginBottom: normalize(10),
    marginTop: normalize(20),
  },
  input: {
    backgroundColor: colors.primary,
    borderRadius: normalize(10),
    height: normalize(40),
    color: colors.white,
    paddingHorizontal: normalize(10),
  },
  modalText: {
    fontSize: normalize(16),
    color: colors.white,
    marginTop: normalize(40),
    marginBottom: normalize(20),
    textAlign: 'center',
  },
  multiOptionsContainer: {marginBottom: normalize(10)},
  multiOptionsItems: {flexDirection: 'row', marginBottom: normalize(5)},
  multiOptions: {
    width: normalize(20),
    height: normalize(20),
    borderWidth: 1,
    borderRadius: normalize(5),
    borderColor: colors.white,
    marginRight: normalize(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  multiOptionSelected: {backgroundColor: colors.orange},
  multiOptionsLabel: {fontSize: normalize(14), color: colors.white},
});
