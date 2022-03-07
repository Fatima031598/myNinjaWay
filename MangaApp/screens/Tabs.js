import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../tabs/HomeScreen';
import FavoritesScreen from '../tabs/FavoritesScreen';
import ProfileScreen from '../tabs/ProfileScreen';
import { View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function Tabs({ navigation }) {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: 'lightgrey',
          height: 90,
        },
      }}
    >
      <Tab.Screen
        navigation={navigation}
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 15,
              }}
            >
              <FontAwesome
                name="home"
                size={40}
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  ...styles.text,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 15,
              }}
            >
              <FontAwesome
                name="heart"
                size={40}
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  ...styles.text,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 15,
              }}
            >
              <FontAwesome
                name="user"
                size={40}
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  ...styles.text,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Tabs;
