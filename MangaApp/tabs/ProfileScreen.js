import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import mangasContex from '../context/mangasContext';
import { LinearGradient } from 'expo-linear-gradient';

function ProfileScreen({ navigation }) {
  const [userImage, setUserImage] = useState(null);
  const { user, setUser } = useContext(mangasContex);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    setUserImage(pickerResult);
    setUser((prev) => ({
      ...prev,
      image: pickerResult.uri,
    }));
  };
  const handleLogout = () => {
    //send a put request here, make the profile editable in the future
    navigation.navigate('HomeScreen');
  };
  return (
    <LinearGradient
      colors={['#e8fafe', '#66bad7', '#9cc072']}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 0.8 }}
      locations={[0, 0.7, 0.8]}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <TouchableOpacity
          onPress={openImagePickerAsync}
          style={styles.avatarPlaceholder}
        >
          {userImage && (
            <Image source={{ uri: userImage.uri }} style={styles.avatar} />
          )}
          {userImage ? (
            <AntDesign
              name="plus"
              size={45}
              color="white"
              style={{ display: 'none' }}
            />
          ) : (
            <AntDesign name="plus" size={45} color="white" />
          )}
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <FontAwesome name="user" size={24} color="black" />
          <Text style={styles.info}>
            {user.first_name} {user.last_name}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <AntDesign name="calendar" size={24} color="black" />
          <Text style={styles.info}>March 15, 1965</Text>
        </View>
        <View style={styles.infoContainer}>
          <FontAwesome name="mobile-phone" size={34} color="black" />
          <Text style={styles.info}>+1-720-555-3456</Text>
        </View>
        <View style={styles.infoContainer}>
          <Zocial name="email" size={24} color="black" />
          <Text style={styles.info}>{user.email}</Text>
        </View>
        <View style={styles.infoContainer}>
          <FontAwesome name="eye" size={24} color="black" />
          <Text style={styles.info}>{user.password.replaceAll(/./g, '*')}</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={handleLogout}>
          <Text style={styles.btnText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 70,
    marginTop: 180,
    marginHorizontal: 30,
    borderRadius: 20,
    color: 'white',
    height: 550,
    backgroundColor: 'rgba(255, 255, 255, .5)',
  },
  avatarPlaceholder: {
    width: 150,
    height: 150,
    backgroundColor: 'grey',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -150,
  },
  avatar: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  label: {
    color: 'black',
    fontSize: 20,
    padding: 20,
  },
  info: {
    borderBottomColor: 'grey',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoContainer: {
    width: 280,
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  },
  btn: {
    backgroundColor: 'red',
    width: 200,
    height: 50,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: -20,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default ProfileScreen;
