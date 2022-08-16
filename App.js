import 'react-native-gesture-handler';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/Login';
import SignupScreen from './screens/Signup';
import HomeScreen from './screens/Home';
import OtpScreen from './screens/Otp';

import initialState from './src/state';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Login({state, setState}) {
  return (
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Login" component={LoginScreen} initialParams={{ "state": state, "setState": setState }} />
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
  const [_state, _setState] = useState(initialState);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          _state.isAuthenticated == false ? (

            <Stack.Screen
              name="StackLogin"
              component={Login}
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
