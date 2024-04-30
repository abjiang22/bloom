import React, { useState, useMemo } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Icons
import homeLined from '../assets/home-lined.png';
import homeSolid from '../assets/home-solid.png';
import schedLined from '../assets/sched-lined.png';
import schedSolid from '../assets/sched-solid.png';
import socialLined from '../assets/social-lined.png';
import socialSolid from '../assets/social-solid.png';
import profileLined from '../assets/profile-lined.png';
import profileSolid from '../assets/profile-solid.png';

// Main user screens
import HomeScreen from './HomeScreen';
import ScheduleScreen from './ScheduleScreen';
import SocialScreen from './SocialScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

export default function MainPage() {
    return (
      // Navbar
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ focused }) => {
                let iconSource;
                switch (route.name) {
                case 'Home':
                    iconSource = focused ? homeSolid : homeLined;
                    break;
                case 'Schedule':
                    iconSource = focused ? schedSolid : schedLined;
                    break;
                case 'Social':
                    iconSource = focused ? socialSolid : socialLined;
                    break;
                case 'Profile':
                    iconSource = focused ? profileSolid : profileLined;
                    break;
                default:
                    iconSource = homeLined;
            }
            return <Image source={iconSource} style={{ width: 43, height: 45 }} />;
          },
          tabBarStyle: {
            borderTopWidth: 1,
            borderTopColor: '#2D6A6E',
            marginBottom: 10
          },
          tabBarIconStyle: {marginBottom: 10, marginTop: 30}
        })}
      >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen}/>
      <Tab.Screen name="Social" component={SocialScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};