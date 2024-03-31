import React, { useState, useEffect } from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import axios from 'axios';
import Constants from 'expo-constants';

const HomeScreen = ({ navigation })  => {
  const [groups, setGroups] = useState([]);

  const uniqueId =  Constants.sessionId || Constants.deviceId;
console.log(uniqueId);
  useEffect(() => {
    // Replace 'http://my-api.com/groups' with your API endpoint
    axios.get(`http://192.168.10.133:8080/groups/${uniqueId}`)
      .then(response => {
        console.log(response.data);
        setGroups(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
 
  return (
    <View>
      <FlatList
        data={groups}
        renderItem={({ item }) => <Text>{item.groupName}</Text>}
        keyExtractor={item => item.userId.toString()}
      />{/* Your existing code... */}
      <Button
        title="Create Group"
        onPress={() => navigation.navigate('CreateGroup')}
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