import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';

import OtpInput from '../components/OtpInput';

export default function OtpScreen( { navigation } ) {
    const [value1, setValue1] = useState();
    const [value2, setValue2] = useState();
    const [value3, setValue3] = useState();
    const [value4, setValue4] = useState();


  return (
    <View style={styles.container}>
        
        <View style={styles.headingContainer}>
            <Text style={styles.Heading}>Enter OTP</Text>
        </View>

        <View style={styles.otpInputContainer}>
            <OtpInput setText={setValue1}/>
            <OtpInput setText={setValue2}/>
            <OtpInput setText={setValue3}/>
            <OtpInput setText={setValue4}/>
        </View>

        <View style={styles.buttonContainer}>
            <Pressable onPress={() => {}} style={styles.buttonStyle}>
                <Text>Verify</Text>
            </Pressable>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  otpInputContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  headingContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  Heading: {
    fontSize: 30,
    fontWeight: "bold",
  },

  buttonContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "stretch",
    padding: 25,
    marginTop: 15,
  },

  buttonStyle: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#F7F7F7',
    justifyContent: "center",
    alignItems: "center",
  },
})
