import {StatusBar} from 'expo-status-bar';
import {View, Image} from 'react-native';
import {styles} from './AppStyles';
import SimpleButton from '../components/SimpleButton';
import Logo from '../components/Logo';
import LandingPage from '../pages/LandingPage.js';

function LoginPage({navigation}) {
  return (
    <View style={styles.container}>
      <Logo />
      <Image path="assets/logo.png"></Image>
      <SimpleButton label="Login" bgColor='#2D6A6E' labelColor='#FFFFFF' onPress={() => navigation.navigate('LandingPage')}/>
      <SimpleButton label="Create Account" bgColor='#FFFFFF' labelColor='#2D6A6E' />
      <StatusBar style="auto" />
    </View>
  );
}

export default LoginPage;