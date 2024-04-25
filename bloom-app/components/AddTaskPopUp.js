import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DayPicker } from 'react-native-picker-weekday'
import AddButton from '../components/AddButton';
import {styles} from '../pages/AppStyles';
import { ScrollView, TextInput, GestureHandlerRootView } from 'react-native-gesture-handler';

function AddTaskPopUp({ isVisible, onSave, onCancel }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [weekdays, setWeekdays] = useState([-1]);
  const [rotation, setRotation] = useState([]);

  const handleSave = () => {

    onSave(taskName, description, weekdays,  rotation);
  };

  const people = ['Jessica', 'Cassie', 'Stephanie', 'Wendy'];

  const toggleRotation = (name) => {
    setRotation((currentRotation) => {
      if (currentRotation.includes(name)) {
        return currentRotation.filter((person) => person !== name);
      } else {
        return [...currentRotation, name];
      }
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={onCancel}
      >
      </Modal>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView>
              <Text style={styles.modalTitle}>Task Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={setTaskName}
                value={taskName}
                placeholder="Task Name"
              />
              <Text style={styles.modalTitle}></Text>
              <TextInput
                style={styles.input}
                onChangeText={setTaskName}
                value={taskName}
                placeholder="Task Name"
              />
              {/* Other input fields for frequency, days, etc. */}
              <DayPicker
                  weekdays={weekdays}
                  setWeekdays={setWeekdays}
                  activeColor='violet'
                  textColor='white'
                  inactiveColor='grey'
                  dayTextStyle = {{/*All styles applicable to text component*/}}  //(optional for high styling flexiblity)
                  itemStyles ={{/*All Styles applicable to View component*/}}     //(optional for high styling flexiblity)
                  wrapperStyles ={{/*All Styles applicable to View component*/}}  // (optional for high styling flexiblity)  
              />
              

              <Text style={styles.modalTitle}>Rotation</Text>
              {people.map((name) => (
                  <TouchableOpacity
                      key={name}
                      style={styles.rotationItem}
                      onPress={() => toggleRotation(name)}
                  >     
                  <Text>{name}</Text>
                  <View style={rotation.includes(name) ? styles.radioFilled : styles.radioEmpty} />
                  </TouchableOpacity>
              ))}

              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </GestureHandlerRootView>
    </View>
  );
}

export default AddTaskPopUp;