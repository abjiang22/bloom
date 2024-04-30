import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Plant1 from '../assets/sprout-1.png';
import Plant2 from '../assets/sprout-2.png';
import Plant3 from '../assets/sprout-3.png';
import Plant4 from '../assets/flower-4.png';
import Plant5 from '../assets/flower-5.png';
import Plant6 from '../assets/flower-6.png';
import Plant7 from '../assets/flower-7.png';
import Plant8 from '../assets/flower-8.png';

const allTasksImagePath = '../assets/all-tasks-background.png'; // Path to your image

const AllTasksImage = ({ percentages }) => {
    const selectFlower = (percentage) => {
        if(percentage <= 15) {
            return Plant1;
        } else if (percentage > 15 && percentage <= 30) {
            return Plant2;
        } else if (percentage > 30 && percentage <= 45) {
            return Plant3;
        } else if (percentage > 45 && percentage <= 60) {
            return Plant4;
        } else if (percentage > 60 && percentage <= 75) {
            return Plant5;
        } else if (percentage > 75 && percentage <= 90) {
            return Plant6;
        } else if (percentage > 90 && percentage <= 99) {
            return Plant7;
        } else {
            return Plant8;
        }
    };
  return (
    <View style={styles.container}>
      <Image source={require(allTasksImagePath)} style={styles.image} />
      {Object.entries(percentages).map(([person, percentage], index) => (
        <View key={index} style={{ position: 'absolute', left: 100 * index, top: 0, padding: 10 }}>
          <Image source={selectFlower(percentage)} style={{ width: 100, height: 200 }} />
          <Text style={styles.text}>{person === 'My' ? 'Me' : person}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 400,
  },
  text: {
    color: '#ffffff',
    marginTop: 0,
    fontSize: 18,
    fontFamily: 'RoundedMplus1c-ExtraBold',
    left: 20,
  }
});

export default AllTasksImage;