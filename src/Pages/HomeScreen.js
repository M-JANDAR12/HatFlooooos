import React, { useState, useEffect } from 'react';
import { Button, View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Constants from 'expo-constants';
import { styles } from '../styles/styles';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';


const HomeScreen = ({ navigation })  => {
  const [groups, setGroups] = useState([]);

  const uniqueId =  Constants.sessionId || Constants.deviceId;
  console.log(uniqueId);
  const handleCreateGroup = () => {
    navigation.navigate('CreateGroup');
  };


  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get(`http://192.168.10.133:8080/groups/${uniqueId}`);
        setGroups(response.data);
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    };

    const unsubscribeFocus = navigation.addListener('focus', fetchGroups);

    // Cleanup function
    return unsubscribeFocus;
  }, [navigation, uniqueId]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Groups</Text>
      <FlatList
      data={groups}
      keyExtractor={() => uuidv4()} // Generate a unique key for each item
      renderItem={({ item }) => (
        <View style={styles.groupItem}>
          <Button
            title={item.groupName}
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
export default HomeScreen;