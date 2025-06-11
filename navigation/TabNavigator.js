import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import InventoryScreen from '../screens/InventoryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName = 'home';
            if (route.name === 'Hjem') iconName = 'home';
            else if (route.name === 'Prosjekter') iconName = 'color-palette';
            else if (route.name === 'Lager') iconName = 'albums';
            else if (route.name === 'Profil') iconName = 'person';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#E29578',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Hjem" component={HomeScreen} />
        <Tab.Screen name="Prosjekter" component={ProjectsScreen} />
        <Tab.Screen name="Lager" component={InventoryScreen} />
        <Tab.Screen name="Profil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
