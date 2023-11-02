import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {RegisterStyle} from '../screens/register/RegisterStyle';
import {appColor} from '../utils/utils';
export default function Inputbox({
  placeholder,
  inputName,
  OnChangeText,
  value,
  SecureTextEntry,
}) {
  return (
    <View style={styles.InputView}>
      <Text style={styles.InputTopName}>{inputName}</Text>
      <TextInput
        style={styles.Input}
        placeholder={placeholder}
        onChangeText={OnChangeText}
        value={value}
        secureTextEntry={SecureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  InputView: {
    alignSelf: 'center',
    width: '90%',
    marginTop: 15,
  },
  InputTopName: {
    fontSize: 18,
    marginBottom: 5,
    color: appColor.TextColor,
  },
  Input: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    marginTop: 5,
  },
});
