import React from 'react';
import { View, FlatList, Text } from 'react-native';

const GroupListPage = ({ groups }) => {
  return (
    <View>
      <FlatList
        data={groups}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default GroupListPage; 