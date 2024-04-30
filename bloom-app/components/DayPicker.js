import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const DayPicker = ({
  weekdays,
  setWeekdays,
  dayTextStyle,
  activeTextColor,
  inactiveTextColor,
  activeColor,
  inactiveColor,
  borderColor,
  wrapperStyles,
  itemStyles,
}) => {
  function daysIO(v) {
    if (weekdays.includes(v)) {
      const weekdayRemoved = weekdays.filter((element) => element !== v);
      setWeekdays(weekdayRemoved);
    } else {
      setWeekdays([...weekdays, v]);
    }
  }

  const acColor = activeColor || 'red';
  const icColor = inactiveColor || 'grey';
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <View style={[styles.boxContainer, wrapperStyles]}>
      {days.map((value, index) => {
        const isActive = weekdays.includes(index + 1);
        return (
        <TouchableOpacity key={value} onPress={() => daysIO(index + 1)}>
          <View
            style={[
              styles.box,
              itemStyles,
              { backgroundColor: isActive ? acColor : icColor ,
                borderColor: borderColor,
                borderWidth: 1,
              }
            ]}
          >
            <Text style={[styles.text, , dayTextStyle, { color: isActive ? activeTextColor : inactiveTextColor }]}>{value}</Text>
          </View>
        </TouchableOpacity>
        )
    })}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontFamily: 'RoundedMplus1c-ExtraBold'
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 15,
  },
});


export default DayPicker;
