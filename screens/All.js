import React, { useState } from 'react';
import { SafeAreaView, Text, View, Alert, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { TextInput } from 'react-native';
import { TODOS } from '../data/data.js';
import { ScrollView } from 'react-native-gesture-handler';

const TodoItem = props => {
  const statusStyle = {
    backgroundColor: props.todo.status === 'Done' ? '#3282b8' : '#ade498'
  };
  
  const onLongPress = todo => {
    const prompt = `"${todo.body}"`;
    Alert.alert(
      'Delete your todo?',
      prompt,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => props.onDeleteTodo(todo.id) }
      ],
      { cancelable: true }
    );
  };
  
  return (
    <TouchableOpacity
      key={props.todo.body}
      style={[styles.todoItem, statusStyle]}
      onPress={() => onToggleTodo(props.todo.id)}
      onLongPress={() => onLongPress(props.todo)}
    >
      <Text style={styles.todoText}>
        {props.idx + 1}: {props.todo.body}
      </Text>
    </TouchableOpacity>
  );
};

export default function All ({ navigation }) {
  const [todoList, setTodoList] = useState(TODOS);
  const [todoBody, setTodoBody] = useState('');

  const onToggleTodo = id => {
    const todo = todoList.find(todo => todo.id === id);
    todo.status = todo.status === 'Done' ? 'Active' : 'Done';
    const foundIndex = todoList.findIndex(todo => todo.id === id);
    todoList[foundIndex] = todo;
    const newTodoList = [...todoList];
    setTodoList(newTodoList);
    setTimeout(() => {
      navigation.navigate('SingleToDo', {
        updatedTodo: todo
      });
    }, 1000);
  };

  const onDeleteTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const onSubmitTodo = () => {
    const newTodo = {
      body: todoBody,
      status: 'Active',
      id: todoList.length + 1
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setTodoBody('');
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
      <ImageBackground style={styles.container} source={{ uri: 'https://mondrian.mashable.com/wp-content%252Fgallery%252Fiphone-6-wallpaper%252Ftumblr_nglh5niidy1tqjbpqo2_1280.jpg%252Ffit-in__850x850.jpg?signature=lE0RDwtRFUlnumotMRH6JRutz-g=&source=https%3A%2F%2Fmashable.com' }}>
      <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.keyboard}
      >
        <ScrollView>
        {todoList.map((todo, idx) => {
          return (
            <TodoItem
              idx={idx}
              todo={todo}
              key={todo.body}
              onToggleTodo={onToggleTodo}
              onDeleteTodo={onDeleteTodo}
            />
          );
        })}
        </ScrollView>
      </KeyboardAvoidingView>
      </ImageBackground>
        
        
        <View style={styles.inputContainer}>
          <TextInput
            value={todoBody}
            style={styles.todoInput}
            onChangeText={text => setTodoBody(text)}
          />
          <TouchableOpacity style={styles.button} onPress={onSubmitTodo}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1
  }, 
  keyboard: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  todoItem: {
    margin: 5,
    padding: 10,
    width: '95%',
    minHeight: 20,
    color: 'white',
    borderRadius: 5,
    flexWrap: 'nowrap',
  },
  todoText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  todoInput: {
    width: '95%',
    minHeight: 30,
    color: 'white',
    borderWidth: 1,
    marginTop: '20%',
    marginBottom: '5%',
    borderColor: 'grey'
  },
  inputContainer: {
    // flex: 2/7,
    width: '90%',
    marginTop: 20,
    marginBottom: '10%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    height: 50,
    width: '50%',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#3282b8',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});