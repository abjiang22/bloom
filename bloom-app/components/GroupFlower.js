import React from 'react';
import { View, Image,StyleSheet} from 'react-native';
import Plant1 from '../assets/sprout-1.png';
import Plant2 from '../assets/sprout-2.png';
import Plant3 from '../assets/sprout-3.png';
import Plant4 from '../assets/group-flower-4.png';
import Plant5 from '../assets/group-flower-5.png';
import Plant6 from '../assets/group-flower-6.png';
import Plant7 from '../assets/group-flower-7.png';
import Plant8 from '../assets/group-flower-8.png';
import PlantScene from '../assets/group-background.png';


function GroupFlower({ percentages }) {
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
            return <Image source={Plant5} style={styles.plant5} />;
        } else if (percentage > 75 && percentage <= 90) {
            return <Image source={Plant6} style={styles.plant6} />;
        } else if (percentage > 90 && percentage <= 99) {
            return <Image source={Plant7} style={styles.plant7} />;
        } else {
            return <Image source={Plant8} style={styles.plant8} />;
        }
    };
  
    return (
      <View className="plantContainer">
        <Image source={PlantScene} style={styles.scene}/>
        {getPlant(percentages)}
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
    width: 387,
    height: 415,
   },
   plant1: {
        width: 108,
        height: 210,
        position: 'absolute',
        left: 138,
        top: 25,
   },
   plant4: {
        width: 110,
        height: 210,
        position: 'absolute',
        left: 138,
        top: 25,
    },
    plant5: {
        width: 115,
        height: 210,
        position: 'absolute',
        left: 136,
        top: 25,
    },
    plant6: {
        width: 120,
        height: 210,
        position: 'absolute',
        left: 138,
        top: 25,
    },
    plant7: {
        width: 115,
        height: 210,
        position: 'absolute',
        left: 138,
        top: 25,
    },
    plant8: {
        width: 115,
        height: 210,
        position: 'absolute',
        left: 138,
        top: 25,
    }
  });
  
  export default GroupFlower;