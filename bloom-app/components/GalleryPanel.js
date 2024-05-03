import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { MaterialIcons } from '@expo/vector-icons';
import TaskList from './TaskList';
import DropDownPicker from 'react-native-dropdown-picker';

const GalleryPanel = ({ names, tasks, toggleTask, deleteTask, onIndexChanged, activeIndex }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(names[activeIndex]);

  const items = names.map((name, index) => ({
      label: name !== 'All' ? (name !== "Me" ? name + "'s Tasks" : "My Tasks") : "All Tasks",
      value: name,
      index
  }));

  useEffect(() => {
      setValue(names[activeIndex]);
  }, [activeIndex, names]);

  const handleValueChange = (item) => {
    console.log("Selected item:", item);
    const selectedIndex = names.indexOf(item.value);
    if (selectedIndex !== activeIndex) {
        setValue(item.value); 
        onIndexChanged(selectedIndex);
    }
  };

  const filteredTasks = value === 'All' ? tasks : tasks.filter(task => task.assignees.some(user => user.name === value));
    
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={true}
      index={activeIndex}
      loop={false}
      onIndexChanged={(index) => {
          setValue(names[index]);
          onIndexChanged(index);
      }}
      nextButton={<MaterialIcons name="navigate-next" size={40} color="#2D6A6E" />}
      prevButton={<MaterialIcons name="navigate-before" size={40} color="#2D6A6E" />}
      buttonWrapperStyle={styles.buttonWrapper}
    >
      {names.map((name, index) => {
          const filteredTasks = name === 'All' ? tasks : tasks.filter(task => task.assignees.some(user => user.name === name));
          return (
              <View key={index} style={styles.slide}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        onSelectItem={(item) => {
                          const selectedIndex = names.indexOf(item.value);
                          setValue(item.value);
                          onIndexChanged(selectedIndex);
                        }}
                        style={styles.dropDownPicker}
                        labelStyle={styles.text}
                        arrowIconStyle={styles.arrowIconStyle}
                        dropDownStyle={styles.dropDownStyle}
                        dropDownContainerStyle={styles.dropDownContainer} // Style for the container
                        itemStyle={styles.dropDownItem} // Style for each item
                        zIndex={3000}
                        zIndexInverse={1000}
                    />
                  <TaskList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
              </View>
          );
      })}
    </Swiper>
    );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: '#2D6A6E',
    fontSize: 20,
    fontFamily: 'RoundedMplus1c-ExtraBold',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center', 
    textAlign: 'center',
  },

  buttonWrapper: {
    alignItems: 'flex-start',
    paddingTop: 10,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: '#2D6A6E',
  },
  dropDownPicker: {
    borderWidth: 0,
    width: '55%', 
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },

  dropDownStyle: {
    color: '#2D6A6E',
    fontFamily: 'RoundedMplus1c-Regular'

  },
  dropDownContainerStyle: {
    borderColor: '#2D6A6E',
    fontFamily: 'RoundedMplus1c-Regular',
    color: '#2D6A6E',
  },

  itemStyle: {
    color: '#2D6A6E',
    fontFamily: 'RoundedMplus1c-Regular'

  },

  arrowIconStyle: {
    width: 25,
    height: 25,
    position: 'relative',
  }
});

export default GalleryPanel;