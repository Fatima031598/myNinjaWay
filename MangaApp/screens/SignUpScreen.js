import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
} from 'react-native';
import logo from '../assets/bestLogoEver.png';
import background from '../assets/background2.png';
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
const SignUpScreen = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(password);

  const onLogin = () => {
    console.log('sending it to the database');

    Alert.alert('Credentials', `${firstName} + ${lastName}`);
  };
  return (
    <ImageBackground style={styles.container} source={background}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
      </View>
      <Text style={styles.Titletext}>Register</Text>
      <TextInput
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        style={styles.input}
        placeholder="First name"
        placeholderTextColor={'black'}
      ></TextInput>
      <TextInput
        value={lastName}
        onChangeText={(text) => setLastName(text)}
        style={styles.input}
        placeholder="Last name"
        placeholderTextColor={'black'}
      ></TextInput>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        placeholder="Your email"
        placeholderTextColor={'black'}
      ></TextInput>
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        placeholder="Your password"
        placeholderTextColor={'black'}
        secureTextEntry={true}
      ></TextInput>
      {/* <TextInput
        style={styles.input}
        placeholder="Confirm password"
        placeholderTextColor={'black'}
      ></TextInput> */}
      <LinearGradient
        colors={['#ed4926', '#ed9c2d']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.btn}
      >
        <TouchableOpacity onPress={() => onLogin()}>
          <Text style={styles.text}>SIGN UP</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  logo: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    height: 50,
    width: 300,
    borderRadius: 50 / 2,
    marginHorizontal: 1,
    marginTop: 20,
    justifyContent: 'center',
    marginBottom: 10,
  },
  Titletext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    paddingVertical: 10,
  },
  header: {
    width: 370,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    color: 'black',
    height: 50,
    width: 300,
    marginHorizontal: 1,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    paddingHorizontal: 20,
    marginVertical: 10,
    fontSize: 20,
    fontWeight: '600',
    backgroundColor: 'white',
    opacity: 0.5,
    borderRadius: 50 / 2,
  },
});

export default SignUpScreen;
