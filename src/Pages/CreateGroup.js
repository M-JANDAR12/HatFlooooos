import React, { useState } from 'react';
import { Button, Text, View, TextInput, FlatList } from 'react-native';
import axios from 'axios';
import DeviceInfo from 'react-native-device-info';

const CreateGroupPage = ({ navigation }) => {
  const [groupName, setGroupName] = useState('');
  const [friendName, setFriendName] = useState('');
  const [friends, setFriends] = useState([]);

  const addFriend = () => {
    setFriends([...friends, friendName]);
    setFriendName('');
  };

  const saveGroup = async () => {
    const macAddress = await DeviceInfo.getMacAddress(); // Get MAC address

    const groupData = {
      groupName,
      friends,
      macAddress,
    };

    try {
      // Replace 'http://my-api.com/groups' with your API endpoint
      const response = await axios.post('http://my-api.com/groups', groupData);
      console.log(response.data);
      // Navigate back or to another screen after saving the group
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
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
        value={friendName}
        onChangeText={setFriendName}
        placeholder="Friend's Name"
      />
      <Button title="Add Friend" onPress={addFriend} />
      <FlatList
        data={friends}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title="Save" onPress={saveGroup} />
      <Button title="Cancel" onPress={cancel} />
    </View>
  );
};

export default CreateGroupPage; 