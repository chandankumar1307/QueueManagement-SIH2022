import React from "react";
import { View, StyleSheet, Text } from "react-native";


export default function CurrentQueue () {
    return (
        <View style={styles.view}>
            <Text style={styles.buttonText}>No queue active</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 8,
        backgroundColor: '#DEDEDE',
        width: '90%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
});