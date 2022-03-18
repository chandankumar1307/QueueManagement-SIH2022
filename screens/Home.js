import { useState } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';

import Button from '../components/Button';
import TopMenu from '../components/TopMenu';
import ActiveQueue from '../components/ActiveQueue';

export default function HomeScreen({navigation}) {
    const openJoinScreen = () => navigation.navigate('Join');
    const [queueState, setQueueState] = useState([]);
    
    // Temporary
    const addTestQueueCard = () => {
      setQueueState([...queueState, {name: 'Test', number: Math.floor(Math.random() * 100)}]);
    }

  return (
    <SafeAreaView style={styles.container}>
        <TopMenu navigation={navigation}/>
        <SafeAreaView style={styles.buttonsView}>
            <Button 
                text='Join Queue' 
                icon={require('../assets/Queue.png')}
                style={styles.joinButton}
                onPress={addTestQueueCard}>
            </Button>

            <Button 
                text='Scan and Join' 
                icon={require('../assets/qricon.png')}
                style={styles.QRButton}
                onPress={() => console.log('Not implemented')}>
            </Button>

        </SafeAreaView>
        <ActiveQueue queueState={queueState}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      alignContent: 'flex-start',
      justifyContent: 'space-evenly',
    },
  
    buttonsView: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '80%',
    },

    joinButton: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      alignContent: 'center',
      backgroundColor: '#F0F0F0',
      borderRadius: 20,
      aspectRatio: 1,

      shadowColor: 'black',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
      elevation: 5
  },

  QRButton: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F0F0F0',
    borderRadius: 20,

    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,

    flexDirection: 'row',
},
  });