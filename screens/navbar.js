// Importing the necessary components
import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Program from './Program';
import Learn from './Learn';
import Account from './Account';

// Import icons for the bottom tab navigator
import HomeIcon from '../assets/Home.png';
import ProgramIcon from '../assets/Program.png';
import LearnIcon from '../assets/Learn.png';
import AccountIcon from '../assets/Profile.png';
import homeSelected from '../assets/HomeS.png';
import programSelected from '../assets/ProgramS.png';
import learnSelected from '../assets/LearnS.png';
import accountSelected from '../assets/ProfileS.png';

// Create the bottom tab navigator 
const Tab = createBottomTabNavigator();

// Returns the bottom tab navigator with the Home, Program, Learn, and Account screens
export default function NavBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let icon;

          if (route.name === 'Home') {
            icon = focused ? homeSelected : HomeIcon;
          } else if (route.name === 'Program') {
            icon = focused ? programSelected : ProgramIcon;
          } else if (route.name === 'Learn') {
            icon = focused ? learnSelected : LearnIcon;
          } else if (route.name === 'Account') {
            icon = focused ? accountSelected : AccountIcon;
          }

          // Returns the specific icon for the tab
          return <Image source={icon} style={{ width: 50, height: 50 }} />;
        },// Tab bar styling
        tabBarShowLabel: false,
        tabBarStyle: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: 50,
          backgroundColor: '#7D85AD',
          padding: 3,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },
      })} 
    > 
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Program" component={Program} />
      <Tab.Screen name="Learn" component={Learn} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}