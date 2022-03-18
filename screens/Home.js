import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

import Button from '../components/Button';
import QueueCard from '../components/QueueCard';

function HomeScreenButtons({navigation, foo}) {
  const openJoinScreen = () => navigation.navigate('Join');

    return (
        <View style={styles.buttonsView}>
            <Button text='Join Queue' style={styles.joinButton} icon={require('../assets/Queue.png')} onPress={foo}></Button>
            <Button text='Scan and Join' style={styles.QRButton} icon={require('../assets/qricon.png')} onPress={() => console.log('Not Implemented')}></Button>
        </View>
    );
}

function EmptyActiveQueues() {
    return (
        <View style={styles.emptyActiveQueueView}>
            <Image source={require('../assets/cross.png')} style={{width: 50, height: 50}} />
            <Text>Look's like you are not in any queue yet :(</Text>
        </View>
    );
}

function ActiveQueues({state}) {
    const renderQueueCard = (item, index) => <QueueCard name={item.name} number={item.number} />;

    return (
        <View style={styles.activeQueueView}>
            <Text style={{
                paddingTop: 25,
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontSize: 13,
                textAlign: 'center',
                marginBottom: 10,
            }}>Your Queues</Text>
            <ScrollView contentContainerStyle={styles.scrollView}>
                {
                    state.length <= 0 ? <EmptyActiveQueues/> : state.map(renderQueueCard)
                }
            </ScrollView>
        </View>
    );
}

export default function HomeScreen({navigation}) {
    const [queueState, setQueueState] = useState([]);
    
    // Temporary
    const addTestQueueCard = () => {
      setQueueState([...queueState, {name: 'Test', number: Math.floor(Math.random() * 100)}]);
    }

  return (
    <View style={styles.container}>
        <HomeScreenButtons navigation={navigation} foo={addTestQueueCard}/>
        <ActiveQueues state={queueState}/>
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

    buttonsView: {
        marginVertical: 25,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '90%',
        height: '15%',
        backgroundColor: '#E8E8E8',
        borderRadius: 15,

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

    scrollView: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 1000,
    },

    activeQueueView: {
        backgroundColor: '#E8E8E8',
        borderRadius: 15,
        width: '90%',
        
    },

    emptyActiveQueueView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 155,
       
    },
  });