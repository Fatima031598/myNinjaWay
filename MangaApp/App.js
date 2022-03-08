import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import Tabs from './screens/Tabs';
import MangaPreviewScreen from './screens/MangaPreviewScreen';
import mangasContex from './context/mangasContext';
import React, { useState, useEffect } from 'react';
import ApiService from './services/ApiService';
import ReadMangascreen from './screens/ReadMangaScreen';

const Stack = createStackNavigator();

const App = () => {
  const [mangasList, setMangasList] = useState([]);
  const [featuredManga, setFeaturedManga] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState({});
  console.log(user);
  useEffect(() => {
    ApiService.getMangas()
      .then((arr) => {
        setMangasList(arr);
        return arr;
      })
      .then((mangasArr) => {
        const manga = mangasArr.find(
          (manga) => manga.title === 'I Shall Live As a Prince',
        );
        setFeaturedManga(manga);
      });
  }, []);

  return (
    <mangasContex.Provider
      value={{
        mangasList,
        featuredManga,
        favorites,
        setFavorites,
        user,
        setUser,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            // navigation={navigation}
            // options={{
            //   headerShown: false,
            // }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            // options={{
            //   headerShown: false,
            // }}
          />
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MangaPreview"
            component={MangaPreviewScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ReadManga"
            component={ReadMangascreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </mangasContex.Provider>
  );
};
export default App;
