import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';

import TextInputButton from '../components/TextInput';

export default function CreateScreen() {
  const [queue, setQueue] = useState({
    per_person_time: 'null',
    max_q_length: 'null',
    location: 'null',
    priority: 'null',
  });

  const handleCreateQueue = () => {
    // call the api and create the queue
    Keyboard.dismiss();
    console.log(queue);
    setQueue({
      per_person_time: 'null',
      max_q_length: 'null',
      location: 'null',
      priority: 'null',
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Create an Queue</Text>
      <TextInputButton viewStyle={styles.textInputView} inputStyle={styles.textInput} placeholder={'Enter: Per person time'} onChangeText={text => setQueue({...queue, 'per_person_time': text})} />
      <TextInputButton viewStyle={styles.textInputView} inputStyle={styles.textInput} placeholder={'Enter: Maximum queue length'} onChangeText={text => setQueue({...queue, 'max_q_length': text})} />
      <TextInputButton viewStyle={styles.textInputView} inputStyle={styles.textInput} placeholder={'Enter: Location'} onChangeText={text => setQueue({...queue, 'location': text})} />
      <TextInputButton viewStyle={styles.textInputView} inputStyle={styles.textInput} placeholder={'Enter: Priority'} onChangeText={text => setQueue({...queue, 'priority': text})} />
  
      <TouchableOpacity onPress={handleCreateQueue}>
            <View style={styles.buttonStyle}>
                <Text style={styles.buttonText}>Create Queue</Text>
            </View>
        </TouchableOpacity>
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

  headingText: {
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 12,
  },

  textInputView: {
    marginTop: 20,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
  },

  textInput: {
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 12,
    textAlign: 'center',
  },

  buttonStyle: {
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    width: 200,
    height: 50,
    borderWidth: 1,
  },

  buttonText: {

  },
})