// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [groups, setGroups] = useState([]);

  // Dummy data for groups
  const dummyGroups = [
    { id: '1', name: 'Group 1' },
    { id: '2', name: 'Group 2' },
    { id: '3', name: 'Group 3' },
  ];

  const handleCreateGroup = () => {
    navigation.navigate('CreateGroup');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Create Group" onPress={handleCreateGroup} />
      <FlatList
        data={dummyGroups}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <Button
              title={item.name}
              onPress={() => navigation.navigate('Group', { groupId: item.id })}
            />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
