import {useState} from "react";
import { View, StyleSheet, TouchableOpacity, Text, Modal } from "react-native";

export default function QueueCard( {name, number} ) {
    const [modalVisible, setModalVisible] = useState(false);
    const onPress = () => modalVisible ? setModalVisible(false) : setModalVisible(true);

    return (
        <TouchableOpacity onPress={onPress}>
            <Modal 
            animationType="slide" 
            transparent={true} 
            visible={modalVisible}>
                <View style={styles.modal}>

                    <View style={styles.modalBar}>
                        <TouchableOpacity onPress={onPress}>
                            <View style={styles.square}>
                                <Text>X</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <Text>{name}</Text>
                    <Text>Queue number: {number}</Text>
                    <Text>Queue Desicription and Other Deatils:</Text>
                </View>
            </Modal>

            <View style={styles.view}>

                <View style={styles.viewLeft}>

                    <View style={styles.square}>
                        <Text>{number}</Text>
                    </View>
                
                </View>

                <View style={styles.viewRight}>
                    <Text style={styles.text}>{name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#EDEDED',
        padding: 15,
        borderRadius: 8,
        marginBottom: 20,

        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,  
        elevation: 5,

        width: '100%',
    },

    square: {
        width: 32,
        height: 32,
        backgroundColor: '#E0E0E0',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    viewLeft: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        position: 'absolute',
        left: 20,
    },

    viewRight: {
        maxWidth: '80%',
        justifyContent: 'flex-end',
    },

    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },

    modal: {
        width: '80%',
        height: '70%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#CFCFCF',
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 2,
        alignSelf: 'center',
        marginTop: 100
    },

    modalBar: {
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        alignSelf: 'flex-end',
        paddingHorizontal: 5,
        paddingVertical: 5,
    }
});