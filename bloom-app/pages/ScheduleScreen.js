import React, {useState, useEffect} from 'react';
import {StatusBar} from 'expo-status-bar';
import {View, Image, Text, StyleSheet} from 'react-native';

import {styles} from './AppStyles';
import SimpleButton from '../components/SimpleButton';
import Logo from '../components/Logo';
import AddButton from '../components/AddButton';
import AddScheduleTaskPopUp from '../components/AddScheduleTaskPopUp';
import ScheduleTaskList from '../components/ScheduleTaskList';
import { useAppContext } from '../AppContext';

import Plant from '../assets/schedule-plant.png'

function ScheduleScreen({navigation}) {
  const { users, setUsers, tasks, setTasks } = useAppContext();
  const [modalVisible, setModalVisible] = useState(false);
  const [rotationalTasks, setRotationalTasks] = useState([]);

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
  
  useEffect(() => {
    const filteredTasks = tasks.filter(task => task.rotational);
    setRotationalTasks(filteredTasks);
  }, [tasks]);

  const handleSaveTask = (newTask) => {
    setTasks((currentTasks) => [...currentTasks, newTask]);
    setModalVisible(false);
  };

  const HorizontalLine = ({ style }) => (
    <View style={[ss.line, style]} />
  );

  const filteredTasks = tasks.filter(task => (task.rotational == true));

  return (
    <View style={ss.container}> 
      <View style={ss.titleContainer}>
        <Image source={Plant} style={ss.img}></Image>
        <Text style={ss.title}>Schedule</Text>
      </View>
      <HorizontalLine/>
      <ScheduleTaskList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      <AddButton onPress={() => setModalVisible(true)} /> 
      <AddScheduleTaskPopUp 
        isVisible={modalVisible} 
        onSave={handleSaveTask}
        onCancel={() => setModalVisible(false)}
      />
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
    maxWidth: 107,
    maxHeight: 80
  },
  line: {
    height: 1.2,
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