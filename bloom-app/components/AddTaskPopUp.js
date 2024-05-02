import React, { useState } from 'react';
import { Alert, Modal, View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import DayPicker from './DayPicker';
import { ScrollView, TextInput, GestureHandlerRootView } from 'react-native-gesture-handler';
import { useAppContext } from '../AppContext';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Task } from '../classes/Task';

function AddTaskPopUp({ isVisible, onSave, onCancel }) {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [weekdays, setWeekdays] = useState([-1]);
  const [rotation, setRotation] = useState([]);
  const [dueDate, setDueDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { users, setUsers, tasks, setTasks } = useAppContext();

  const handleSave = () => {
    if (rotation.length === 0) {
      Alert.alert(
        "Select Users",
        "Please assign the task to at least one user.",
        [{ text: "OK" }]
      );
      return; 
    }
    const newTask = new Task(taskName, assignees=rotation, dueDate);
    onSave(newTask);
    setTaskName('');
    setDescription('');
    setWeekdays([-1]);
    setRotation([]);
    setDueDate(new Date());
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dueDate;
    setShowDatePicker(Platform.OS === 'android');
    setDueDate(currentDate);
  };

  const toggleRotation = (userToToggle) => {
    setRotation((currentRotation) => {
      const index = currentRotation.findIndex(user => user.name === userToToggle.name);
      if (index !== -1) {
          return currentRotation.filter((userToToggle, idx) => idx !== index);
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
            <Text style={style.modalTitle}>Due Date</Text>
            <TouchableOpacity style={style.input} onPress={() => setShowDatePicker(true)}>
              <Text>{dueDate.toDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={dueDate}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}

            <Text style={style.modalTitle}>Assign to</Text>
            {users.map((user) => (
                <TouchableOpacity
                    key={user.name}
                    style={style.rotationItem}
                    onPress={() => toggleRotation(user)}
                >
                <Text>{user.name}</Text>
                <View style={rotation.includes(user) ? style.radioFilled : style.radioEmpty} />
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
    marginTop: '50%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
  },
  modalView: {
    backgroundColor: 'white',
    marginTop: -100,
    padding: 20,
    alignItems: 'stretch',
    width: '100%',
    borderTopWidth: 2,
    borderColor: '#2D6A6E',
    borderRadius: 5
  },
  modalTitle: {
    marginBottom: 10,
    marginTop: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#2D6A6E', // Title color
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
    borderBottomColor: '#2D6A6E', // Border color for list items
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
    borderRadius: 12,
    padding: 10,
  },
  cancelButton: {
    backgroundColor: '#aaa', // Cancel button background color
    borderRadius: 12,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  }
})
export default AddTaskPopUp;