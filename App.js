// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Pages/HomeScreen';
import GroupScreen from './src/Pages/GroupScreen';
import ExpenseScreen from './src/Pages/ExpenseScreen';
import CreateGroupScreen from './src/Pages/CreateGroupScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Group" component={GroupScreen} />
        <Stack.Screen name="Expense" component={ExpenseScreen} />
        <Stack.Screen name="CreateGroup" component={CreateGroupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
