import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {LoginStyle} from './LoginStyle';
import Inputbox from '../../components/Inputbox';
import SubmitButton from '../../components/SubmitButton';
import {useNavigation} from '@react-navigation/core';
import axios from 'axios';

export default function Login() {
  const navigation = useNavigation();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handleSubmit = async () => {
    // if (email == '' || password == '') {
    //   Alert.alert('Sorry', 'Please Fill All Information');
    // }

    const {data} = await axios.post('http://localhost:8080/api/v1/auth/login', {
      email,
      password,
    });

    if (data) {
      Alert.alert(data.message);
    }
  };
  return (
    <View style={LoginStyle.Container}>
      <Text style={LoginStyle.heading}>Login</Text>
      <View style={LoginStyle.SubContainer}>
        <Inputbox
          placeholder={'Enter Your email'}
          inputName={'email'}
          OnChangeText={text => setemail(text)}
          value={email}
        />
        <Inputbox
          placeholder={'Enter Your password'}
          inputName={'password'}
          OnChangeText={text => setpassword(text)}
          value={password}
          SecureTextEntry={true}
        />
        <SubmitButton OnPress={handleSubmit} Name={'Login'} />
        <View style={LoginStyle.AlreadyAccount}>
          <Text>Don't have an account</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={LoginStyle.Register}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
