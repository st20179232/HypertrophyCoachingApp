import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Program from './Program';
import Learn from './Learn';
import Account from './Account';

// Import your icons
import HomeIcon from '../assets/Home.png';
import ProgramIcon from '../assets/Program.png';
import LearnIcon from '../assets/Learn.png';
import AccountIcon from '../assets/Profile.png';

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let icon;

          if (route.name === 'Home') {
            icon = HomeIcon;
          } else if (route.name === 'Program') {
            icon = ProgramIcon;
          } else if (route.name === 'Learn') {
            icon = LearnIcon;
          } else if (route.name === 'Account') {
            icon = AccountIcon;
          }

          // You can return any component that you like here!
          return <Image source={icon} style={{ width: 50, height: 50 }} />;
        },
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