import React, { useState, useMemo } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { useAppContext } from '../AppContext';
import GalleryPanel from '../components/GalleryPanel';
import Plant from '../components/Plant';
import CompletionPercentage from '../components/CompletionPercent';
import GroupFlower from '../components/GroupFlower'
import AllTasksImage from '../components/AllTasks';
import AddButton from '../components/AddButton';
import {Task} from '../classes/Task'

import AddTaskPopUp from '../components/AddTaskPopUp';

import {styles} from './AppStyles';

function HomeScreen() {
  const { users, setUsers, tasks, setTasks } = useAppContext();
  const [activeViewIndex, setActiveViewIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);


  const toggleTask = (taskToToggle) => {
    setTasks(prevTasks => prevTasks.map(task => {
        if (task === taskToToggle) {
            const updatedTask = new Task(task.taskName, task.assignees, task.dueDate, !task.checked, task.rotational, task.schedule, task.rotators);
            return updatedTask;
        }
        return task;
    }));
  };

  const deleteTask = (taskToDelete) => {
    setTasks(currentTasks => currentTasks.filter(task => task !== taskToDelete));
  };
  
  const names = useMemo(() => {
    const allNames = users.map(user => user.name);
    return ['All', ...allNames];
  }, [users]);

  const activePerson = names[activeViewIndex];

  const calculateCompletionPercentage = (person) => {
    let filteredTasks = tasks.filter(task => 
        person === 'All' ? true : task.assignees.some(user => user.name === person));
    const totalTasks = filteredTasks.length;
    const completedTasks = filteredTasks.filter(task => task.checked === true).length;
    return totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  };

  const completionPercentage = calculateCompletionPercentage(activePerson);

  const individualCompletionPercentages = useMemo(() => {
    const uniqueAssignees = new Set();
    tasks.forEach(task => {
        task.assignees.forEach(assignee => uniqueAssignees.add(assignee.name));
    });

    const completionPercentages = {};
    uniqueAssignees.forEach(assignee => {
        completionPercentages[assignee] = calculateCompletionPercentage(assignee, tasks);
    });

    completionPercentages['All'] = calculateCompletionPercentage('All', tasks);

    return completionPercentages;
  }, [tasks]);

  const handleSaveTask = (newTask) => {
    setTasks(currentTasks => [...currentTasks, newTask]);
    setModalVisible(false);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.plantContainer}>
      {activeViewIndex === 0 ? <GroupFlower percentages={completionPercentage}/> : <Plant completionPercentage={completionPercentage} />}
      </View>
      <CompletionPercentage percentage={completionPercentage} name={activePerson} />
      <View style={styles.galleryContainer}>
        <View style={styles.gallery}>
          <GalleryPanel 
            names={names}
            tasks={tasks} 
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            onIndexChanged={(index) => setActiveViewIndex(index)}
            activeIndex={activeViewIndex}
          />
          <AddTaskPopUp
            isVisible={modalVisible} 
            onSave={handleSaveTask}
            onCancel={() => setModalVisible(false)}
          />
          <AddButton onPress={() => setModalVisible(true)}/> 
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;