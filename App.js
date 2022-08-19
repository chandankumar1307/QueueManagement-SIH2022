import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react';

import { AppStateContext, AppStateProvider } from './contexts/AppState';

import LoginScreen from './screens/Login';
import SignupScreen from './screens/Signup';
import HomeScreen from './screens/Home';
import OtpScreen from './screens/Otp';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function UnregisteredUser() {
  return (
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Sign up" component={SignupScreen} />
    </Drawer.Navigator>
  );
}

function RegisteredUser() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  const {appState, setAppState} = useContext(AppStateContext);
  console.log("appstate2r: ", appState);
  
  return (
    <AppStateProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {
            appState.isAuthenticated == false ? (

              <Stack.Screen
                name="StackLogin"
                component={UnregisteredUser}
                options={{ headerShown: false }}
                />
            ) : (   
              <Stack.Screen
                name="StackHome"
                component={RegisteredUser}
                options={{ headerShown: false }}
              />
            )
          }
          <Stack.Screen name="Otp" component={OtpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppStateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
