import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Program from './Program';
import Learn from './Learn';
import Account from './Account';

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: 50,
          backgroundColor: '#7D85AD',
          padding: 10,
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Program" component={Program} />
      <Tab.Screen name="Learn" component={Learn} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}