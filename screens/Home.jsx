import { View, Text, StyleSheet, Pressable, ScrollView, SafeAreaView, Button, FlatList } from 'react-native';
import { useState } from 'react';
import { Entypo, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';

import QueueType from '../components/QueueType';
import { SearchBarShell } from '../components/SearchBar';

import { spoofQueueItem } from '../src/spoof';

function EmptyQueueView() {
  return (
    <View style={styles.emptyQueueContainer}>
      <Entypo name="cross" size={50} color="black" />
      <Text style={{fontSize: 18}}>You have not joined any queue.</Text>
    </View>
  );
};

const QueueItem = ({ name, waitingTime, number }) => (
  <View style={styles.queueItem}>
    <Text style={styles.queueItemTetx}>{name}</Text>
    <Text style={styles.queueItemTetx}>{waitingTime}</Text>
    <Text style={styles.queueItemTetx}>{number}</Text>
  </View>
);


export default function HomeScreen( { navigation } ) {
  // const [_searchPhrase, _setSearchPhrase] = useState("");
  // const [_clicked, _setClicked] = useState(false);
  const [ queueItems, setQueueItems ] = useState([]); // This should probably be in a context hook

  const renderItem = ({queueItem}) => <QueueItem name={queueItem.name} waitingTime={queueItem.waitingTime} number={queueItem.number}/>

  const getGreeting = () => {
    var hour = new Date().getHours();
    if(hour < 12) return "Good Morning";
    else if(hour < 17) return "Good Afternoon";
    else return "Good Evening";
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={{ justifyContent: "center", alignItems: "center", flexGrow: 1}}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>
            {getGreeting()}, Divyam {/* Should get the name from appState once context hook is added */}  
          </Text>
        </View>

        <View style={styles.HomeButtonsTopContainer}>
            
          {/* Join Queue Button */}  
          <Pressable 
              style={styles.HomeButton}
              onPress={() => navigation.navigate("Search")}    
          >
            <MaterialIcons name="queue" size={24} color="black" />
            <Text style={styles.HomeButtonText}>Join Queue</Text>
          </Pressable>
          
          {/* Queue History Button */}  
          <Pressable 
              style={styles.HomeButton}
              onPress={() => console.log("Not implemented.")}    
          >
            <FontAwesome5 name="history" size={24} color="black" />
            <Text style={styles.HomeButtonText}>Queue History</Text>
          </Pressable>

        </View>

        <View style={styles.HomeButtonsBottomContainer}>
          <QueueType
            RenderIcon={() => <FontAwesome5 name="hand-holding-medical" size={24} color="black" />}
            text="Medical"
            available={true}
            selected={true}
          />

          <QueueType
            RenderIcon={() => <Ionicons name="bus" size={24} color="black" />}
            text="Bus"
            available={false}
            selected={false}
          />

          <QueueType
            RenderIcon={() => <Entypo name="shop" size={24} color="black" />}
            text="Shops"
            available={false}
            selected={false}
          />
        </View>


        <View style={styles.searchBarContainer}>
          <SearchBarShell OnPress={() => {navigation.navigate("Search")}}/>
        </View>

        <Button 
          title='temp button add queue item'
          onPress={() => setQueueItems([...queueItems, spoofQueueItem()])}
        />

        <View style={styles.queueContainer}>
            {
              queueItems.length == 0
                ?
              <EmptyQueueView/>
                :
              queueItems.map(renderItem) // currently not working, item is undefined
            }
        </View>
      </ScrollView>        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  searchBarContainer: {
    flex: 1,
    marginTop: 10,
  },

  queueContainer: {
    flex: 6,
    alignItems: 'center',
    justifyContent:' center',
    alignSelf: 'stretch',
    backgroundColor: '#C1CDCD',
    margin: 20,
    marginTop: 0,
    borderRadius: 20,
  },

  emptyQueueContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  nonEmptyQueueContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  HomeButtonsTopContainer: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between",
  },

  HomeButtonsBottomContainer: {
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "space-between",
  },

  welcomeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
  },

  HomeButton: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 15,
    aspectRatio: 1.6,
    borderColor: "black",
    borderWidth: 1.5,
    marginHorizontal: 5,
    backgroundColor: "#EEE9E9",
    flexDirection: "row",
    paddingHorizontal: 10,
  },

  HomeButtonText: {

  },

  scrollView: {
    flex: 1,
  },

  queueItem: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 0.5,
    flexDirection: "row",
    aspectRatio: 2,
  },
})
