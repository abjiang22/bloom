import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { MaterialIcons } from '@expo/vector-icons';
import TaskList from './TaskList'

const GalleryPanel = ({ data, checkedTasks, toggleTask }) => {
    const allTasks = Object.values(data).flat();
    
    const combinedData = [['All', allTasks], ...Object.entries(data)];
    
    return (
        <Swiper style={styles.wrapper}
            showsButtons={true}
            nextButton={<MaterialIcons name="navigate-next" size={40} color="#2D6A6E" />}
            prevButton={<MaterialIcons name="navigate-before" size={40} color="#2D6A6E" />}
            buttonWrapperStyle={styles.buttonWrapper}
        >
        {combinedData.map(([name, tasks], index) => (
            <View key={index} style={styles.slide}>
            <Text style={styles.text}>{name} Tasks</Text>
            <TaskList tasks={tasks} checkedTasks={checkedTasks} toggleTask={toggleTask}/>
            </View>
        ))}
        </Swiper>
    );
};

const styles = StyleSheet.create({
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: '#2D6A6E',
    marginTop: 20,
    fontSize: 18,
    fontFamily: 'RoundedMplus1c-ExtraBold',
  },
  buttonWrapper: {
    alignItems: 'flex-start',
    paddingTop: 10,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: '#2D6A6E',
  },
});

export default GalleryPanel;