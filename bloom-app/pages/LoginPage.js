import {StatusBar} from 'expo-status-bar';
import {View, Image} from 'react-native';
import {styles} from './AppStyles';
import SimpleButton from '../components/SimpleButton';
import Logo from '../components/Logo';

function LoginPage({navigation}) {
  return (
    <View style={styles.container}>
      <Logo />
      <Image path="assets/logo.png"></Image>
      <SimpleButton label="Create Account" bgColor='#FFFFFF' labelColor='#2D6A6E' />
      <StatusBar style="auto" />
    </View>
  );
}

export default LoginPage;