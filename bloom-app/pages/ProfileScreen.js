import {StatusBar} from 'expo-status-bar';
import {View, Image, Text} from 'react-native';

import SimpleButton from '../components/SimpleButton';
import Logo from '../components/Logo';

import {styles} from './AppStyles';

function ProfileScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>My Profile</Text>

    </View>
  );
}

export default ProfileScreen;