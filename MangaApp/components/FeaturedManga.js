import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const FeaturedManga = ({ manga, navigation }) => {
  const handlePress = () => {
    navigation.navigate('MangaPreview', {
      manga,
    });
  };
  return (
    <TouchableOpacity style={styles.mangaContainer} onPress={handlePress}>
      <Image source={{ uri: manga.image }} style={styles.image}></Image>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mangaContainer: {
    width: windowWidth,
    height: windowWidth * 1.375,
    marginHorizontal: 5,
  },
  image: {
    width: windowWidth,
    height: windowWidth * 1.375,
  },
});

export default FeaturedManga;
