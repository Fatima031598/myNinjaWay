import React, { useState, useContext, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
  SafeAreaView,
} from 'react-native';
import logo from '../assets/bestLogoEver.png';
import background from '../assets/background2.png';
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import moment from 'moment';
// import { useForm } from 'react-hook-form';
import ApiService from '../services/ApiService';
import mangasContex from '../context/mangasContext';

//MMMM Do, YYYY

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [birthday, setBirthday] = useState(moment(new Date()));
  // const [phoneNumber, setPhoneNumber] = useState();
  const { user, setUser } = useContext(mangasContex);

  // const handleDateChange = (e, selectedTime) => {
  //   setBirthday(selectedTime);
  // };
  // const { register, handleSubmit, watch, errors } = useForm();

  const onLogin = () => {
    let newUser = {
      first_name: firstName,
      last_name: lastName,
      birthday: '',
      phone_number: '',
      email: email,
      password: password,
      image: '',
      favorite_mangas: [],
    };
    ApiService.postUser(newUser).then((res) => setUser(res));
    // Alert.alert('Credentials', `${firstName} + ${lastName}`);
    navigation.navigate('Tabs');
  };
  console.log('user: ', user);
  return (
    <ImageBackground style={styles.container} source={background}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
      </View>
      <Text style={styles.Titletext}>Register</Text>
      {/* <SafeAreaView> */}
      <TextInput
        // ref={register({ required: true })}
        // {...register('firstName', { required: true })}
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        style={styles.input}
        placeholder="First name"
        placeholderTextColor={'black'}
      ></TextInput>
      {/* </SafeAreaView> */}
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
      {/* <TouchableOpacity style={styles.input}>
        <DateTimePicker
          style={styles.dateInput}
          placeholderText="Your birthday"
          timeZoneOffsetInMinutes={0}
          value={new Date(birthday)}
          mode="date"
          minimumDate={
            new Date(moment().subtract(120, 'years').format('YYYY-MM-DD'))
          }
          maximumDate={new Date(moment().format('YYYY-MM-DD'))}
          onChange={handleDateChange}
        />
      </TouchableOpacity>
      <TextInput
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        style={styles.input}
        placeholder="Your phone number"
        placeholderTextColor={'black'}
        secureTextEntry={true}
        // keyboardType="numeric"
        // dataDetectorTypes="phoneNumber"
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
    marginTop: 10,
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
    height: 115,
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
  dateInput: {
    padding: 10,
    marginRight: 130,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default SignUpScreen;
