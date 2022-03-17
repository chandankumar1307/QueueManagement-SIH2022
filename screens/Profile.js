import * as React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';


export default function ProfileScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <Text>Profile Page</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});