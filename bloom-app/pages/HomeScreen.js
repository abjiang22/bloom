import { View, Text } from 'react-native';
import {styles} from './AppStyles';
import GalleryPanel from '../components/GalleryPanel';
import React, { useState } from 'react';
import Plant from '../components/Plant';
import CompletionPercentage from '../components/CompletionPercent';
import AllTasksImage from '../components/AllTasks';

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
  const [activeViewIndex, setActiveViewIndex] = useState(0); 
  const toggleTask = (taskName) => {
    setCheckedTasks(prevState => ({
      ...prevState,
      [taskName]: !prevState[taskName]
    }));
  };

  const taskKeys = ['All', ...Object.keys(taskData)];
  const activePerson = taskKeys[activeViewIndex];

  const calculateCompletionPercentage = (person) => {
    let tasks;
    if (person === 'All') {
        tasks = Object.values(taskData).flat();
    } else {
        tasks = taskData[person];
    }
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => checkedTasks[task]).length;
    return totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  };

  const completionPercentage = calculateCompletionPercentage(activePerson);

  const individualCompletionPercentages = Object.keys(taskData).reduce((acc, person) => {
    acc[person] = calculateCompletionPercentage(person);
    return acc;
  }, {});

  
  return (
    // Task lists
    <View style={styles.container}>
      <CompletionPercentage percentage={completionPercentage} name={activePerson} />
      <View style={styles.plantContainer}>
      {activeViewIndex === 0 ? <AllTasksImage percentages={individualCompletionPercentages}/> : <Plant completionPercentage={completionPercentage} />}
      </View>
      <View style={styles.galleryContainer}>
        <View style={styles.gallery}>
          <GalleryPanel data={taskData} 
          checkedTasks={checkedTasks} 
          toggleTask={toggleTask}
          onIndexChanged={(index) => setActiveViewIndex(index)}
          activeIndex={activeViewIndex}
          />
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;