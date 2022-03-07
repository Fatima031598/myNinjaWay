import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

function MangaPreviewScreen({ navigation, route }) {
  const [images, setImages] = useState([]);
  const { chapters } = route.params;

  useEffect(() => {
    const imagePromises = chapters.map((img) => {
      return new Promise((resolve, reject) => {
        Image.getSize(
          img,
          (width, height) => {
            // successfully got image dimensions
            resolve({ url: img, width, height });
          },
          () => {
            // error case
            console.warn(`Error with ${img}`);
            resolve(null);
          },
        );
      });
    });

    Promise.all(imagePromises).then((images) => setImages(images));
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Image
        resizeMode="contain"
        source={{ url: item.url }}
        style={{
          width: windowWidth,
          height: (windowWidth / item.width) * item.height,
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.goBack}
      >
        <AntDesign name="arrowleft" size={35} color="white" />
      </TouchableOpacity>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.url}
      ></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginTop: 50,
  },
  goBack: {
    marginLeft: 20,
    marginVertical: 10,
  },
});

export default MangaPreviewScreen;
