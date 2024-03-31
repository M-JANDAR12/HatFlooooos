import React, { useState } from 'react';
import { Button, Text, View, TextInput, FlatList } from 'react-native';
import axios from 'axios';
import Constants from 'expo-constants';
import { styles } from '../styles/styles'; // Importing styles from styles.js

const CreateGroupScreen = ({ navigation }) => {
  const [groupName, setGroupName] = useState('');
  const [friendName, setFriendName] = useState('');
  const [OwnerName, setOwnerName] = useState('');
  const [participants, setFriends] = useState([]);

  const addFriend = () => {
    setFriends([...participants, friendName]);
    setFriendName('');
  };

  const saveGroup = async () => {
    const uniqueId =  Constants.sessionId || Constants.deviceId;
    const groupData = {
      groupName: groupName,
      participants: participants,
      mainName: OwnerName,
      userId: uniqueId,
    };

    console.log(groupData);
    
    axios.post('http://192.168.10.133:8080/groups', groupData)
      .then((response) => {
        console.log(response);
        navigation.goBack();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const cancel = () => {
    setGroupName('');
    setFriends([]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={groupName}
        onChangeText={setGroupName}
        placeholder="Group Name"
      />
      <TextInput
        style={styles.input}
        value={OwnerName}
        onChangeText={setOwnerName}
        placeholder="Owner Name"
      />
      <TextInput
        style={styles.input}
        value={friendName}
        onChangeText={setFriendName}
        placeholder='Friend Name'
      />
      <Button title="Add Friend" onPress={addFriend} style={styles.addButton} />
      <FlatList
        data={participants}
        renderItem={({ item }) => (
          <View style={styles.participantContainer}>
            <Text style={styles.participantText}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={saveGroup} />
        <Button title="Cancel" onPress={cancel} />
      </View>
    </View>
  );
};
export default CreateGroupScreen;
