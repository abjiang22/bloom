import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

function getNextClosestDay(daysOfWeek) {
  const today = new Date();
  const todayDayOfWeek = today.getDay();
  let daysUntilNext = 7;
  let targetDay = -1;

  daysOfWeek.forEach(day => {
    let daysUntil = (day - todayDayOfWeek + 7) % 7;
    if (daysUntil === 0) daysUntil = 7;
    if (daysUntil < daysUntilNext) {
      daysUntilNext = daysUntil;
      targetDay = day;
    }
  });

  const resultDate = new Date(today);
  resultDate.setDate(today.getDate() + daysUntilNext);
  return resultDate;
}

const dayMapping = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const ScheduleTaskItem = ({ task, toggleTask, deleteTask }) => {
  const formatDays = (days) => {
      const sortedDays = days.sort((a, b) => a - b);
      return days.map(day => dayMapping[(day - 1) % 7]).join(', ');
  };

  // Return a single line of assignees with the current assignee in bold
  const getAssigneesText = (assignees, target) => {
      if (!assignees || assignees.length === 0) return "No Assignees";

      // Loop over assignees and append them to a single string, bolding the first
      return assignees.map((assignee, index) => {
          const name = assignee.name || assignee;
          if (assignee == target) {
              return (
                  <Text key={index} style={styles.boldText}>
                      {(index = 1 ? '' : ' , ')}{name}*
                  </Text>
              );
          } else {
              return (index != 0 ? ', ' : '') + name; // Add a comma if not the last item
          }
      });
  };

  const [showDelete, setShowDelete] = useState(false); 


  return (
    <TouchableOpacity style={[styles.taskItem, task.checked ? styles.checkedTaskItem : {}]} onPress={() => setShowDelete(!showDelete)}>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={[styles.taskText, task.checked ? styles.checkedTaskText : {}]}>{task.taskName}</Text>
          <Text style={styles.assigneeText}>Assigned to: {getAssigneesText(task.rotators, task.assignees[0])}</Text>
          <Text style={styles.dayText}>Every {formatDays(task.schedule)}</Text>
        </View>
        {showDelete && (
          <TouchableOpacity onPress={() => deleteTask(task)} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>X</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'column',
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#2D6A6E',
    borderRadius: 12,
    padding: 25,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  taskText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D6A6E',
  },
  assigneeText: {
    fontSize: 14,
    color: '#2D6A6E',
    marginTop: 12
  },
  dayText: {
    fontSize: 14,
    color: '#2D6A6E',
    fontStyle: 'italic',
    marginTop: 4
  },
  deleteButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 16,
  },
  boldText: {
    fontWeight: 'bold'
  }
});

export default ScheduleTaskItem;