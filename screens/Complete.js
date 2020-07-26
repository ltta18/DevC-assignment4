import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


export default function Complete () {
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Text>Complete View</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1
  }, 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});