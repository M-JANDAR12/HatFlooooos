import React, { useState } from 'react';
import { Button, Text, View, TextInput, FlatList } from 'react-native';
import axios from 'axios';
import Constants from 'expo-constants';
import * as Application from 'expo-application';
// import getIvmsiAsync from 'expo-identifier-for-vendor';
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

    
      // Replace 'http://my-api.com/groups' with your API endpoint
      console.log(groupData)
      axios.post('http://192.168.10.146:8080/groups', groupData).then((response) => {
        console.log(response);
        navigation.goBack();
      }).catch((error) => {
        console.error('Error:', error);
      });
  };

  const cancel = () => {
    setGroupName('');
    setFriends([]);
    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        value={groupName}
        onChangeText={setGroupName}
        placeholder="Group Name"
      />
      <TextInput
        value={OwnerName}
        onChangeText={setOwnerName}
        placeholder="Owner Name"
      />
      <TextInput
        value={friendName}
        onChangeText={setFriendName}
        placeholder='Friend Name'/>
      <Button title="Add Friend" onPress={addFriend} />
      <FlatList
        data={participants}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title="Save" onPress={saveGroup} />
      <Button title="Cancel" onPress={cancel} />
    </View>
  );
};

export default CreateGroupScreen; 