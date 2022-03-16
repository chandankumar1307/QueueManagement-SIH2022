import * as React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import TopMenu from '../components/TopMenu';

export default function ManageScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <TopMenu navigation={navigation}/>
        <Text>Manage Page</Text>
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