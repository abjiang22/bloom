import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Profile from '../assets/profilepic.png';

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Profile</Text>
      
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={Profile}
        />
        <Text style={styles.username}>Jessica</Text>
      </View>

      <View style={styles.menuItem}>
        <MaterialIcons name="edit" size={24} color="#2D6A6E" />
        <Text style={styles.menuText}>Edit Account</Text>
        <MaterialIcons name="navigate-next" size={24} color="#ccc" />
      </View>

      <View style={styles.menuItem}>
        <MaterialIcons name="settings" size={24} color="#2D6A6E" />
        <Text style={styles.menuText}>Group Settings</Text>
        <MaterialIcons name="navigate-next" size={24} color="#ccc" />
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    color: '#2D6A6E',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  username: {
    fontSize: 18,
    color: '#2D6A6E',
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuText: {
    fontSize: 16,
    color: '#2D6A6E',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#2D6A6E',
    fontSize: 16,
  },
});

export default ProfileScreen;
