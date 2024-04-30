import React, { useState }from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import AppLoading from 'expo-app-loading';
import { AppProvider } from './AppContext';
import * as Font from 'expo-font'; 

// Navigation Stack
const Stack = createNativeStackNavigator();

// Load Fonts
async function loadFonts() {
  await Font.loadAsync({
    'RoundedMplus1c-Regular': require('./assets/fonts/MPLUSRounded1c-Regular.ttf'),
    'RoundedMplus1c-Bold': require('./assets/fonts/MPLUSRounded1c-Bold.ttf'),
    'RoundedMplus1c-ExtraBold': require('./assets/fonts/MPLUSRounded1c-ExtraBold.ttf')
  });
}

// App Entry Point
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
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={LandingPage} options={{ headerShown: false }} />
          <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
          <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;