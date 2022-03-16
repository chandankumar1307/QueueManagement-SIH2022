import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import CreateScreen from './screens/Create';
import JoinScreen from './screens/Join';
import ManageScreen from './screens/Manage';

import SideMenu from './components/SideMenu';


const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      
      <Stack.Navigator options={{headerShown: false}}>
      <Stack.Screen
          name="Menu"
          component={SideMenu}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Join" component={JoinScreen} />
        <Stack.Screen name="Manage" component={ManageScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  buttonsView: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      paddingTop: 15,
      alignItems: 'flex-start'
  },
});
