import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function ProfileScreen() {
  return (
    <LinearGradient
      colors={['#e8fafe', '#66bad7', '#9cc072']}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 0.9 }}
      locations={[0, 0.6, 0.8]}
      style={styles.container}
    >
      <View>
        <Text>In Profiles Tab Screen</Text>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default ProfileScreen;
