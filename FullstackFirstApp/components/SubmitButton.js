import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {appColor} from '../utils/utils';

export default function SubmitButton({OnPress, Name}) {
  return (
    <View>
      <TouchableOpacity style={styles.SubmitButton} onPress={OnPress}>
        <Text style={styles.SubmitButtonText}>{Name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  SubmitButton: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: appColor.ButtonColor,
    height: 50,
    borderRadius: 10,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SubmitButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
});
