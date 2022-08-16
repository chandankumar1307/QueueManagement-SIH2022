import { View, Text, StyleSheet, } from 'react-native';

export default function HomeScreen( { navigation } ) {
  return (
    <View style={styles.container}>
        <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
