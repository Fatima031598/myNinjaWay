import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import Tabs from './screens/Tabs';
import MangaPreviewScreen from './screens/MangaPreviewScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
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
          // options={{
          //   headerShown: false,
          // }}
        />
        {/* <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        /> */}
      </Stack.Navigator>
      {/* <Tabs></Tabs> */}
    </NavigationContainer>
  );
};
export default App;
