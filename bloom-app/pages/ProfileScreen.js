import {StatusBar} from 'expo-status-bar';
import {View, Image, Text} from 'react-native';
import {styles} from './AppStyles';
import SimpleButton from '../components/SimpleButton';
import Logo from '../components/Logo';

function ProfileScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>My Profile</Text>

    </View>
  );
}

export default ProfileScreen;