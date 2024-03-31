// Import necessary libraries
import React, { useState } from 'react';
import { Button, Text, View, TextInput, FlatList } from 'react-native';

// CreateExpensePage equivalent in React Native
const CreateExpensePage = () => {
  const [amount, setAmount] = useState('');
  const [selectedFriends, setSelectedFriends] = useState({});

  const validate = () => {
    // Add your validation logic here
  };

  const saveExpense = () => {
    if (validate()) {
      // Save the expense
      console.log('Expense saved successfully!');
    }
  };

  return (
    <View>
      <TextInput
        value={amount}
        onChangeText={setAmount}
        placeholder="Amount"
        keyboardType="numeric"
      />
      <Button
        title="Select Friends"
        onPress={() => {
          // Navigate to SelectFriendsPage and update selectedFriends
        }}
      />
      <FlatList
        data={Object.entries(selectedFriends)}
        keyExtractor={(item) => item[0]}
        renderItem={({ item }) => (
          <View>
            <Text>{item[0]}: {item[1]}</Text>
          </View>
        )}
      />
      <Button title="Save" onPress={saveExpense} />
    </View>
  );
};

// SelectFriendsPage equivalent in React Native
const SelectFriendsPage = ({ navigation }) => {
  const [friends, setFriends] = useState(['Friend 1', 'Friend 2', 'Friend 3']);
  const [selectedFriends, setSelectedFriends] = useState({});

  return (
    <FlatList
      data={friends}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <View>
          <Text>{item}</Text>
          <TextInput
            onChangeText={(value) => setSelectedFriends({ ...selectedFriends, [item]: value })}
            placeholder="Amount"
            keyboardType="numeric"
          />
        </View>
      )}
    />
  );
};

export default CreateExpensePage;