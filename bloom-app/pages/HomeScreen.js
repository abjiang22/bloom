import {View} from 'react-native';
import {styles} from './AppStyles';
import GalleryPanel from '../components/GalleryPanel'
import React, { useState } from 'react';

// Dummy Data
const taskData = {
  'My': ['Task 3', 'Task 4'],
  'Cassie': ['Task 5', 'Task 6'],
  'Stephanie': ['Task 7', 'Task 8'],
  'Wendy': ['Task 9', 'Task 10'],
};

function HomeScreen() {
  // Keep track of task states
  const [checkedTasks, setCheckedTasks] = useState({});
  const toggleTask = (taskName) => {
    setCheckedTasks(prevState => ({
      ...prevState,
      [taskName]: !prevState[taskName]
    }));
  };

  return (
    // Task lists
    <View style={styles.galleryContainer}>
      <View style={styles.gallery}>
      <GalleryPanel data={taskData} checkedTasks={checkedTasks} toggleTask={toggleTask}/>
      </View>
    </View>
  );
}

export default HomeScreen;