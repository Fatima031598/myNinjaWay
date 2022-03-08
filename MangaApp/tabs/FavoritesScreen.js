import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
} from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
import mangasContex from '../context/mangasContext';
import { useContext } from 'react';
import MangaItem from '../components/MangaItem';
import background from '../assets/background.png';

function FavoritesScreen({ navigation }) {
  const { favorites } = useContext(mangasContex);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.manga}>
        <MangaItem manga={item} navigation={navigation}></MangaItem>
        <View style={styles.textContainer}>
          <Text style={styles.mangaText}>{item.title}</Text>
          <FlatList
            style={styles.genreContainer}
            data={item.genre}
            renderItem={({ item }) => (
              <Text style={styles.genreText}># {item}</Text>
            )}
            keyExtractor={(item) => item}
          ></FlatList>
        </View>
      </View>
    );
  };

  return (
    // <LinearGradient
    //   colors={['#e8fafe', '#66bad7', '#9cc072']}
    //   start={{ x: 1, y: 0 }}
    //   end={{ x: 1, y: 0.8 }}
    //   locations={[0, 0.7, 0.8]}
    //   style={styles.container}
    // >
    <ImageBackground style={styles.container} source={background}>
      <Text style={styles.text}>Favorites</Text>
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        style={styles.mainScrollView}
      ></FlatList>
    </ImageBackground>
    // </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainScrollView: {
    backgroundColor: 'rgba(255, 255, 255, .5)',
    marginTop: 10,
    width: 350,
    marginBottom: 100,
    borderRadius: 25,
  },
  text: {
    marginTop: 60,
    fontSize: 35,
    color: 'white',
    fontFamily: 'AppleSDGothicNeo-Bold',
  },
  manga: {
    marginHorizontal: 10,
    width: 330,
    height: 180,
    marginTop: 10,
    flexDirection: 'row',
  },
  mangaText: {
    width: 190,
    height: 70,
    fontSize: 20,
    color: 'black',
    fontFamily: 'AppleSDGothicNeo-Medium',
    marginTop: 10,
    fontWeight: 'bold',
  },
  textContainer: {
    justifyContent: 'space-between',
  },
  genreText: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'AppleSDGothicNeo-Bold',
  },
  genreContainer: {
    marginLeft: 10,
    marginBottom: 5,
  },
});

export default FavoritesScreen;
