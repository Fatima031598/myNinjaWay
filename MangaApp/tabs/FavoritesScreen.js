import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import mangasContex from '../context/mangasContext';
import { useContext } from 'react';
import MangaItem from '../components/MangaItem';

function FavoritesScreen() {
  const { favorites } = useContext(mangasContex);

  const renderItem = ({ item }) => {
    return <MangaItem manga={item}></MangaItem>;
  };

  return (
    <LinearGradient
      colors={['#e8fafe', '#66bad7', '#9cc072']}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 0.8 }}
      locations={[0, 0.7, 0.8]}
      style={styles.container}
    >
      {/* <ScrollView style={styles.mainScrollView}> */}
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        // horizontal={true}
      ></FlatList>
      {/* </ScrollView> */}
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  mainScrollView: {
    width: 400,
    height: 400,
    marginBottom: 95,
  },
});

export default FavoritesScreen;
