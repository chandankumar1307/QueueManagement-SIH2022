import { View, Image, StyleSheet, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

export default function CustomDrawerContent(props) {
  const MenuBarImage = () => <Image source={require("../assets/queuestock.jpg")} style={styles.headerImage}/>;
  const WelcomeText = () => <Text style={styles.headerText}>Welcome, [Name]</Text>
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <DrawerItem label={MenuBarImage}/>
        <DrawerItem label={WelcomeText}/>
      </View>
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