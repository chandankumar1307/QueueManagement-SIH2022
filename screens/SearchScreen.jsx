import { View, Text, StyleSheet, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import { Entypo } from '@expo/vector-icons';

import SearchBar from '../components/SearchBar';
import { spoofQueueItem } from '../src/spoof';

function NoSearchItems() {
  return (
    <View style={styles.searchItemsEmpty}>
      <Entypo name="cross" size={50} color="black" />
      <Text style={{fontSize: 18}}>No result found.</Text>
    </View>
  );
};

const SearchItem = ({ title }) => (
  <View style={styles.searchItem}>
    <Text style={styles.searchItemText}>{title}</Text>
  </View>
);

export default function SearchScreen( {navigation} ) {
  const [_searchPhrase, _setSearchPhrase] = useState("");
  const [_clicked, _setClicked] = useState(false);
  const [searchItems, setSearchItems] = useState([
    spoofQueueItem(),
    spoofQueueItem(),
    spoofQueueItem(),
    spoofQueueItem(),
    spoofQueueItem(),
    spoofQueueItem(),
    spoofQueueItem(),
    spoofQueueItem(),
    spoofQueueItem(),
    spoofQueueItem()
  ]);

  const renderItem = ({item}) => <SearchItem title={item.name}/> 

    return (
        
        <SafeAreaView style={styles.container}>
          
          <View style={styles.searchBarContainer}>
            <SearchBar
              searchPhrase={_searchPhrase}
              setSearchPhrase={_setSearchPhrase}
              clicked={_clicked}
              setClicked={_setClicked}
              placeholder="Find Queue" 
            />
          </View>

          <View style={styles.searchItemsContainer}>
            <FlatList
              data={searchItems}
              renderItem={renderItem}
              ListEmptyComponent={NoSearchItems}
            /> 
          </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    searchBarContainer: {
      flex: 0.5,
      alignItems: "center",
    },

    searchItemsContainer: {
      flex: 4,
    },

    searchItemsEmpty: {
      flex: 1,
      alignItems: "center",
    },

    searchItem: {
      borderWidth: 1,
      borderRadius: 8,
      padding: 15,
      marginVertical: 5,
      marginHorizontal: 10,
      borderColor: "#EEE9E9"
    },

    searchItemText: {
      fontSize: 20,
    },
  })