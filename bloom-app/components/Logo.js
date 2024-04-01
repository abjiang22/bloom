import React from 'react';
import {View, Image} from 'react-native';

const Logo = () => (
    <View>
      <Image 
        source={require('.././assets/logo.png')}
        style={{ width: 200, height: 230 }}
      />
    </View>
  );
  

export default Logo;