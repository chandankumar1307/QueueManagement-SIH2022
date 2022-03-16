import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import TopMenu from '../components/TopMenu';

export default function CreateScreen({navigation}) {
  return (
    <View style={styles.container}>
        <TopMenu navigation={navigation}/>
        <Text>Create Page</Text>
    </View>
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