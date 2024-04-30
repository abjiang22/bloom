import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DayPicker from './DayPicker';
import { ScrollView, TextInput, GestureHandlerRootView } from 'react-native-gesture-handler';
// import DraggableFlatList from 'react-native-draggable-flatlist';

function AddTaskPopUp({ isVisible, onSave, onCancel }) {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [weekdays, setWeekdays] = useState([-1]);
  const [rotation, setRotation] = useState([]);

  const handleSave = () => {
    onSave( {taskName, description, weekdays,  rotation} );
  };

  const people = ['Jessica', 'Cassie', 'Stephanie', 'Wendy'];

  // const HorizontalLine = ({ ss }) => (
  //   <View style={[style.line, ss]} />
  // );


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
              {/* <HorizontalLine></HorizontalLine> */}
              <Text style={style.modalTitle}>New Task</Text>
              <TextInput
                style={style.input}
                onChangeText={setTaskName}
                value={taskName}
                placeholder="Task Name"
              />
              <TextInput
                style={style.input}
                onChangeText={setDescription}
                value={description}
                placeholder="Description"
              />
              {/* Other input fields for frequency, days, etc. */}
              <Text style={style.modalTitle}>Repeat every...</Text>
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
                  wrapperStyles ={{}} 
              />
              
              <Text style={style.modalTitle}>Rotation</Text>
              {people.map((name) => (
                  <TouchableOpacity
                      key={name}
                      style={style.rotationItem}
                      onPress={() => toggleRotation(name)}
                  >     
                  <Text>{name}</Text>
                  <View style={rotation.includes(name) ? style.radioFilled : style.radioEmpty} />
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
  // line: {
  //   height: 3,
  //   backgroundColor: '#2D6A6E',
  //   width: '15%',
  //   alignSelf: 'center',
  // },
  modalView: {
    backgroundColor: 'white',
    marginTop: -180,
    padding: 20,
    alignItems: 'stretch', // Ensures children width stretch to fill the modal
    width: '100%', // Modal width
    maxHeight: '100%', // Modal maximum height
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
    borderColor: '#2D6A6E', // Border color
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
    borderRadius: 10,
    padding: 10,
  },
  cancelButton: {
    backgroundColor: '#aaa', // Cancel button background color
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },



})
export default AddTaskPopUp;