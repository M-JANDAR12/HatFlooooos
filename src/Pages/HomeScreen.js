// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, Modal } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [groups, setGroups] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [groupName, setGroupName] = useState('');

  const addGroup = () => {
    if (groupName) {
      setGroups([...groups, { name: groupName }]);
      setModalVisible(false);
      setGroupName('');
    }
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Create Group" onPress={() => setModalVisible(true)} />
      <FlatList
        data={groups}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Button
              title={item.name}
              onPress={() => navigation.navigate('Group')}
            />
          </View>
        )}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View>
          <View>
            <Text>Create Group</Text>
            <TextInput
              placeholder="Group Name"
              value={groupName}
              onChangeText={text => setGroupName(text)}
            />
            <Button title="Create" onPress={addGroup} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;
