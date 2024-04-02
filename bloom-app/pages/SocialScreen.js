import {StatusBar} from 'expo-status-bar';
import {View, Image} from 'react-native';
import {styles} from './AppStyles';
import SimpleButton from '../components/SimpleButton';
import Logo from '../components/Logo';

function SocialScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
}

export default SocialScreen;