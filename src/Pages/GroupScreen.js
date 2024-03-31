// GroupScreen.js
import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, Modal } from 'react-native';
import { styles } from '../styles/styles';

const GroupScreen = () => {
  const [expenses, setExpenses] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const addExpense = () => {
    if (expenseName && expenseAmount) {
      setExpenses([...expenses, { name: expenseName, amount: expenseAmount }]);
      setModalVisible(false);
      setExpenseName('');
      setExpenseAmount('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Group Screen</Text>
      <Button
        title="Add Expense"
        onPress={() => setModalVisible(true)}
        style={styles.addButton}
      />
      <FlatList
        data={expenses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <Text>{item.name}: ${item.amount}</Text>
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
            <Text style={styles.modalTitle}>Add Expense</Text>
            <TextInput
              style={styles.input}
              placeholder="Expense Name"
              value={expenseName}
              onChangeText={text => setExpenseName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Expense Amount"
              value={expenseAmount}
              onChangeText={text => setExpenseAmount(text)}
              keyboardType="numeric"
            />
            <View style={styles.buttonContainer}>
              <Button title="Add" onPress={addExpense} />
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default GroupScreen;
