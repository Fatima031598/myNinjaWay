import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MangaItem = ({ manga, navigation }) => {
  const handlePress = () => {
    navigation.navigate('MangaPreview', {
      manga,
    });
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
    width: 128,
    height: 176,
    marginHorizontal: 5,
  },
  image: {
    width: 128,
    height: 176,
  },
});
export default MangaItem;
