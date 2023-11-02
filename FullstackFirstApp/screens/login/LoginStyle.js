import {appColor} from '../../utils/utils';

const {StyleSheet} = require('react-native');

export const LoginStyle = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: appColor.backgroundColor,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 35,
    fontWeight: '700',
    alignSelf: 'center',
    marginBottom: 20,
    color: appColor.TextColor,
  },
  SubContainer: {
    width: '100%',
  },
  AlreadyAccount: {
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Register: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
