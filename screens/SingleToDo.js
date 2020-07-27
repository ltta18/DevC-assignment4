import React from 'react';

import { SingleToDoStyles as styles } from '../styles/styles';
import { 
  View, 
  Text, 
} from 'react-native';

export default function SingleToDo (navigation) {
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

