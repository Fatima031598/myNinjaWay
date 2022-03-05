import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

import logo from '../assets/bestLogoEver.png';
import background from '../assets/background2.png';

const Home = ({ navigation }) => {
  return (
    <ImageBackground style={styles.container} source={background}>
      <View>
        <Image source={logo} style={styles.logo} />
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignUp');
        }}
        style={styles.btn}
      >
        <Text style={styles.text}>SIGN UP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignIn');
        }}
        style={styles.btn}
      >
        <Text style={styles.text}>SIGN IN</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  btn: {
    backgroundColor: 'white',
    height: 50,
    width: 300,
    borderRadius: 50 / 2,
    marginHorizontal: 1,
    marginVertical: 10,
    justifyContent: 'center',
    marginBottom: 7,
    opacity: 0.6,
  },
});

export default Home;
