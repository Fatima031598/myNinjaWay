import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ApiService from '../services/ApiService';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import MangaItem from '../components/MangaItem';
import FeaturedManga from '../components/FeaturedManga';

function HomeScreen() {
  const [mangasList, setMangasList] = useState([]);
  const [featuredManga, setFeaturedManga] = useState([]);

  useEffect(() => {
    ApiService.getMangas()
      .then((arr) => {
        setMangasList(arr);
        return arr;
      })
      .then((mangasArr) => {
        const manga = mangasArr.filter(
          (manga) => manga.title === 'I Shall Live As a Prince',
        );
        setFeaturedManga(manga);
        // console.log('featured: ', featuredManga);
      });
  }, []);

  const renderItem = ({ item }) => {
    return <MangaItem manga={item}></MangaItem>;
  };
  const actionList = mangasList.filter((manga) =>
    manga.genre.includes('Action'),
  );
  const fantasyList = mangasList.filter((manga) =>
    manga.genre.includes('Fantasy'),
  );
  const adventureList = mangasList.filter((manga) =>
    manga.genre.includes('Adventure'),
  );
  const dramaList = mangasList.filter((manga) => manga.genre.includes('Drama'));

  return (
    <LinearGradient
      colors={['#e8fafe', '#66bad7', '#9cc072']}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 0.8 }}
      locations={[0, 0.7, 0.8]}
      style={styles.container}
    >
      <ScrollView style={styles.mainScrollView}>
        <ScrollView style={[styles.mangaListContainer, styles.shadow]}>
          {featuredManga[0] ? (
            <FeaturedManga manga={featuredManga[0]}></FeaturedManga>
          ) : (
            <Text>loading...</Text>
          )}
          <Text style={styles.text}>Action</Text>
          <FlatList
            data={actionList}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            horizontal={true}
          ></FlatList>
          <Text style={styles.text}>Drama</Text>
          <FlatList
            data={dramaList}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            horizontal={true}
          ></FlatList>
          <Text style={styles.text}>Adventure</Text>
          <FlatList
            data={adventureList}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            horizontal={true}
          ></FlatList>
          <Text style={styles.text}>Fantasy</Text>
          <FlatList
            data={fantasyList}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            horizontal={true}
          ></FlatList>
        </ScrollView>
      </ScrollView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  mainScrollView: {
    marginBottom: 95,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  mangaListContainer: {
    marginHorizontal: 20,
    marginTop: 50,
  },
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Avenir-HeavyOblique',
  },
});

export default HomeScreen;
