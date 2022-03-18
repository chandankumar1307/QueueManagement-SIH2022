import { DrawerActions } from "@react-navigation/routers";
import React from "react";
import { SafeAreaView, StyleSheet, Text, Image, TouchableWithoutFeedback } from "react-native";

export default function TopMenu({navigation}) {
    const openProfilePage = () => navigation.navigate('Profile');
    const openHomePage = () => navigation.navigate('Home');
    const toggleSideMenu = () => navigation.dispatch(DrawerActions.toggleDrawer());
    return (
        
        <SafeAreaView style={styles.view}>
            <TouchableWithoutFeedback onPress={toggleSideMenu}>
                <Image source={require('../assets/menu.png')}/>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={openHomePage}>
                <Text style={styles.text}>AppName</Text>
            </TouchableWithoutFeedback>
         
            <TouchableWithoutFeedback onPress={openProfilePage}>
                <Image style={styles.profile} source={require('../assets/blankprofile.png')}/>
            </TouchableWithoutFeedback>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
    },

    view: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        width:'100%',
        marginTop: 35,
    },

    profile: {
        width: 30,
        height: 30,
        borderRadius: 64,
        overflow: "hidden",
        borderWidth: 1.1,
        borderColor: "black"
      
    },  
});