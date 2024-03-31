// Import necessary libraries
import React, { useState } from 'react';
import { Button, Text, View, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your pages
import GroupListPage from './src/Groups/List'; // Update with your file path
// ... import other pages

// CreateExpensePage equivalent in React Native
const CreateExpensePage = ({ navigation }) => {
  // ... existing code

  return (
    <View>
      {/* ... existing code */}
      <Button
        title="Go to Groups"
        onPress={() => navigation.navigate('Groups')}
      />
    </View>
  );
};

// Create a stack navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreateExpense">
        <Stack.Screen name="CreateExpense" component={CreateExpensePage} />
        <Stack.Screen name="Groups" component={GroupListPage} />
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;