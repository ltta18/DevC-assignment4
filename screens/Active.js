import React from 'react';

import { EmptyScreenStyles as styles } from '../styles/styles';
import {  
  Text, 
  View, 
  SafeAreaView 
} from 'react-native';


export default function Active () {
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Text>Active View</Text>
      </View>
    </SafeAreaView>
  );
};