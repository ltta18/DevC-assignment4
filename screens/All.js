import React, { useState } from 'react';

import { AllStyles as styles } from '../styles/styles';
import { TODOS } from '../data/data.js';
import { TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { 
  SafeAreaView, 
  Text, 
  View, 
  Alert, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  ImageBackground 
} from 'react-native';

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
      onPress={() => props.onToggleTodo(props.todo.id)}
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

  console.log(todoList)

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
        <ImageBackground 
          style={styles.container} 
          source={{ uri: 'https://mondrian.mashable.com/wp-content%252Fgallery%252Fiphone-6-wallpaper%252Ftumblr_nglh5niidy1tqjbpqo2_1280.jpg%252Ffit-in__850x850.jpg?signature=lE0RDwtRFUlnumotMRH6JRutz-g=&source=https%3A%2F%2Fmashable.com' }}
        >
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
          <TouchableOpacity 
            style={styles.button} 
            onPress={onSubmitTodo}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    
  );
};