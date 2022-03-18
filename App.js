import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import CustomDrawerContent from './components/SideMenu';
import ProfileButton from './components/ProfileButton';
import JoinScreen from './screens/Join';
import CreateScreen from './screens/Create';
import ManageScreen from './screens/Manage';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        presentation: 'transparentModal',
        headerStyle: { borderRadius: 30, backgroundColor: '#F7F7F7'},
        headerRight: () => <ProfileButton/>
      }} drawerContent={CustomDrawerContent}>

        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Join" component={JoinScreen} />
        <Drawer.Screen name="Create" component={CreateScreen} />
        <Drawer.Screen name="Manage" component={ManageScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
