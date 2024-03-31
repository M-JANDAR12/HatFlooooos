// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, Modal } from 'react-native';
import { styles } from '../styles/styles';

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
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button title="Create Group" onPress={() => setModalVisible(true)} />
      <FlatList
        data={groups}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.buttonContainer}>
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
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Create Group</Text>
            <TextInput
              style={styles.input}
              placeholder="Group Name"
              value={groupName}
              onChangeText={text => setGroupName(text)}
            />
            <View style={styles.buttonContainer}>
              <Button title="Create" onPress={addGroup} />
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;
