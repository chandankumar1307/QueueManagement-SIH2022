import { SafeAreaView, Image, StyleSheet, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import HomeScreen from '../screens/Home';
import JoinScreen from '../screens/Join';
import ManageScreen from '../screens/Manage';
import CreateScreen from '../screens/Create';

const Drawer = createDrawerNavigator();

export default function SideMenu() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}} drawerContent={CustomDrawerContent}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Join" component={JoinScreen} />
      <Drawer.Screen name="Create" component={CreateScreen} />
      <Drawer.Screen name="Manage" component={ManageScreen} />
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  const MenuBarImage = () => <Image source={require("../assets/queuestock.jpg")} style={styles.headerImage}/>;
  const WelcomeText = () => <Text style={styles.headerText}>Welcome, [Name]</Text>
  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView>
        <DrawerItem label={MenuBarImage}/>
        <DrawerItem label={WelcomeText}/>
      </SafeAreaView>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: 120,
    width: 250,
    borderRadius: 10,
  },

  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'left',
  }
})