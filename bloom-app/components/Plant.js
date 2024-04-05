import React from 'react';
import { View, Image } from 'react-native';
import PlantStage1 from '../assets/plant-progress1.png';
import PlantStageFinal from '../assets/plant-final.png';


function Plant({ completionPercentage }) {
    const getPlantStage = (percentage) => {
      if (percentage < 100) {
        return <Image source={PlantStage1} style={{ width: 370, height: 320 }} />; // Use img tag for SVG
      } else if (percentage == 100) {
        return <Image source={PlantStageFinal} style={{ width: 370, height: 400 }}/>; // Use img tag for PNG
      }
    };
  
    return (
      <View className="plant-container">
        {getPlantStage(completionPercentage)}
        {/* Additional elements or components */}
      </View>
    );
  }
  
  export default Plant;