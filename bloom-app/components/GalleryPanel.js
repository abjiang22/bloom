import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { MaterialIcons } from '@expo/vector-icons';
import TaskList from './TaskList';
import DropDownPicker from 'react-native-dropdown-picker';



const GalleryPanel = ({ data, checkedTasks, toggleTask, onIndexChanged, activeIndex }) => {

    const allTasks = data ? Object.values(data).flat() : [];
    const combinedData = data ? [['All', allTasks], ...Object.entries(data)] : [];
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(combinedData.length > 0 ? combinedData[Math.min(activeIndex, combinedData.length - 1)][0] : null);
    const items = combinedData.map(([name], index) => ({
      label: name != 'My' && name != 'All' ? name + "'s Tasks": name + " Tasks",
      value: name,
      index: index
    }));

    useEffect(() => {
      setValue(combinedData[activeIndex][0]);
  }, [activeIndex, combinedData]);

    const updateDropdownValueFromIndex = (index) => {
      if (combinedData.length > index) {
        const newValue = combinedData[index][0];
        if (newValue !== value) {
          setValue(newValue);
        }
      }
    };

    const handleValueChange = (selectedValue) => {
      const selectedIndex = items.findIndex(item => item.value === selectedValue);
        if (selectedIndex !== undefined && selectedIndex !== activeIndex) {
            onIndexChanged(selectedIndex);  // Update the swiper index to the selected index
            setValue(combinedData[selectedIndex][0]);  // Ensure the dropdown reflects this change
        }
    };
    
    return (
        <Swiper style={styles.wrapper}
            showsButtons={true}
            index={activeIndex}
            loop={false}
            onIndexChanged={(index) => {
              updateDropdownValueFromIndex(index); // Update dropdown when index changes
              onIndexChanged(index);
            }}
            nextButton={<MaterialIcons name="navigate-next" size={40} color="#2D6A6E" />}
            prevButton={<MaterialIcons name="navigate-before" size={40} color="#2D6A6E" />}
            buttonWrapperStyle={styles.buttonWrapper}
            
        >
          {combinedData.map(([name, tasks], index) => {
            return (
              <View key={index} style={styles.slide}>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                onChangeValue={handleValueChange}
                setItems={() => {}}
                style={{ 
                  width: 250,
                  height: 40,
                  borderWidth: 0,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                labelStyle={styles.text}
                arrowIconStyle={{ 
                  width: 20, 
                  height: 20, 

                  left: -30
                }}
                dropDownStyle={{
                  backgroundColor: '#fafafa', // Background color of the dropdown list
                  borderColor: '#2D6A6E', // Border color of the dropdown list
                  color: '#2D6A6E',
                  borderWidth: 1, // Width of the border around the dropdown list
                }}
                customArrowDown={(size, color) => (
                <MaterialIcons name="keyboard-arrow-down" size={size} color="#2D6A6E" />
                )}
                customArrowUp={(size, color) => (
                <MaterialIcons name="keyboard-arrow-up" size={size} color="#2D6A6E" />
                )}
                zIndex={3000} // Ensure it is above all other components
                zIndexInverse={1000}
              />
              <TaskList tasks={tasks} checkedTasks={checkedTasks} toggleTask={toggleTask}/>
            </View>
            );
        })}
        </Swiper>
    );
};

const styles = StyleSheet.create({
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: '#2D6A6E',
    fontSize: 18,
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
});

export default GalleryPanel;