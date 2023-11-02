import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {RegisterStyle} from './RegisterStyle';
import Inputbox from '../../components/Inputbox';
import SubmitButton from '../../components/SubmitButton';
import {useNavigation} from '@react-navigation/core';
import axios from 'axios';

export default function Register() {
  const navigation = useNavigation();
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handleSubmit = async () => {
    try {
      // if (name == '' || email == '' || password == '') {
      //   Alert.alert('Sorry', 'Please Fill All Information');
      // }

      const {data, status} = await axios.post(
        'http://localhost:8080/api/v1/auth/register',
        {name, email, password},
      );

      if (data) {
        Alert.alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={RegisterStyle.Container}>
      <Text style={RegisterStyle.heading}>Register</Text>
      <View style={RegisterStyle.SubContainer}>
        <Inputbox
          placeholder={'Enter Your Name'}
          inputName={'Name'}
          OnChangeText={text => setname(text)}
          value={name}
        />
        <Inputbox
          placeholder={'Enter Your Email'}
          inputName={'Email'}
          OnChangeText={text => setemail(text)}
          value={email}
        />
        <Inputbox
          placeholder={'Enter Your Password'}
          inputName={'Password'}
          OnChangeText={text => setpassword(text)}
          value={password}
          SecureTextEntry={true}
        />
        <SubmitButton OnPress={handleSubmit} Name={'Register'} />
        <View style={RegisterStyle.AlreadyAccount}>
          <Text>Already have an account </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={RegisterStyle.login}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
