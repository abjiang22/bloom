import { View, Text } from 'react-native';
import {styles} from './AppStyles';
import GalleryPanel from '../components/GalleryPanel';
import React, { useState, useMemo } from 'react';
import Plant from '../components/Plant';
import CompletionPercentage from '../components/CompletionPercent';
import AllTasksImage from '../components/AllTasks';
import { Picker } from '@react-native-picker/picker';
import {Task} from "../classes/Task";
import {User} from "../classes/User";

function HomeScreen() {
  // Keep track of task states
  const [activeViewIndex, setActiveViewIndex] = useState(0);
  
  const [users, setUsers] = useState ([
    new User("My"),
    new User("Cassie"),
    new User("Stephanie"),
    new User("Wendy")
  ]);
  
  const [tasks, setTasks] = useState([
    new Task("Task 3", [users[0]]),
    new Task("Task 4", [users[0]]),
    new Task("Task 5", [users[1]]),
    new Task("Task 6", [users[1]]),
    new Task("Task 7", [users[2]]),
    new Task("Task 8", [users[2]]),
    new Task("Task 9", [users[3]]),
    new Task("Task 10", [users[3]]),
    new Task("Task 11", [users[3]]),
    new Task("Task 12", [users[3]]),
  ]);

  const toggleTask = (taskToToggle) => {
    setTasks(prevTasks => prevTasks.map(task => {
        if (task === taskToToggle) {
            const updatedTask = new Task(task.taskName, task.assignees, task.dueDate, !task.checked);
            return updatedTask;
        }
        return task;
    }));
  };
  
  const names = useMemo(() => {
    const allNames = new Set(tasks.flatMap(task => task.assignees.map(assignee => assignee.name)));
    return ['All', ...allNames];
  }, [tasks]);

  const activePerson = names[activeViewIndex];

  const onPickerChange = (itemValue, itemIndex) => {
    setActiveViewIndex(itemIndex);
  };

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
  
  return (
    <View style={styles.container}>
      <View style={styles.plantContainer}>
      {activeViewIndex === 0 ? <AllTasksImage percentages={individualCompletionPercentages}/> : <Plant completionPercentage={completionPercentage} />}
      </View>
      <CompletionPercentage percentage={completionPercentage} name={activePerson} />
      <AddButton/> 
      <View style={styles.galleryContainer}>
        <View style={styles.gallery}>
          <GalleryPanel 
            names={names}
            tasks={tasks} 
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