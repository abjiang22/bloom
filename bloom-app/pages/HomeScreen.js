import { View, Text } from 'react-native';
import {styles} from './AppStyles';
import GalleryPanel from '../components/GalleryPanel';
import React, { useState } from 'react';
import Plant from '../components/Plant';

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

  const calculateCompletionPercentage = () => {
    const totalTasks = Object.values(taskData).flat().length;
    const completedTasks = Object.values(checkedTasks).filter(Boolean).length;
    return (completedTasks / totalTasks) * 100; 
  };

  const completionPercentage = calculateCompletionPercentage();

  return (
    // Task lists
    <View style={styles.container}>
        <Text style={styles.completionText}>
        {`${completionPercentage.toFixed(0)}%`}
        </Text>
      <View style={styles.plantContainer}>
        <Plant completionPercentage={completionPercentage} />
      </View>
      <View style={styles.galleryContainer}>
        <View style={styles.gallery}>
          <GalleryPanel data={taskData} checkedTasks={checkedTasks} toggleTask={toggleTask}/>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;