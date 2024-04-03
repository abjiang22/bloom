import {StatusBar} from 'expo-status-bar';
import {View, Image} from 'react-native';
import {styles} from './AppStyles';
import SimpleButton from '../components/SimpleButton';
import Logo from '../components/Logo';
import GalleryPanel from '../components/GalleryPanel'
import React, { useState } from 'react';

const taskData = {
  'My': ['Task 3', 'Task 4'],
  'Cassie': ['Task 5', 'Task 6'],
  'Stephanie': ['Task 7', 'Task 8'],
  'Wendy': ['Task 9', 'Task 10'],
};

function HomeScreen({navigation}) {
  const [tasks, setTasks] = useState(taskData);
  const [checkedTasks, setCheckedTasks] = useState({});

  const toggleTask = (taskName) => {
    setCheckedTasks(prevState => ({
      ...prevState,
      [taskName]: !prevState[taskName]
    }));
  };

  return (
    <View style={styles.galleryContainer}>
      <View style={styles.gallery}>
      <GalleryPanel data={taskData} checkedTasks={checkedTasks} toggleTask={toggleTask}/>
      </View>
    </View>
  );
}

export default HomeScreen;