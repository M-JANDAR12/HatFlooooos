// ExpenseScreen.js
import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, Modal } from 'react-native';

const ExpenseScreen = () => {
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
    <View>
      <Text>Expense Screen</Text>
      <Button title="Add Expense" onPress={() => setModalVisible(true)} />
      <FlatList
        data={expenses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
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
        <View>
          <View>
            <Text>Add Expense</Text>
            <TextInput
              placeholder="Expense Name"
              value={expenseName}
              onChangeText={text => setExpenseName(text)}
            />
            <TextInput
              placeholder="Expense Amount"
              value={expenseAmount}
              onChangeText={text => setExpenseAmount(text)}
              keyboardType="numeric"
            />
            <Button title="Add" onPress={addExpense} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ExpenseScreen;
