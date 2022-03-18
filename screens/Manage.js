import { View, Text, StyleSheet } from 'react-native';


export default function ManageScreen() {
  return (
    <View style={styles.container}>
      <Text>Manage Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 40,
    marginTop: 3,
  },
})