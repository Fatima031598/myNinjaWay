import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import mangasContex from '../context/mangasContext';
import { useContext } from 'react';
import MangaItem from '../components/MangaItem';
import { TextInput } from 'react-native-gesture-handler';

function SearchScreen({ navigation }) {
  const { mangasList } = useContext(mangasContex);
  const [filteredData, setfilteredData] = useState(mangasList);
  const [search, setSeacrh] = useState();
  const searchFilter = (text) => {
    if (text) {
      const newData = mangasList.filter((item) => {
        return item.title.indexOf(text) > -1;
      });
      setfilteredData(newData);
      setSeacrh(text);
    } else {
      setfilteredData(mangasList);
      setSeacrh(text);
    }
  };
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
    <LinearGradient
      colors={['#e8fafe', '#66bad7', '#9cc072']}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 0.8 }}
      locations={[0, 0.7, 0.8]}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.text}>All</Text>
        <TextInput
          style={styles.searchInput}
          value={search}
          placeholder="Search"
          onChangeText={(text) => searchFilter(text)}
        ></TextInput>
      </View>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        style={styles.mainScrollView}
      ></FlatList>
    </LinearGradient>
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
  searchInput: {
    height: 40,
    width: 130,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: 'grey',
    borderRadius: 15,
    fontWeight: 'bold',
    marginRight: 20,
    fontSize: 17,
  },
  text: {
    marginLeft: 20,
    fontSize: 35,
    color: 'grey',
    fontFamily: 'AppleSDGothicNeo-Bold',
  },
  header: {
    alignItems: 'center',
    marginTop: 60,
    // backgroundColor: 'pink',
    flexDirection: 'row',
    width: 350,
    justifyContent: 'space-between',
  },
});

export default SearchScreen;
