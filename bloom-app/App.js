import React, { useState }from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage.js';
import { enableScreens } from 'react-native-screens';
import MainPage from './pages/MainPage.js';
const Stack = createNativeStackNavigator();
import * as Font from 'expo-font'; 
import AppLoading from 'expo-app-loading';


async function loadFonts() {
  await Font.loadAsync({
    'RoundedMplus1c-Regular': require('./assets/fonts/MPLUSRounded1c-Regular.ttf'),
    'RoundedMplus1c-Bold': require('./assets/fonts/MPLUSRounded1c-Bold.ttf'),
    'RoundedMplus1c-ExtraBold': require('./assets/fonts/MPLUSRounded1c-ExtraBold.ttf')
  });
}

function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingPage} options={{ headerShown: false }} />
        <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;