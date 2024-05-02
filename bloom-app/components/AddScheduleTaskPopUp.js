import React, { useState } from 'react';
import {Alert, Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DayPicker from './DayPicker';
import { ScrollView, TextInput, GestureHandlerRootView } from 'react-native-gesture-handler';
import { useAppContext } from '../AppContext';
import { Task } from '../classes/Task';

function AddScheduleTaskPopUp({ isVisible, onSave, onCancel }) {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [weekdays, setWeekdays] = useState([]);
  const [rotation, setRotation] = useState([]);
  const { users, setUsers, tasks, setTasks } = useAppContext();

  const handleSave = () => {
    if (rotation.length === 0) {
      Alert.alert(
        "Select Users",
        "Assign the task to at least one user.",
        [{ text: "OK" }]
      );
      return;
    }

    if (weekdays.length === 0) {
      Alert.alert(
        "Select Days",
        "Select at least one day for the weekly schedule.",
        [{ text: "OK" }]
      );
      return;
    }

    const newTask = new Task(taskName, assignees=rotation, dueDate=null, checked=false, rotational=true, schedule=weekdays, rotators=rotation);
    onSave(newTask);
    setTaskName('');
    setWeekdays([]);
    setDescription('');
    setRotation([]);  
  };

  const toggleRotation = (userToToggle) => {
    setRotation(currentRotation => {
      const isUserInRotation = currentRotation.some(u => u.name === userToToggle.name);
      if (isUserInRotation) {
        return currentRotation.filter(u => u.name !== userToToggle.name);
      } else {
        return [...currentRotation, userToToggle];
      }
    });
  };

  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={onCancel}
      >
        <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <ScrollView>
              <Text style={style.modalTitle}>New Task</Text>
              <TextInput
                style={style.input}
                onChangeText={setTaskName}
                value={taskName}
                placeholder="Task Name"
              />
            <Text style={style.modalTitle}>Weekly Schedule</Text>
              <DayPicker
                  weekdays={weekdays}
                  setWeekdays={setWeekdays}
                  activeColor='#2D6A6E'
                  inactiveTextColor='#2D6A6E'
                  activeTextColor='white'
                  inactiveColor='white'
                  borderColor='#2D6A6E'
                  dayTextStyle = {{}}
                  itemStyles ={{}}
                />
              
              <Text style={style.modalTitle}>Assign to</Text>
              {users.map((user) => (
                  <TouchableOpacity
                      key={user.name}
                      style={style.rotationItem}
                      onPress={() => toggleRotation(user)}
                  >     
                  <Text>{user.name}</Text>
                  <View style={rotation.some(u => u.name === user.name) ? style.radioFilled : style.radioEmpty} />
                  </TouchableOpacity>
              ))}

              <View style={style.buttonContainer}>
                <TouchableOpacity onPress={handleSave} style={style.saveButton}>
                  <Text style={style.buttonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onCancel} style={style.cancelButton}>
                  <Text style={style.buttonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </GestureHandlerRootView>
      
      </Modal>

  );
}


const style = StyleSheet.create({
  centeredView: {
    marginTop: '30%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
  },

  modalView: {
    backgroundColor: 'white',
    marginTop: -205,
    padding: 20,
    alignItems: 'stretch',
    width: '100%',
    borderTopWidth: 2,
    borderColor: '#2D6A6E',
    borderRadius: 5
  },
  modalTitle: {
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#2D6A6E',
  },
  input: {
    borderWidth: 1.2,
    borderRadius: 8,
    borderColor: '#2D6A6E',
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  rotationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#2D6A6E',
  },
  rotationName: {
    fontSize: 16,
  },
  radioFilled: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#2D6A6E', // Color for selected item
  },
  radioEmpty: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2D6A6E', // Border color
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#2D6A6E', // Save button background color
    borderRadius: 20,
    padding: 10,
  },
  cancelButton: {
    backgroundColor: '#aaa', // Cancel button background color
    borderRadius: 20,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

})
export default AddScheduleTaskPopUp;