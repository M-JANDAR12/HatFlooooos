// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

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
    <View style={styles.container}>
      <Text style={styles.title}>Groups</Text>
      <FlatList
        data={dummyGroups}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.groupItem}>
            <Button
              title={item.name}
              onPress={() => navigation.navigate('Group', { groupId: item.id })}
              style={styles.groupButton}
            />
          </View>
        )}
      />
      <TouchableOpacity
        onPress={handleCreateGroup}
        style={styles.addButton}>
        <Text style={styles.addButtonLabel}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen