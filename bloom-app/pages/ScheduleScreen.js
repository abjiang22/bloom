import React, { useState } from 'react';
import {StatusBar} from 'expo-status-bar';
import {View, Image, Text, StyleSheet} from 'react-native';

import {styles} from './AppStyles';
import SimpleButton from '../components/SimpleButton';
import Logo from '../components/Logo';
import AddButton from '../components/AddButton';
import AddScheduleTaskPopUp from '../components/AddScheduleTaskPopUp';
import ScheduleTaskItem from '../components/ScheduleTaskItem';
import { useAppContext } from '../AppContext';

import Plant from '../assets/schedule-plant.png'

function ScheduleScreen({navigation}) {
  
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleSaveTask = (newTask) => {
    setTasks((currentTasks) => [...currentTasks, newTask]);
    setModalVisible(false);
  };


  const HorizontalLine = ({ style }) => (
    <View style={[ss.line, style]} />
  );

  return (
    <View style={ss.container}> 
      <View style={ss.titleContainer}>
        <Image source={Plant} style={ss.img}></Image>
        <Text style={ss.title}>Schedule</Text>
      
      </View>
      <HorizontalLine/>
      <AddButton onPress={() => setModalVisible(true)} /> 
      <AddScheduleTaskPopUp 
        isVisible={modalVisible} 
        onSave={handleSaveTask}
        onCancel={() => setModalVisible(false)}
      />
      {tasks.map((task, index) => (
        <ScheduleTaskItem key={index} {...task} />
      ))}
    </View>
    
  );
}

const ss = StyleSheet.create({
  container: {
    flex: 1, 
  },
  titleContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 75,
  }, 
  img: {
    marginLeft: 30,
    // png size
    maxWidth: 107,
    maxHeight: 80
  },
  line: {
    height: 1,
    backgroundColor: '#2D6A6E',
    width: '100%'
  },
  title: {
    color: '#2D6A6E',
    fontSize: 30,
    fontFamily: 'RoundedMplus1c-ExtraBold',
  }
});

export default ScheduleScreen;