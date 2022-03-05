import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function MangaPreviewScreen({ manga }) {
  return (
    <View style={styles.container}>
      <Text>preview of {manga.title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
});

export default MangaPreviewScreen;
