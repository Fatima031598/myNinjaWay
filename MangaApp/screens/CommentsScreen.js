import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import mangasContex from '../context/mangasContext';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

function CommentsScreen({ navigation }) {
  const { user } = useContext(mangasContex);
  const [comments, setComments] = useState([
    {
      user: 'Kim Kardashian',
      comment: ' Would read again! 😍👍 ',
    },
    {
      user: 'Donald Trump',
      comment: ' Very good 👌 ',
    },
    {
      user: 'Joe Biden',
      comment: ' Well done 👏 ',
    },
    {
      user: 'Johnny Depp',
      comment: ' Amazing 🤩',
    },
  ]);
  const [newComment, setNewComment] = useState('');
  const addToComments = () => {
    console.log(newComment);
    let commentObj = {
      user: `${user.first_name} ${user.last_name}`,
      comment: newComment,
    };
    setComments((prev) => [commentObj, ...prev]);
    setNewComment('');
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.comment}>
        <Text style={styles.username}>{item.user}</Text>
        <Text style={styles.commentText}>{item.comment}</Text>
      </View>
    );
  };

  return (
    <LinearGradient
      colors={['#121820', '#f2aa4f']}
      start={{ x: 1, y: 0.3 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={35} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Comments</Text>
      </View>
      <View style={styles.addCommentContainer}>
        <TextInput
          multiline
          editable
          maxLength={400}
          value={newComment}
          onChangeText={(text) => setNewComment(text)}
          style={styles.input}
          placeholder="Add a comment..."
          placeholderTextColor={'black'}
        ></TextInput>
        <TouchableOpacity
          onPress={() => {
            addToComments();
          }}
          style={styles.btn}
        >
          <Ionicons name="send" size={35} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={comments}
        renderItem={renderItem}
        keyExtractor={(item) => item.comment}
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
    marginTop: 50,
    backgroundColor: 'black',
  },
  mainScrollView: {
    backgroundColor: 'white',
    marginTop: 10,
    width: 350,
    marginBottom: 100,
    borderRadius: 25,
  },
  comment: {
    width: 400,
    height: 50,
    marginVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
  },
  input: {
    color: 'black',
    height: 80,
    width: 300,
    marginLeft: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    paddingHorizontal: 20,
    marginVertical: 10,
    fontSize: 20,
    fontWeight: '600',
    backgroundColor: 'white',
    borderRadius: 50 / 2,
  },
  btn: {
    paddingHorizontal: 10,
    height: 50,
    width: 70,
    borderRadius: 50 / 2,
    marginTop: 10,
    justifyContent: 'center',
    marginBottom: 10,
  },
  addCommentContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
  },
  header: {
    width: 360,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: 10,
  },
  title: {
    marginLeft: 90,
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    fontFamily: 'AppleSDGothicNeo-Bold',
    marginVertical: 10,
  },
  username: {
    marginHorizontal: 20,
    fontSize: 20,
    fontFamily: 'AppleSDGothicNeo-Bold',
  },
  commentText: {
    marginHorizontal: 20,
    fontSize: 15,
  },
});

export default CommentsScreen;
