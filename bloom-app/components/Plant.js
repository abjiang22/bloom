import React from 'react';
import { View, Image,StyleSheet} from 'react-native';
import Plant1 from '../assets/sprout-1.svg';
import Plant2 from '../assets/sprout-2.svg';
import Plant3 from '../assets/sprout-3.svg';
import Plant4 from '../assets/flower-4.svg';
import Plant5 from '../assets/flower-5.svg';
import Plant6 from '../assets/flower-6.svg';
import Plant7 from '../assets/flower-7.svg';
import Plant8 from '../assets/flower-8.svg';
import PlantScene from '../assets/plant-scene.svg';


function Plant({ completionPercentage }) {
    const getPlant = (percentage) => {
        if(percentage <= 15) {
            return <Image source={Plant1} style={styles.plant1} />;
        } else if (percentage > 15 && percentage <= 30) {
            return <Image source={Plant2} style={styles.plant1} />;
        } else if (percentage > 30 && percentage <= 45) {
            return <Image source={Plant3} style={styles.plant1} />;
        } else if (percentage > 45 && percentage <= 60) {
            return <Image source={Plant4} style={styles.plant4} />;
        } else if (percentage > 60 && percentage <= 75) {
            return <Image source={Plant5} style={styles.plant1} />;
        } else if (percentage > 75 && percentage <= 90) {
            return <Image source={Plant6} style={styles.plant1} />;
        } else if (percentage > 90 && percentage <= 99) {
            return <Image source={Plant7} style={styles.plant1} />;
        } else {
            return <Image source={Plant8} style={styles.plant8} />;
        }
    };
  
    return (
      <View className="plantContainer">
        <Image source={PlantScene} style={styles.scence}/>
        {getPlant(completionPercentage)}
        {/* Additional elements or components */}
      </View>
    );
  }

  const styles = StyleSheet.create({

    plantContainer: {
        position: 'relative',
        width: 370,
        height: 320, 
        alignItems: 'center',
        justifyContent: 'center',
    },

   scene: {
        width: '100%',
        height: '100%',
        position: 'absolute',
   },

   plant1: {
        width: 100,
        height: 200,
        position: 'absolute',
        left: 128,
   },
   plant4: {
        width: 105,
        height: 200,
        position: 'absolute',
        left: 127,
    },

    plant8: {
        width: 115,
        height: 200,
        position: 'absolute',
        left: 120,
    }

  });
  
  export default Plant;