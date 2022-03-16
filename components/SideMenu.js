import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/Home';
import JoinScreen from '../screens/Join';
import ManageScreen from '../screens/Manage';
import CreateScreen from '../screens/Create';

const Drawer = createDrawerNavigator();

export default function SideMenu() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Join" component={JoinScreen} />
      <Drawer.Screen name="Create" component={CreateScreen} />
      <Drawer.Screen name="Manage" component={ManageScreen} />
    </Drawer.Navigator>
  );
}