import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
const FeaturedManga = ({ manga }) => {
  return (
    <TouchableOpacity style={styles.mangaContainer}>
      <Image source={{ uri: manga.image }} style={styles.image}></Image>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mangaContainer: {
    // flexDirection: 'row',
    // flex: 1,
    width: windowWidth,
    height: windowWidth * 1.375,
    backgroundColor: 'red',
    marginHorizontal: 5,
    // borderRadius: 0.5,
  },
  image: {
    // opacity: 1,
    width: windowWidth,
    height: windowWidth * 1.375,
    // borderRadius: 0.5,
  },
});

export default FeaturedManga;
