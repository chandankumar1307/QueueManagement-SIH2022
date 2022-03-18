import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

export default function Button( {text, icon, style, onPress} ) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style}>
                <Image source={icon} style={styles.buttonIcon}/>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 8,
        textAlign: 'center',
    },

    buttonIcon: {
        width: 50,
        height: 50,
    }
});