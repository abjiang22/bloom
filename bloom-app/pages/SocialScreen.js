import {StatusBar} from 'expo-status-bar';
import {View, Image, StyleSheet} from 'react-native';

import React, { useState, useMemo } from 'react';
import SimpleButton from '../components/SimpleButton';
import Logo from '../components/Logo';
import RoommatesList from '../components/RoommatesList';
import {styles} from './AppStyles';
import AllTasksImage from '../components/AllTasks';
import { useAppContext } from '../AppContext';
import {Task} from '../classes/Task'


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
    return users.map(user => ({
      name: user.name,
      percentage: individualCompletionPercentages,
    }))
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
      <RoommatesList roommates={roommates} percentages={individualCompletionPercentages}/>
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