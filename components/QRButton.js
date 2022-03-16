import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

export default function QRButton( {onPress} ) {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Image source={require('../assets/qricon.jpeg')} style={styles.buttonIcon}/>
                <Text style={styles.buttonText}>Scan and Join</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F0F0F0',
        borderRadius: 20,

        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,

        flexDirection: 'row',
    },

    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 10,
        textAlign: 'center',
        paddingLeft: 10,
    },

    buttonIcon: {
        width: 50,
        height: 50,
    }
});