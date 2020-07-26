import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


export default function Active () {
  return (
    <SafeAreaView style={styles.safeView}>
      <View>
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
  }
});