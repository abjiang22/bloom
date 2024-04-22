import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import homeLined from '../assets/home-lined.png';
import homeSolid from '../assets/home-solid.png';
import schedLined from '../assets/sched-lined.png';
import schedSolid from '../assets/sched-solid.png';
import socialLined from '../assets/social-lined.png';
import socialSolid from '../assets/social-solid.png';
import profileLined from '../assets/profile-lined.png';
import profileSolid from '../assets/profile-solid.png';

const Tab = createBottomTabNavigator();

const NavBar = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarShowLabel: false,
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
            return <Image source={iconSource} style={{ width: 20, height: 20 }} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Schedule" component={SchedulePage} />
        <Tab.Screen name="Social" component={SocialPage} />
        <Tab.Screen name="Profile" component={ProfilePage} />
      </Tab.Navigator>
    );
  };

export default NavBar;