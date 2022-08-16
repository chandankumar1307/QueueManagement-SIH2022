import { View, Text, StyleSheet, TextInput, ImageBackground, Pressable } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from 'react';

const dropdownValues = [
  { label: 'User', value: '1' },
  { label: 'Creator', value: '2' },
];

function CreateUserAcc() {
  return (
    <View>
      <View style={styles.centerContainer}>
        <View style={styles.textInputView}><TextInput style={styles.textInput} placeholder="First Name"/></View>
        <View style={styles.textInputView}><TextInput style={styles.textInput} placeholder="Last Name"/></View>
        <View style={styles.textInputView}><TextInput style={styles.textInput} placeholder="Mobile Number"/></View>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable onPress={() => console.log("create acc")} style={styles.buttonStyle}>
          <Text>Register</Text>
        </Pressable>
      </View>
    </View>
  );
}

function CreateCreatorAcc() {
  return (
    <View>
      <View style={styles.centerContainer}>
        <View style={styles.textInputView}><TextInput style={styles.textInput} placeholder="First Name"/></View>
        <View style={styles.textInputView}><TextInput style={styles.textInput} placeholder="Last Name"/></View>
        <View style={styles.textInputView}><TextInput style={styles.textInput} placeholder="Mobile Number"/></View>
        <View style={styles.textInputView}><TextInput style={styles.textInput} placeholder="Doctor ID thingy"/></View>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable onPress={() => console.log("create acc")} style={styles.buttonStyle}>
          <Text>Register</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function SignupScreen( { navigation } ) {
  const [userType, setUserType] = useState('1');

  return (
    <View style={styles.container}>
        <ImageBackground source={require('../assets/login_bg.jpg')} resizeMode="cover" style={styles.imageBackground} imageStyle={{opacity: 0.2}}>
            <View>
                <View style={styles.centerContainerHeader}>
                    <Text style={styles.Heading}>Create Account</Text>
                </View>
                
                <View style={styles.dropdownContainer}>
                  {
                    // https://www.npmjs.com/package/react-native-element-dropdown
                  }

                  <Dropdown 
                    data={dropdownValues}           
                    labelField="label"
                    valueField="value"
                    onChange={item => setUserType(item.value)}
                    style={styles.dropdown}
                    placeholder="User Type"
                    placeholderStyle={styles.dropdownPlaceholder}
                    value={dropdownValues[0]}
                  />
                </View>
                
                {
                  userType == '1' ? <CreateUserAcc/> : <CreateCreatorAcc/>
                }

            </View>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 40,
    marginTop: 3,
    alignItems: "stretch",
  },

  centerContainer: {
    justifyContent: "center",
    paddingTop: 5,
    margin: 10,
  },

  centerContainerHeader: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  Heading: {
    paddingTop: 10,
    fontSize: 30,
    fontWeight: "bold",
  },

  textInputView: {
    padding: 5,
    alignContent: "center",
    marginTop: 10,
  },

  textInput: {
    borderWidth: 1,
    padding: 20,
    paddingHorizontal: 30,
    borderRadius: 20,
    
  },

  imageBackground: {
    flex: 1,
    justifyContent: "center"
  },

  buttonContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "stretch",
    margin: 40,
  },

  buttonStyle: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#F7F7F7',
    justifyContent: "center",
    alignItems: "center",
  },

  dropdownContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "stretch",
    margin: 10,
    padding: 5,
    alignContent: "center",
    marginTop: 10,
  },

  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },

  dropdownPlaceholder: {
    color: 'gray',
    fontSize: 17,
  }

})
