import React, { useState, useContext, useEffect } from 'react';
import mangasContex from '../context/mangasContext';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

const MangaPreviewScreen = ({ navigation, route }) => {
  const { manga } = route.params;
  const { favorites, setFavorites } = useContext(mangasContex);
  const [toggleHeart, setToggleHeart] = useState(false);
  const toggleHeartFunc = () => {
    if (favorites.includes(manga) && toggleHeart === true) {
      let fav = favorites.filter((item) => item._id !== manga._id);
      setFavorites(fav);
    }
    setToggleHeart(!toggleHeart);
  };
  useEffect(() => {
    if (toggleHeart && !favorites.includes(manga)) {
      setFavorites((prev) => [manga, ...prev]);
    } else if (!toggleHeart && favorites.includes(manga)) {
      setToggleHeart(true);
    }
  }, [toggleHeart]);
  const handlePress1 = () => {
    navigation.navigate('ReadManga', {
      chapters: manga.chapters[0].chapter_images,
    });
  };
  const handlePress2 = () => {
    navigation.navigate('ReadManga', {
      chapters: manga.chapters[1].chapter_images,
    });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.iconsContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.goBack}
        >
          <AntDesign name="arrowleft" size={35} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleHeartFunc} style={styles.heart}>
          {toggleHeart ? (
            <FontAwesome name="heart" size={32} color="red" />
          ) : (
            <FontAwesome name="heart-o" size={32} color="white" />
          )}
        </TouchableOpacity>
      </View>
      <Image source={{ url: manga.image }} style={styles.image}></Image>
      <Text style={styles.title}>{manga.title}</Text>
      <Text style={styles.text}>{manga.description}</Text>
      <TouchableOpacity onPress={handlePress1}>
        <View style={styles.chapterContainer}>
          <Text style={styles.chapterText}>Chapter 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
        <View style={styles.chapterContainer}>
          <Text style={styles.chapterText}>Chapter 2</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginTop: 50,
  },
  image: {
    width: 178,
    height: 216,
    width: windowWidth,
    height: windowWidth * 1.375,
  },
  text: {
    marginHorizontal: 20,
    fontSize: 17,
    color: 'white',
    fontFamily: 'AppleSDGothicNeo-Medium',
    marginBottom: 20,
  },
  title: {
    marginHorizontal: 40,
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    fontFamily: 'AppleSDGothicNeo-Bold',
    marginVertical: 10,
  },
  chapterContainer: {
    backgroundColor: 'grey',
    width: windowWidth - 30,
    height: 40,
    borderRadius: 15,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  chapterText: {
    marginHorizontal: 20,
    fontSize: 17,
    color: 'white',
    fontFamily: 'AppleSDGothicNeo-Medium',
  },
  goBack: {
    marginLeft: 20,
    marginVertical: 10,
  },
  heart: {
    marginRight: 20,
    marginVertical: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default MangaPreviewScreen;
