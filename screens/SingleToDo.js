import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SingleToDo (navigation) {
  console.log(navigation)
  const { id, status, body } = navigation.route.params.updatedTodo;
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        {id}. {status}
      </Text>
      <Text style={styles.bodyText}>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerContainer: {
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 30
  },
  bodyText: {
    fontSize: 50
  }
});