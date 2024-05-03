import {StatusBar} from 'expo-status-bar';
import {View, Image, StyleSheet} from 'react-native';
import React, { useState, useMemo } from 'react';
import RoommatesList from '../components/RoommatesList';
import {styles} from './AppStyles';
import AllTasksImage from '../components/AllTasks';
import { useAppContext } from '../AppContext';



function SocialScreen({navigation}) {

  const { users, tasks } = useAppContext();


  const calculateCompletionPercentage = (person) => {
    let filteredTasks = tasks.filter(task => 
        person === 'All' ? true : task.assignees.some(user => user.name === person));
    const totalTasks = filteredTasks.length;
    const completedTasks = filteredTasks.filter(task => task.checked === true).length;
    return totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  };

  const roommates = useMemo(() => {
    // Map over users and calculate percentages inline
    const mappedRoommates = users.map(user => ({
      name: user.name,
      percentage: calculateCompletionPercentage(user.name),  // Calculate directly here
    }));

    // Sort roommates by the calculated percentage in descending order
    return mappedRoommates.sort((a, b) => b.percentage - a.percentage);
  }, [users, tasks]);

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
      <View style={ss.garden}>
      <AllTasksImage percentages={individualCompletionPercentages} />
      </View>
      <RoommatesList roommates={roommates}/>
    </View>
  );
};

const ss = StyleSheet.create({
  garden: {
    position: 'absolute',
    top: 50, // Adjust this to position the garden container higher up
    left: 0,
    right: 0,

  }
});

export default SocialScreen;