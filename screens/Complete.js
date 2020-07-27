import React from 'react';

import { EmptyScreenStyles as styles } from '../styles/styles';
import {
  Text, 
  View, 
  SafeAreaView 
} from 'react-native';


export default function Complete () {
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Text>Complete View</Text>
      </View>
    </SafeAreaView>
  );
};