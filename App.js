import React from 'react';
import Complete from './screens/Complete';
import All from './screens/All';
import Active from './screens/Active';
import SingleToDo from './screens/SingleToDo.js';

import { AppStyles as styles } from './styles/styles';
import { Feather } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator()


function AllStack() {
  return (
    <Stack.Navigator
      initialRouteName="All"
    >
      <Stack.Screen 
        name="All" 
        component={All} 
        options={{title:"All Todos", headerTitleAlign: "center"}}
      />
      <Stack.Screen 
        name="SingleToDo" 
        component={SingleToDo} 
        options={{title:"Single Todo", headerTitleAlign: "center"}}
      />
    </Stack.Navigator>
  )
}

export default function HomeScreen () {
  return (
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Complete"
            barStyle={styles.navigator} 
            activeColor='#3282b8' 
            inactiveColor='#989898'
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color }) => {
                const icons = {
                  Complete: 'chevrons-right',
                  AllStack: 'plus-circle',
                  Active: 'sliders',
                }

                return <Feather name={icons[route.name]} size={23} color={color}/>
            }})}
          >
            <Tab.Screen 
              name="Complete" 
              component={Complete} 
            />
            <Tab.Screen 
              name="AllStack" 
              component={AllStack} 
            />
            <Tab.Screen 
              name="Active" 
              component={Active} 
            />
          </Tab.Navigator>
        </NavigationContainer>
  );
};