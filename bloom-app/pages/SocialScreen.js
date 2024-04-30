import {StatusBar} from 'expo-status-bar';
import {View, Image} from 'react-native';

import SimpleButton from '../components/SimpleButton';
import Logo from '../components/Logo';

import {styles} from './AppStyles';

function SocialScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
}

export default SocialScreen;