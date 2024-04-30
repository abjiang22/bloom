// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import DraggableFlatList from 'react-native-draggable-flatlist';

// const RotationSection = ({ people, rotation, toggleRotation, setPeopleOrder }) => {
//   return (
//     <View style={styles.rotationContainer}>
//       <Text style={styles.modalTitle}>Rotation</Text>
//       <DraggableFlatList
//         data={people}
//         keyExtractor={(item) => item}
//         onDragEnd={({ data }) => setPeopleOrder(data)}
//         renderItem={({ item, index, drag, isActive }) => (
//           <TouchableOpacity
//             style={[styles.rotationItem, isActive && styles.activeRotationItem]}
//             onLongPress={drag}
//             onPress={() => toggleRotation(item)}
//           >
//             <View style={rotation.includes(item) ? styles.radioFilled : styles.radioEmpty} />
//             <Text style={styles.rotationName}>{item}</Text>
//             {/* Render your draggable icon here */}
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   rotationContainer: {
//     borderRadius: 10, // Match this to the border radius in the image
//     backgroundColor: '#fff', // Match this to the background color in the image
//     padding: 10, // Add padding around the list
//     margin: 10, // Add margin around the container
//     // Add shadow or elevation styles if needed to match the image
//   },
//   rotationItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#2D6A6E',
//     // Add horizontal padding if necessary
//   },
//   activeRotationItem: {
//     // Add styles for when the item is being dragged, if necessary
//   },
//   rotationName: {
//     fontSize: 16,
//     // Adjust the font weight and color to match the image
//   },
//   radioFilled: {
//     // Your existing styles
// //   },
//   radioEmpty: {
//     // Your existing styles
//   },
//   // Add any other styles needed to match the image
// });

// export default RotationSection;
