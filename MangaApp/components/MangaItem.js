import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MangaItem = ({ manga }) => {
  const handlePress = () => {
    console.log(manga.title);
  };
  return (
    <TouchableOpacity
      onPress={() => handlePress()}
      style={styles.mangaContainer}
    >
      <Image source={{ url: manga.image }} style={styles.image} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mangaContainer: {
    // flexDirection: 'row',
    // flex: 1,
    width: 128,
    height: 176,
    // backgroundColor: 'red',
    marginHorizontal: 5,
    // borderRadius: 0.5,
  },
  image: {
    // opacity: 1,
    width: 128,
    height: 176,
    // borderRadius: 0.5,
  },
});
export default MangaItem;
